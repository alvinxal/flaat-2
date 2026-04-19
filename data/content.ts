export type NavItem = {
  label: string;
  href: string;
  icon: "home" | "about" | "projects" | "services" | "contact";
};

export type SocialItem = {
  name: string;
  href: string;
  icon: "instagram" | "linkedin" | "threads";
};

export type ProjectItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const siteContent = {
  brand: "Flaat Studio",
  createdBy: {
    name: "Lunis",
    href: "https://lunisdesign.com",
  },
  footer: {
    subscribeLabel: "Stay Updated",
    subscribePlaceholder: "name@email.com",
    subscribeButton: "Subscribe",
    navigationLabel: "site",
    rightsLineOne: "Created by lunis.",
    rightsLineTwo: "All rights reserved.",
    copyright: "(©2025)",
  },
  nav: [
    { label: "Home", href: "/", icon: "home" },
    { label: "About", href: "/about", icon: "about" },
    { label: "Projects", href: "/project", icon: "projects" },
    { label: "Services", href: "/#service", icon: "services" },
    { label: "Contact", href: "/#contact", icon: "contact" },
  ] satisfies NavItem[],
  social: [
    { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { name: "Threads", href: "https://threads.com", icon: "threads" },
  ] satisfies SocialItem[],
  sidebarCta: {
    eyebrow: "Have a project in mind?",
    text: "Book a call today.",
    href: "/#contact",
    label: "Contact us",
  },
  hero: {
    status: "Accepting Work",
    since: "since 2017",
    title:
      "Modio is a digital studio of branding and packaging to web design and digital campaigns. We craft experiences that resonate.",
    cta: "Book a call",
    ctaHref: "/#contact",
  },
  sections: {
    projects: {
      label: "(001)",
      title: "Explore the stories behind our work",
    },
    about: {
      label: "(002)",
      eyebrow: "who we are",
      text:
        "From branding and packaging to web design and digital campaigns, our team partners with ambitious businesses to bring bold ideas to life. We believe great design goes beyond aesthetics.",
    },
    services: {
      label: "(003)",
      title: "Our services.",
    },
    testimonial: {
      label: "(004)",
      title: "Voices behind our work.",
    },
    contact: {
      label: "(006)",
      title: "Let's build together.",
    },
  },
  projects: [
    {
      slug: "luminor",
      title: "Luminor",
      description:
        "Brand identity and website design for a modern lighting company.",
      image: "/assets/images/stylish-modern-wristwatch-1.png",
      alt: "Stylish Modern Wristwatch",
    },
    {
      slug: "orovia",
      title: "Orovia",
      description:
        "Packaging and product design for a premium gourmet chocolate brand.",
      image: "/assets/images/orange-monochrome-perfume-arrangement-with-tropica-1.png",
      alt: "Orange Monochrome Perfume Arrangement with Tropical Shadows",
    },
    {
      slug: "kairo",
      title: "Kairo",
      description:
        "Bold rebranding and visual identity system for a modern coffee chain.",
      image: "/assets/images/yellow-bottle-on-yellow-background-1.png",
      alt: "Yellow Bottle on Yellow Background",
    },
    {
      slug: "vividvr",
      title: "VividVR",
      description:
        "Immersive VR experience design that engages and inspires users.",
      image: "/assets/images/person-with-vr-headset-1.png",
      alt: "Person with VR Headset",
    },
  ] satisfies ProjectItem[],
  about: {
    backgroundImage: "/assets/images/office-discussion-1.jpg",
    backgroundAlt: "Office Discussion",
    logos: [
      { src: "/assets/images/fakebrand-1-15.png", alt: "Fakebrand 1" },
      { src: "/assets/images/fakebrand-2-18.png", alt: "Fakebrand 2" },
      { src: "/assets/images/fakebrand-3-21.png", alt: "Fakebrand 3" },
      { src: "/assets/images/fakebrand-4-24.png", alt: "Fakebrand 4" },
      { src: "/assets/images/fakebrand-5-26.png", alt: "Fakebrand 5" },
      { src: "/assets/images/fakebrand-6-28.png", alt: "Fakebrand 6" },
    ],
  },
  services: [
    {
      title: "Brand Identity",
      description:
        "We build cohesive visual systems that define your brand’s voice, personality, and presence.",
      image: "/assets/images/desktop-32.png",
      alt: "Brand identity mockups",
    },
    {
      title: "Packaging Design",
      description:
        "Creative, functional packaging that captures attention and communicates value.",
      image: "/assets/images/desktop-35.png",
      alt: "Packaging design mockups",
    },
    {
      title: "Web Design",
      description:
        "Modern, responsive websites that balance beauty with seamless user experience.",
      image: "/assets/images/desktop-37.png",
      alt: "Web design mockups",
    },
    {
      title: "Creative Strategy",
      description:
        "Tailored strategies that align design with business goals and long-term growth.",
      image: "/assets/images/desktop-38.png",
      alt: "Creative strategy mockups",
    },
  ] satisfies ServiceItem[],
  testimonial: {
    author: "Emily Chen / Marketing Director",
    quote:
      "Modo Studio’s attention to detail and ability to capture our vision in a fresh, modern way made all the difference.",
  },
  contact: {
    image: "/assets/images/contemplative-profile-against-colorful-backdrop-1.png",
    imageAlt: "Contemplative Profile Against Colorful Backdrop",
    office: "123 Market Street, Suite 450 San Francisco, CA 94105",
    phone: "+1 (415) 555-2389",
    phoneHref: "tel:+14155552389",
    email: "hello@modiostudio.com",
    emailHref: "mailto:hello@modiostudio.com",
  },
} as const;
