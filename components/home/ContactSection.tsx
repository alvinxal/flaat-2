import Image from "next/image";

const content = {
  label: "CONTACT",
  title: "Kontak",
  office: "Yogyakarta, Indonesia",
  phone: "+62 895-1830-1707",
  phoneHref: "tel:+6289518301707",
  email: "hi@flaat.studio",
  emailHref: "mailto:hi@flaat.studio",
  image: "/assets/images/contemplative-profile-against-colorful-backdrop-1.png",
  imageAlt: "Tim Flaat Studio dalam Diskusi",
};

export default function ContactSection() {
  return (
    <section
      id='contact'
      className='p-5 bg-[#2f4157] flex flex-col gap-4 desk:p-8'
    >
      <div className='flex items-center justify-between gap-4 mb-8'>
        <p className='m-0 font-mono text-xs tracking-widest uppercase text-inverse'>
          {content.label}
        </p>
        <h2 className='m-0 text-inverse text-xl leading-tight font-semibold font-sans'>
          {content.title}
        </h2>
      </div>

      <div className='grid gap-6 tab:grid-cols-2 desk:grid-cols-2'>
        <div className='flex flex-col gap-5'>
          <div className='grid gap-4'>
            <div>
              <p className='m-0 text-white/60 font-mono text-xs tracking-widest uppercase'>
                Lokasi
              </p>
              <span className='m-0 text-white text-lg leading-[1.3] tracking-[-0.02em]'>
                {content.office}
              </span>
            </div>
            <div>
              <p className='m-0 text-white/60 font-mono text-xs tracking-widest uppercase'>
                WhatsApp
              </p>
              <a
                href={content.phoneHref}
                className='text-white no-underline text-lg leading-[1.3] tracking-[-0.02em]'
                style={{ color: "white" }}
              >
                {content.phone}
              </a>
            </div>
            <div>
              <p className='m-0 text-white/60 font-mono text-xs tracking-widest uppercase'>
                Email
              </p>
              <a
                href={content.emailHref}
                className='text-white no-underline text-lg leading-[1.3] tracking-[-0.02em]'
                style={{ color: "white" }}
              >
                {content.email}
              </a>
            </div>
          </div>
        </div>

        <form className='flex flex-col gap-5'>
          <label className='flex flex-col gap-3'>
            <span className='m-0 text-white/60 font-mono text-xs tracking-widest uppercase'>
              Nama
            </span>
            <input
              type='text'
              name='name'
              placeholder='Nama Anda'
              className='w-full pb-[0.85rem] border-0 border-b border-white/30 bg-transparent text-white text-lg outline-none placeholder:text-white/60'
            />
          </label>
          <label className='flex flex-col gap-3'>
            <span className='m-0 text-white/60 font-mono text-xs tracking-widest uppercase'>
              Email
            </span>
            <input
              type='email'
              name='email'
              placeholder='nama@perusahaan.com'
              className='w-full pb-[0.85rem] border-0 border-b border-white/30 bg-transparent text-white text-lg outline-none placeholder:text-white/60'
            />
          </label>
          <label className='flex flex-col gap-3'>
            <span className='m-0 text-white/60 font-mono text-xs tracking-widest uppercase'>
              Pesan
            </span>
            <textarea
              name='message'
              rows={5}
              placeholder='Ceritakan kebutuhan & tantangan bisnis Anda...'
              className='w-full pb-[0.85rem] border-0 border-b border-white/30 bg-transparent text-white text-lg outline-none placeholder:text-white/60 resize-vertical min-h-[6rem]'
            />
          </label>
          <button
            type='button'
            className='w-fit px-5 py-[0.9rem] border border-white/30 bg-transparent text-white text-lg'
          >
            Mulai Diskusi
          </button>
        </form>
      </div>
    </section>
  );
}
