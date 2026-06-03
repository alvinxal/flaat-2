import "dotenv/config";
import { createClient } from "next-sanity";
import { readFileSync, writeFileSync } from "fs";

const client = createClient({
  projectId: "gmn50sfw",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

async function main() {
  const [, , action, projectId, patchFile] = process.argv;

  if (action === "body-refs") {
    const ids = projectId ? [projectId] : [];
    const filter = ids.length ? `&& _id in $ids` : "";
    const projects = await client.fetch(
      `*[_type == "project" ${filter}]{_id, title, bodyId} | order(title asc)`,
      ids.length ? { ids } : undefined,
    );
    for (const p of projects) {
      if (!p.bodyId) continue;
      const summary = (p.bodyId as { _type: string; _key: string; asset?: { _ref: string } }[]).map(
        (b) => {
          if (b._type === "image") return { key: b._key, type: "image", ref: b.asset?._ref };
          if (b._type === "block") {
            const text = (b as { children?: { text: string }[] }).children
              ?.map((c) => c.text.slice(0, 60))
              .join(" | ");
            return { key: b._key, type: "block", style: (b as { style?: string }).style, text };
          }
          return { key: b._key, type: b._type };
        },
      );
      console.log(`\n=== ${p.title} (${p._id}) ===`);
      summary.forEach((s) => console.log(JSON.stringify(s)));
    }
    return;
  }

  console.error("Usage: tsx script body-refs [projectId]");
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
