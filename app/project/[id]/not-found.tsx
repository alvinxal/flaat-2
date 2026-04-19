import Link from "next/link";

export default function NotFound() {
  return (
    <main className='min-h-screen px-5 pb-8 desk:pl-[260px] desk:px-10'>
      <div className='relative w-full max-w-[1300px] mx-auto flex flex-col gap-[7.5rem] pt-10 px-5 tab:p-8 desk:p-8 desk:border-r desk:border-gray-200'>
        <div className='flex flex-col gap-8 items-start'>
          <h1 className='m-0 text-2xl tab:text-3xl desk:text-4xl leading-tight tracking-tight font-medium font-sans text-gray-800'>
            Project not found
          </h1>
          <p className='m-0 text-lg leading-[1.3] tracking-[-0.02em] font-body text-gray-500'>
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href='/#projects'
            className='inline-flex items-center gap-2 text-gray-800 no-underline font-sans text-lg leading-[1.3] tracking-[-0.02em] hover:opacity-60 transition-opacity duration-250'
          >
            <span>←</span>
            <span>View all projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
}