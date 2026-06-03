import { createClient } from "next-sanity";

const client = createClient({
  projectId: "gmn50sfw",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

type Project = {
  _id: string;
  _type: string;
  title: string;
  titleId: string | null;
  slug: { current: string; _type: string };
  slugId: { current: string; _type: string } | null;
  description: string | null;
  descriptionId: string | null;
  body: unknown;
  bodyId: unknown;
};

async function main() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("ERROR: SANITY_API_WRITE_TOKEN env var required");
    process.exit(1);
  }

  const projects = await client.fetch<Project[]>(
    '*[_type == "project"]{_id, _type, title, titleId, slug, slugId, description, descriptionId, body, bodyId}',
  );

  console.log(`Found ${projects.length} project(s)`);

  let patched = 0;
  let skipped = 0;

  for (const project of projects) {
    const patches: Record<string, unknown> = {};

    if (!project.titleId && project.title) {
      patches.titleId = project.title;
    }
    if (!project.slugId && project.slug?.current) {
      patches.slugId = { _type: "slug", current: project.slug.current };
    }
    if (!project.descriptionId && project.description) {
      patches.descriptionId = project.description;
    }
    if (!project.bodyId && project.body) {
      patches.bodyId = project.body;
    }

    if (Object.keys(patches).length === 0) {
      console.log(`  SKIP  ${project.title} — all bilingual fields already set`);
      skipped++;
      continue;
    }

    console.log(
      `  PATCH ${project.title} → ${Object.keys(patches).join(", ")}`,
    );

    await client.patch(project._id).set(patches).commit();

    patched++;
  }

  console.log(`\nDone. ${patched} patched, ${skipped} skipped.`);
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
