import Link from "next/link";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/#about" },
  { label: "Portofolio", href: "/#projects" },
  { label: "Layanan", href: "/#service" },
  { label: "Kontak", href: "/#contact" },
];

export default function HomeFooter() {
  return (
    <footer className='flex flex-col gap-12 w-full p-8 bg-[#fafafa] tab:p-8 tab:gap-12 desk:p-8 desk:gap-12'>
      <div className='flex flex-col gap-10 w-full tab:flex-row tab:justify-between tab:items-start'>
        <div className='w-full max-w-[450px] tab:w-[48%] tab:min-w-[240px]'>
          <div className='flex flex-col gap-2 pt-1 border-gray-400'>
            <div>
              <Link
                href='/'
                className='inline-flex items-center text-gray-700 no-underline font-display text-2xl leading-[1.3] font-bold'
              >
                Flaat Studio
              </Link>
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
      </div>

      <div className='flex flex-col gap-4 tab:flex-row tab:justify-between tab:items-end'>
        <div className='flex flex-col gap-1 text-muted'>
          <p className='m-0 font-mono text-xs leading-[1.1] uppercase'>
            Technology & Digital Marketing Agency
          </p>
          <p className='m-0 font-mono text-xs leading-[1.1] uppercase'>
            Based on yogyakarta
          </p>
        </div>
        <p className='m-0 font-mono text-xs leading-[1.1] uppercase text-muted tab:w-[26%]'>
          (©2025)
        </p>
      </div>
    </footer>
  );
}
