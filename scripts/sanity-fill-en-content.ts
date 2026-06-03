import "dotenv/config";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "gmn50sfw",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

type PatchItem = { _id: string; [key: string]: unknown };

async function main() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("ERROR: SANITY_API_WRITE_TOKEN env var required");
    process.exit(1);
  }

  const [, , action] = process.argv;

  if (action === "patch-json") {
    let buf = "";
    process.stdin.on("data", (chunk) => (buf += chunk));
    process.stdin.on("end", () => {
      const input: PatchItem[] = JSON.parse(buf);
      if (!Array.isArray(input)) {
        console.error("Expected JSON array from stdin");
        process.exit(1);
      }
      const patches = input.map((item) => {
        const { _id, ...rest } = item;
        if (rest.set && typeof rest.set === "object" && !Array.isArray(rest.set)) {
          return { _id, set: rest.set as Record<string, unknown> };
        }
        return { _id, set: rest as Record<string, unknown> };
      });
      runPatches(patches).catch((e) => {
        console.error("Failed:", e.message || e);
        process.exit(1);
      });
    });
    return;
  }

  console.error("Usage: tsx scripts/sanity-fill-en-content.ts patch-json < patches.json");
  process.exit(1);
}

async function runPatches(patches: { _id: string; set: Record<string, unknown> }[]) {
  let count = 0;
  for (const { _id, set } of patches) {
    const keys = Object.keys(set);
    console.log(`Patching ${_id}: ${keys.join(", ")}`);
    await client.patch(_id).set(set).commit();
    count++;
  }
  console.log(`Done. ${count} project(s) patched.`);
}

main().catch((e) => {
  console.error("Script failed:", e.message || e);
  process.exit(1);
});
