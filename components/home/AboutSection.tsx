const content = {
  label: "ABOUT",
  eyebrow: "Tentang Kami",
  text: "Flaat Studio adalah hybrid partner digital yang menggabungkan web development, integrasi AI, dan strategi marketing untuk membangun kredibilitas serta mendorong profitabilitas bisnis Anda. Kami percaya kehadiran digital yang hebat bukan hanya soal estetika, tapi tentang sistem yang bekerja otomatis menghasilkan konversi.",
};

export default function AboutSection() {
  return (
    <section id='about' className='flex flex-col gap-4 relative overflow-hidden scroll-mt-[80px] desk:scroll-mt-[80px]'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
        aria-hidden='true'
      />
      <div className='absolute inset-0 bg-black/65' aria-hidden='true' />

      <div className='relative flex flex-col gap-24 tab:gap-48 justify-between min-h-[24rem] p-6 tab:p-8'>
        <div className='flex flex-col gap-12'>
          <div className='flex items-center justify-between gap-4'>
            <p className='m-0 font-mono text-xs tracking-widest uppercase text-white/80'>
              {content.label}
            </p>
            <h2 className='m-0 text-xl leading-tight font-semibold font-sans text-white'>
              {content.eyebrow}
            </h2>
          </div>
        </div>

        <h3 className='max-w-[45ch]  m-0 text-white text-xl md:text-2xl leading-tight font-reguler'>
          {content.text}
        </h3>
      </div>
    </section>
  );
}
