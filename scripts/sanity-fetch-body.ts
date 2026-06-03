import "dotenv/config";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "gmn50sfw",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

async function main() {
  const [, , action, projectIdOrNdx] = process.argv;

  if (action === "fetch-body") {
    const query = projectIdOrNdx
      ? `*[_type == "project" && _id == $id]{_id, title, titleEn, "body": bodyId}[0]`
      : `*[_type == "project"]{_id, title, titleEn} | order(title asc)`;

    const params = projectIdOrNdx ? { id: projectIdOrNdx } : {};
    const data = await client.fetch(query, params);
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  if (action === "list") {
    const projects = await client.fetch(
      `*[_type == "project"]{_id, title, titleEn, "hasBodyEn": defined(bodyEn)} | order(title asc)`,
    );
    for (const p of projects) {
      const t = p.titleEn ? "✅" : "⏳";
      const b = p.hasBodyEn ? "✅" : "❌";
      console.log(`${t}|${b}| ${p._id.slice(0,8)} | ${p.title}`);
    }
    return;
  }

  console.error("Usage:");
  console.error("  tsx fetch.ts fetch-body [projectId]  # single project or all");
  console.error("  tsx fetch.ts list                     # list all projects with status");
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
