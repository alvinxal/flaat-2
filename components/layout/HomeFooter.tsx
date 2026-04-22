import Link from "next/link";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/#about" },
  { label: "Layanan", href: "/#service" },
  { label: "Portofolio", href: "/#projects" },
  { label: "Kontak", href: "/#contact" },
];

const socialItems = [
  { name: "Instagram", href: "https://www.instagram.com/flaatstudio/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/flaat-studio-84ab3b39a/" },
];

export default function HomeFooter() {
  return (
    <footer className='flex flex-col gap-12 w-full p-5 bg-[#fafafa] tab:p-8 tab:gap-12 desk:p-8 desk:gap-12'>
      <div className='flex flex-col gap-10 w-full tab:flex-row tab:justify-between tab:items-start'>
        <div className='flex flex-col justify-between w-full max-w-[450px] tab:w-[48%] tab:min-w-[240px] min-h-[150px]'>
          <div>
            <Link
              href='/'
              className='inline-flex items-center text-gray-700 no-underline font-display text-2xl leading-[1.3] font-bold'
            >
              Flaat Studio
            </Link>
          </div>
          <div className='flex flex-col gap-1.5'>
            <p className='m-0 font-mono text-xs leading-[1.1] uppercase text-muted'>
              Technology & Digital Marketing Agency
            </p>
            <div className='flex flex-wrap items-center gap-1 font-mono text-xs leading-[1.1] uppercase text-muted'>
              <span>Based on yogyakarta</span>
              <span>•</span>
              <span>2025</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2 w-full tab:w-[26%]'>
          <p className='m-0 font-mono text-xs leading-[1.1] uppercase text-gray-800'>
            navigasi
          </p>
          <nav className='flex flex-col items-start gap-0'>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className='inline-flex gap-1 py-0.5 font-sans text-lg font-medium leading-[1.3] tracking-[-0.02em] no-underline'
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className='flex flex-col gap-2 w-full tab:w-[26%]'>
          <p className='m-0 font-mono text-xs leading-[1.1] uppercase text-gray-800'>
            sosial media
          </p>
          <div className='flex flex-col items-start gap-0'>
            {socialItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noreferrer'
                className='inline-flex gap-1 py-0.5 font-sans text-lg font-medium leading-[1.3] tracking-[-0.02em] no-underline'
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-2 w-full tab:w-[26%]'>
          <p className='m-0 font-mono text-xs leading-[1.1] uppercase text-gray-800'>
            kontak
          </p>
          <div className='flex flex-col items-start gap-0'>
            <a
              href='https://wa.me/6289518301707'
              target='_blank'
              rel='noreferrer'
              className='inline-flex gap-1 py-0.5 font-sans text-lg font-medium leading-[1.3] tracking-[-0.02em] no-underline'
            >
              WhatsApp
            </a>
            <a
              href='mailto:hi@flaat.studio'
              className='inline-flex gap-1 py-0.5 font-sans text-lg font-medium leading-[1.3] tracking-[-0.02em] no-underline'
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
