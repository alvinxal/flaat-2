const content = {
  label: "TESTIMONIALS",
  title: "Voices behind our work.",
  author: "Emily Chen / Marketing Director",
  quote:
    "Modo Studio's attention to detail and ability to capture our vision in a fresh, modern way made all the difference.",
};

export default function TestimonialSection() {
  return (
    <section id="testimonial" className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <p className="m-0 font-mono text-xs tracking-widest uppercase text-gray-800">{content.label}</p>
        <h2 className="m-0 text-xl leading-tight font-semibold font-sans">{content.title}</h2>
      </div>

      <article className="flex flex-col gap-4 pt-2">
        <p className="m-0 text-lg tracking-[-0.03em] font-medium">{content.author}</p>
        <blockquote className="m-0 max-w-[38rem] text-accent text-[clamp(1.15rem,2vw,1.45rem)] leading-[1.35] tracking-[-0.02em] font-body">
          {content.quote}
        </blockquote>
      </article>
    </section>
  );
}