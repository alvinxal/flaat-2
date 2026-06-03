import "dotenv/config";
import { createClient } from "next-sanity";
import { writeFileSync, mkdirSync } from "fs";

const client = createClient({
  projectId: "gmn50sfw",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

async function main() {
  const projects = await client.fetch(
    `*[_type == "project" && !defined(bodyEn)]{_id, title, titleEn, bodyId} | order(title asc)`,
  );

  mkdirSync("scripts/trans", { recursive: true });

  for (const p of projects) {
    const trans: Record<string, string> = {};
    for (const block of p.bodyId || []) {
      if (block._type === "block" && block.children) {
        for (const child of block.children) {
          if (child._type === "span" && child.text?.trim()) {
            // Use child._key for precise mapping
            trans[`${block._key}.${child._key}`] = child.text;
          }
        }
      }
    }
    const name = p.titleEn?.replace(/[^a-zA-Z0-9]/g, "_") || p.title?.replace(/[^a-zA-Z0-9]/g, "_");
    writeFileSync(`scripts/trans/${p._id}.json`, JSON.stringify(trans, null, 2));
    console.log(`Template: scripts/trans/${p._id}.json (${Object.keys(trans).length} entries)`);
  }
  console.log("Done generating templates.");
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
