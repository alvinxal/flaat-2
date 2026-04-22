import Link from "next/link";

export default function NotFound() {
  return (
    <main className='min-h-screen px-5 pb-8 desk:pl-[260px] desk:px-10'>
      <div className='relative w-full max-w-[1300px] mx-auto flex flex-col gap-12 pt-24 px-5 tab:p-8 desk:pt-10 desk:p-8 desk:border-r desk:border-gray-200'>
        <section className='flex flex-col gap-8 justify-end min-h-[24rem] tab:min-h-[22rem] desk:min-h-[24rem]'>
          <div className='flex items-center justify-between gap-4 font-mono text-xs tracking-widest uppercase text-gray-500'>
            <span>404</span>
            <span>Halaman tidak ditemukan</span>
          </div>

          <div className='flex flex-col gap-6 max-w-[42rem]'>
            <h1 className='m-0 text-accent text-2xl tab:text-3xl desk:text-4xl leading-tight tracking-tight font-medium text-wrap-balance'>
              Halaman yang Anda cari tidak ditemukan.
            </h1>

            <p className='m-0 max-w-[36rem] text-lg leading-[1.4] tracking-[-0.02em] font-body text-gray-500'>
              Tautan mungkin sudah berubah, halaman dipindahkan, atau alamat yang
              Anda buka tidak tersedia.
            </p>

            <div className='flex flex-col gap-3 tab:flex-row tab:items-center'>
              <Link
                href='/'
                className='inline-flex items-center gap-3 w-fit pb-[0.8rem] border-b border-accent no-underline text-lg leading-[1.3] tracking-[-0.02em] font-sans'
              >
                <span>Kembali ke Beranda</span>
              </Link>
              <Link
                href='/projects'
                className='inline-flex items-center gap-3 w-fit pb-[0.8rem] border-b border-gray-300 no-underline text-lg leading-[1.3] tracking-[-0.02em] font-sans text-gray-500'
              >
                <span>Lihat Portofolio</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
