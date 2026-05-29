"use client";

export default function PricingDeckPrintButton() {
  return (
    <button
      type='button'
      onClick={() => window.print()}
      className='inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 font-body text-sm font-semibold tracking-[-0.02em] text-white transition hover:bg-[#233446]'
    >
      Download PDF
    </button>
  );
}
