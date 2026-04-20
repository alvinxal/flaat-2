const _projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const _dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const apiVersion: string =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-01-01";

if (!_projectId) throw new Error("Missing env: NEXT_PUBLIC_SANITY_PROJECT_ID");
if (!_dataset) throw new Error("Missing env: NEXT_PUBLIC_SANITY_DATASET");

export const projectId: string = _projectId;
export const dataset: string = _dataset;
