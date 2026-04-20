const content = {
  label: "Projects",
  title: "Karya yang telah kami kerjakan untuk berbagai klien dengan penuh dedikasi.",
};

export default function ProjectsHero() {
  return (
    <div className='relative flex flex-col justify-end gap-8 w-full min-h-[24rem] pt-20 pb-6 tab:h-[20rem] tab:min-h-[20rem] tab:max-h-[20rem] desk:h-[20rem] desk:min-h-[20rem] desk:max-h-[20rem]'>
      <div className='absolute top-0 left-0 right-0 hidden desk:flex items-center justify-between gap-6 py-3 font-mono text-xs tracking-widest uppercase'>
        <div className='h-[15px]'>{content.label}</div>
      </div>
      <h1 className='max-w-[650px] m-0 text-accent text-2xl tab:text-3xl desk:text-4xl leading-tight tracking-tight font-medium text-wrap-balance'>
        {content.title}
      </h1>
    </div>
  );
}