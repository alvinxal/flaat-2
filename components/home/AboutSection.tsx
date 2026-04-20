const content = {
  label: "ABOUT",
  eyebrow: "Tentang Kami",
  text: "Flaat Studio adalah hybrid partner digital yang menggabungkan web development, integrasi AI, dan strategi marketing untuk membangun kredibilitas serta mendorong profitabilitas bisnis Anda. Kami percaya kehadiran digital yang hebat bukan hanya soal estetika, tapi tentang sistem yang bekerja otomatis menghasilkan konversi.",
};

export default function AboutSection() {
  return (
    <section
      id='about'
      className='bg-white flex flex-col gap-4 relative'
    >
      <div className='absolute right-0 bottom-0 w-[2px] h-[48px] bg-accent hidden desk:block' />
      <div className='absolute right-0 bottom-0 w-[48px] h-[2px] bg-accent hidden desk:block' />
      <div className='flex flex-col gap-24'>
        <div className='flex items-center justify-between gap-4'>
          <p className='m-0 font-mono text-xs tracking-widest uppercase text-accent'>
            {content.label}
          </p>
          <h2 className='m-0 text-xl leading-tight font-semibold font-sans'>
            {content.eyebrow}
          </h2>
        </div>
        <h3 className='max-w-[45ch] m-0 text-accent text-xl md:text-2xl leading-tight font-reguler pb-12'>
          {content.text}
        </h3>
      </div>
    </section>
  );
}
