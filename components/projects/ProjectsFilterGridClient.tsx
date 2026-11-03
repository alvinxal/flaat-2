"use client";

import { useSearchParams } from "next/navigation";
import type { ComponentProps } from "react";

import ProjectsFilterGrid from "@/components/projects/ProjectsFilterGrid";

type GridProps = Omit<ComponentProps<typeof ProjectsFilterGrid>, "activeType">;

// Reads ?type= on the client so the page itself can be prerendered. The
// Suspense fallback in the page renders the unfiltered grid into the static HTML.
export default function ProjectsFilterGridClient({ projects, filterTypes, locale }: GridProps) {
  const type = useSearchParams().get("type");
  const activeType = type && filterTypes.some((filterType) => filterType.slug === type) ? type : "all";
  const filteredProjects =
    activeType === "all"
      ? projects
      : projects.filter((project) => project.types?.some((projectType) => projectType.slug === activeType));

  return (
    <ProjectsFilterGrid
      locale={locale}
      projects={filteredProjects}
      filterTypes={filterTypes}
      activeType={activeType}
    />
  );
}
