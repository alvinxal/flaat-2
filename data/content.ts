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
    subscribeLabel: "Dapatkan Update Terbaru",
    subscribePlaceholder: "nama@email.com",
    subscribeButton: "Berlangganan",
    navigationLabel: "navigasi",
    rightsLineOne: "Dibuat oleh lunis.",
    rightsLineTwo: "Hak Cipta Dilindungi.",
    copyright: "(©2025)",
  },
  nav: [
    { label: "Beranda", href: "/", icon: "home" },
    { label: "Tentang Kami", href: "/#about", icon: "about" },
    { label: "Portofolio", href: "/#projects", icon: "projects" },
    { label: "Layanan", href: "/#service", icon: "services" },
    { label: "Kontak", href: "/#contact", icon: "contact" },
  ] satisfies NavItem[],
  social: [
    { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { name: "Threads", href: "https://threads.com", icon: "threads" },
  ] satisfies SocialItem[],
  sidebarCta: {
    eyebrow: "Punya ide proyek?",
    text: "Jadwalkan diskusi hari ini.",
    href: "/#contact",
    label: "Hubungi Kami",
  },
  hero: {
    status: "Terbuka untuk Kolaborasi",
    since: "sejak 2025",
    title:
      "Flaat Studio adalah studio digital yang mencakup branding, kemasan, desain web, hingga kampanye digital. Kami merancang pengalaman yang berkesan dan bermakna.",
    cta: "Jadwalkan Konsultasi",
    ctaHref: "/#contact",
  },
  sections: {
    projects: {
      label: "(001)",
      title: "Telusuri kisah di balik karya kami",
    },
    about: {
      label: "(002)",
      eyebrow: "tentang kami",
      text: "Dari branding, kemasan, hingga desain web dan kampanye digital, tim kami berkolaborasi dengan bisnis ambisius untuk mewujudkan ide-ide besar. Kami percaya desain hebat melampaui sekadar estetika.",
    },
    services: {
      label: "(003)",
      title: "Layanan Kami.",
    },
    testimonial: {
      label: "(004)",
      title: "Kata mereka tentang kami.",
    },
    contact: {
      label: "(006)",
      title: "Mari wujudkan bersama.",
    },
  },
  projects: [
    {
      slug: "luminor",
      title: "Luminor",
      description:
        "Identitas merek dan desain website untuk perusahaan pencahayaan modern.",
      image: "/assets/images/stylish-modern-wristwatch-1.png",
      alt: "Jam Tangan Modern yang Elegan",
    },
    {
      slug: "orovia",
      title: "Orovia",
      description:
        "Desain kemasan dan produk untuk merek cokelat gourmet premium.",
      image:
        "/assets/images/orange-monochrome-perfume-arrangement-with-tropica-1.png",
      alt: "Aransemen Parfum Monokrom Oranye dengan Bayangan Tropis",
    },
    {
      slug: "kairo",
      title: "Kairo",
      description:
        "Rebranding berani dan sistem identitas visual untuk jaringan kopi modern.",
      image: "/assets/images/yellow-bottle-on-yellow-background-1.png",
      alt: "Botol Kuning di Latar Kuning",
    },
    {
      slug: "vividvr",
      title: "VividVR",
      description:
        "Desain pengalaman VR imersif yang melibatkan dan menginspirasi pengguna.",
      image: "/assets/images/person-with-vr-headset-1.png",
      alt: "Pengguna dengan Headset VR",
    },
  ] satisfies ProjectItem[],
  about: {
    backgroundImage: "/assets/images/office-discussion-1.jpg",
    backgroundAlt: "Diskusi di Kantor",
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
      title: "Identitas Merek",
      description:
        "Kami membangun sistem visual yang kohesif untuk mendefinisikan suara, kepribadian, dan kehadiran merek Anda.",
      image: "/assets/images/desktop-32.png",
      alt: "Mockup identitas merek",
    },
    {
      title: "Desain Kemasan",
      description:
        "Kemasan kreatif dan fungsional yang menarik perhatian dan menyampaikan nilai.",
      image: "/assets/images/desktop-35.png",
      alt: "Mockup desain kemasan",
    },
    {
      title: "Desain Web",
      description:
        "Website modern dan responsif yang menyeimbangkan keindahan dengan pengalaman pengguna yang mulus.",
      image: "/assets/images/desktop-37.png",
      alt: "Mockup desain web",
    },
    {
      title: "Strategi Kreatif",
      description:
        "Strategi yang disesuaikan untuk menyelaraskan desain dengan tujuan bisnis dan pertumbuhan jangka panjang.",
      image: "/assets/images/desktop-38.png",
      alt: "Mockup strategi kreatif",
    },
  ] satisfies ServiceItem[],
  testimonial: {
    author: "Emily Chen / Direktur Pemasaran",
    quote:
      "Perhatian Flaat Studio terhadap detail dan kemampuan mereka menangkap visi kami dengan cara yang segar dan modern membuat perbedaan yang signifikan.",
  },
  contact: {
    image:
      "/assets/images/contemplative-profile-against-colorful-backdrop-1.png",
    imageAlt: "Profil Kontemplatif di Latar Berwarna",
    office: "123 Market Street, Suite 450 San Francisco, CA 94105",
    phone: "+1 (415) 555-2389",
    phoneHref: "tel:+14155552389",
    email: "hello@modiostudio.com",
    emailHref: "mailto:hello@modiostudio.com",
  },
} as const;
