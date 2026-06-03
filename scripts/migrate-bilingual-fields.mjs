import { createClient } from "@sanity/client";

const projectId = "gmn50sfw";
const dataset = "production";
const apiVersion = "2026-01-01";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const query = `*[_type == "project"]{
  _id,
  _type,
  title,
  "slug": slug.current,
  description,
  body,
  titleId,
  "slugId": slugId.current,
  descriptionId,
  bodyId
}`;

const docs = await client.fetch(query);

const fieldsToCopy = [
  { from: "title", to: "titleId", check: (d) => d.titleId == null },
  { from: "slug", to: "slugId", check: (d) => d.slugId == null },
  { from: "description", to: "descriptionId", check: (d) => d.descriptionId == null },
  { from: "body", to: "bodyId", check: (d) => d.bodyId == null },
];

console.log("=".repeat(80));
console.log("DRY RUN: Fields to copy for project documents");
console.log("=".repeat(80));
console.log();

let totalPatches = 0;
let totalDocs = 0;

for (const doc of docs) {
  totalDocs++;
  console.log(`--- ${doc._id} ---`);
  console.log(`  title:       ${doc.title || "(empty)"}`);
  console.log(`  slug:        ${doc.slug || "(empty)"}`);
  console.log(`  description: ${doc.description ? (doc.description.substring(0, 80) + "...") : "(empty)"}`);
  console.log(`  body:        ${doc.body ? `[${Array.isArray(doc.body) ? doc.body.length + " blocks" : "present"}]` : "(empty)"}`);
  console.log();

  let docHasPatches = false;

  for (const field of fieldsToCopy) {
    const fromVal = doc[field.from];
    const toVal = doc[field.to];
    const shouldCopy = field.check(doc);

    if (shouldCopy && fromVal != null) {
      console.log(`  >> COPY: ${field.from} -> ${field.to}`);
      if (field.from === "slug") {
        console.log(`     value: {current: "${fromVal}"}`);
      } else if (field.from === "body") {
        console.log(`     value: [${Array.isArray(fromVal) ? fromVal.length + " portable text blocks" : "complex object"}])`);
      } else {
        const displayVal = typeof fromVal === "string" ? fromVal.substring(0, 100) : JSON.stringify(fromVal).substring(0, 100);
        console.log(`     value: "${displayVal}"`);
      }
      docHasPatches = true;
      totalPatches++;
    } else if (!shouldCopy) {
      console.log(`  >> SKIP: ${field.from} -> ${field.to} (target already exists: ${JSON.stringify(toVal)})`);
    } else {
      console.log(`  >> SKIP: ${field.from} -> ${field.to} (source is empty/null)`);
    }
  }

  if (!docHasPatches) {
    console.log(`  (no patches needed)`);
  }
  console.log();
}

console.log("=".repeat(80));
console.log(`SUMMARY: ${totalDocs} project documents, ${totalPatches} fields to patch`);
console.log("=".repeat(80));
console.log();
console.log("REQUIRED: A Sanity API write token to execute patches.");
console.log("Get one at: https://sanity.io/manage/project/gmn50sfw/api#tokens");
console.log();
console.log("To execute, set SANITY_WRITE_TOKEN env var and re-run with --execute flag.");
