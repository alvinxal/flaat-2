const content = {
  label: "Projects",
  title: "Karya yang telah kami kerjakan untuk berbagai klien dengan penuh dedikasi.",
};

export default function ProjectsHero() {
  return (
    <div className='relative flex flex-col justify-center tab:justify-end gap-6 tab:gap-7 desk:gap-8 w-full h-[24rem] tab:h-[26rem] desk:h-[28rem] pt-20 pb-6'>
      <div className='absolute top-0 left-0 right-0 flex items-start desk:items-center justify-between gap-6 py-3 font-mono text-xs tracking-widest uppercase'>
        <div className='h-[15px]'>{content.label}</div>
        <div className='ml-auto text-right text-gray-500'>
          <span className='block desk:inline'>Technology &</span>
          <span className='block desk:inline desk:ml-1'>Digital Marketing</span>
          <span className='block desk:inline desk:ml-1'>Agency</span>
        </div>
      </div>
      <h1 className='max-w-[650px] m-0 text-accent text-2xl tab:text-3xl desk:text-4xl leading-tight tracking-tight font-medium text-wrap-balance'>
        {content.title}
      </h1>
    </div>
  );
}
