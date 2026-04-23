"use client";

import { useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type ProjectFilterType = {
  _id: string;
  title: string;
  slug: string;
  count: number;
};

export default function ProjectsFilterNav({
  filterTypes,
  activeType,
}: {
  filterTypes: ProjectFilterType[];
  activeType: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const navigateToType = (type: string) => {
    const nextParams = new URLSearchParams(searchParams.toString());

    if (type === "all") {
      nextParams.delete("type");
    } else {
      nextParams.set("type", type);
    }

    const query = nextParams.toString();
    const href = query ? `${pathname}?${query}` : pathname;

    startTransition(() => {
      router.push(href, { scroll: false });
    });
  };

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-wrap items-center gap-x-6 gap-y-2'>
        <FilterButton
          label='Semua'
          count={filterTypes.reduce((total, filterType) => total + filterType.count, 0)}
          active={activeType === "all"}
          pending={isPending}
          onClick={() => navigateToType("all")}
        />

        {filterTypes.map((filterType) => (
          <FilterButton
            key={filterType._id}
            label={filterType.title}
            count={filterType.count}
            active={activeType === filterType.slug}
            pending={isPending}
            onClick={() => navigateToType(filterType.slug)}
          />
        ))}
      </div>

      <p className='m-0 min-h-5 text-sm leading-normal font-body text-gray-500' aria-live='polite'>
        {isPending ? "Memuat project..." : ""}
      </p>
    </div>
  );
}

function FilterButton({
  label,
  count,
  active,
  pending,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  pending: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={pending && !active}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 cursor-pointer pb-[0.25rem] font-sans text-base leading-[1.3] tracking-[-0.02em] border-b transition-opacity duration-250 disabled:cursor-progress ${
        active
          ? "border-accent text-accent"
          : "border-gray-300 text-gray-500 hover:opacity-70 disabled:hover:opacity-100"
      }`}
    >
      <span>{label}</span>
      <span className='font-mono text-xs uppercase text-current/70'>{count}</span>
    </button>
  );
}
