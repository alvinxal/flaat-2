import Link from "next/link";
import { siteContent } from "@/data/content";

export default function HomeFooter() {
  return (
    <footer className="flex flex-col gap-12 w-full p-8 bg-[#fafafa] tab:p-8 tab:gap-12 desk:p-8 desk:gap-12">
      <div className="flex flex-col gap-10 w-full tab:flex-row tab:justify-between tab:items-start">
        <div className="w-full max-w-[450px] tab:w-[48%] tab:min-w-[240px]">
          <div className="flex flex-col gap-2 pt-1 border-b border-[#ccc]">
            <p className="m-0 font-mono text-[13px] leading-[1.1] tracking-[-0.04em] uppercase text-black">{siteContent.footer.subscribeLabel}</p>
            <form className="flex items-center gap-2 h-9">
              <input
                type="email"
                name="email"
                placeholder={siteContent.footer.subscribePlaceholder}
                className="flex-auto min-w-0 border-0 bg-transparent py-2 font-sans text-sm font-normal leading-none tracking-[-0.03em] color-black outline-none placeholder:text-[#999]"
              />
              <button type="button" className="border-0 bg-transparent py-2 font-sans text-sm font-normal leading-none tracking-[-0.03em] color-black cursor-pointer">
                {siteContent.footer.subscribeButton}
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full tab:w-[26%]">
          <p className="m-0 font-mono text-[13px] leading-[1.1] tracking-[-0.04em] uppercase text-black">{siteContent.footer.navigationLabel}</p>
          <nav className="flex flex-col items-start gap-0">
            {siteContent.nav.map((item) => (
              <Link key={item.label} href={item.href} className="inline-flex gap-1 py-0.5 font-sans text-sm font-medium leading-[1.3] tracking-[-0.02em] no-underline">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex flex-col gap-4 tab:flex-row tab:justify-between tab:items-end">
        <div className="flex flex-col gap-0 text-muted">
          <p className="m-0 font-mono text-[13px] leading-[1.1] tracking-[-0.04em] uppercase">{siteContent.footer.rightsLineOne}</p>
          <p className="m-0 font-mono text-[13px] leading-[1.1] tracking-[-0.04em] uppercase">{siteContent.footer.rightsLineTwo}</p>
        </div>
        <p className="m-0 font-mono text-[13px] leading-[1.1] tracking-[-0.04em] uppercase text-muted tab:w-[26%]">{siteContent.footer.copyright}</p>
      </div>
    </footer>
  );
}
