import "dotenv/config";
import { createClient } from "next-sanity";
import { readFileSync } from "fs";

const client = createClient({
  projectId: "gmn50sfw",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

async function main() {
  const [, , projectId, transFile] = process.argv;
  if (!projectId || !transFile) {
    console.error("Usage: tsx script <projectId> <translations.json>");
    process.exit(1);
  }

  const translations = JSON.parse(readFileSync(transFile, "utf-8")) as Record<string, string>;

  const project = await client.fetch<{ _id: string; title: string; bodyId: unknown[] }>(
    `*[_type == "project" && _id == $id][0]{_id, title, bodyId}`,
    { id: projectId },
  );

  if (!project || !project.bodyId) {
    console.error("Project not found or has no bodyId");
    process.exit(1);
  }

  const bodyEn: unknown[] = [];
  for (const rawBlock of project.bodyId) {
    const block = rawBlock as Record<string, unknown>;
    if (block._type === "block") {
      const children = block.children as Array<Record<string, unknown>> | undefined;
      if (children) {
        const newChildren = children.map((child) => {
          if (child._type === "span" && typeof child.text === "string") {
            const childKey = `${block._key}.${child._key}`;
            const blockKey = block._key as string;
            const translated = translations[childKey] ?? translations[blockKey];
            return { ...child, text: translated ?? child.text };
          }
          return child;
        });
        bodyEn.push({ ...block, children: newChildren });
      } else {
        bodyEn.push(block);
      }
    } else {
      bodyEn.push(block);
    }
  }

  console.log(`Patching bodyEn for ${project.title} (${bodyEn.length} blocks)`);
  await client.patch(projectId).set({ bodyEn }).commit();
  console.log("Done.");
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
