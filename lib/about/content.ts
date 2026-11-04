export type AboutLocale = "id" | "en";

export type AboutContent = {
  metaTitle: string;
  metaDescription: string;
  ogDescription: string;
  breadcrumbLabel: string;
  eyebrow: string;
  heroTitle: string;
  heroDesc: string;
  ctaHref: string;
  ctaLabel: string;
  storyLabel: string;
  storyTitle: string;
  story: string[];
  principlesLabel: string;
  principlesTitle: string;
  principles: { title: string; desc: string }[];
  teamLabel: string;
  teamTitle: string;
  team: { name: string; role: string; desc: string }[];
  statsLabel: string;
  stats: { value: string; label: string }[];
  fieldsLabel: string;
  fieldsTitle: string;
  fields: string[];
  ctaSectionTitle: string;
  ctaSectionDesc: string;
  ctaSectionLabel: string;
};

export const aboutPaths: Record<AboutLocale, string> = {
  id: "/tentang/",
  en: "/en/about/",
};

const wa = (text: string) => `https://wa.me/6285156652910?text=${encodeURIComponent(text)}`;

export const aboutContent: Record<AboutLocale, AboutContent> = {
  id: {
    metaTitle: "Tentang Kami, Tech & Marketing Studio Yogyakarta",
    metaDescription:
      "Flaat Studio adalah tech & marketing studio dari Yogyakarta yang berdiri sejak 2025. Dipimpin tiga co-founder, kami membantu bisnis berdigitalisasi dengan sistem yang mengikuti cara kerja sehari-hari.",
    ogDescription:
      "Kenali tim dan cara kerja Flaat Studio: human first, sistem mengikuti perilaku kerja Anda.",
    breadcrumbLabel: "Tentang Kami",
    eyebrow: "TENTANG KAMI",
    heroTitle: "Studio digital yang memulai dari memahami cara kerja bisnis Anda.",
    heroDesc:
      "Flaat Studio berdiri sejak 2025 di Yogyakarta untuk membantu bisnis menyelesaikan masalah nyata lewat digitalisasi: lebih efektif, lebih efisien, dan lebih transparan.",
    ctaHref: wa("Halo Flaat, saya ingin konsultasi"),
    ctaLabel: "Konsultasi Gratis",
    storyLabel: "CERITA KAMI",
    storyTitle: "Kenapa Flaat Studio ada",
    story: [
      "Banyak bisnis ingin berdigitalisasi, tapi berhenti di tengah jalan karena sistemnya terasa asing dan memaksa tim mengubah kebiasaan kerjanya.",
      "Kami dibangun untuk menyelesaikan permasalahan itu. Tujuannya sederhana: bisnis yang menerapkan digitalisasi bisa bekerja lebih efektif dan efisien, dengan proses yang lebih transparan bagi pemilik maupun timnya.",
      "Karena itu kami mengerjakan website, sistem web, otomatisasi AI, dan digital marketing dalam satu tim, supaya solusinya saling terhubung dan bukan potongan yang berdiri sendiri-sendiri.",
    ],
    principlesLabel: "CARA KERJA",
    principlesTitle: "Human first",
    principles: [
      {
        title: "Mulai dari empati",
        desc: "Sebelum membahas teknologi, kami memahami dulu orang, kebiasaan, dan hambatan di balik bisnisnya.",
      },
      {
        title: "Sistem mengikuti Anda",
        desc: "Sistem dibuat mengikuti perilaku kerja sehari-hari, bukan memaksa tim mengubah cara kerjanya.",
      },
      {
        title: "Membantu tugas selesai",
        desc: "Ukuran berhasilnya sederhana: setelah diterapkan, sistem benar-benar membantu menyelesaikan pekerjaan.",
      },
    ],
    teamLabel: "TIM",
    teamTitle: "Tiga co-founder",
    team: [
      {
        name: "Alvin Al Munawwar",
        role: "Co-founder & Technical Lead",
        desc: "Memimpin sisi teknis: arsitektur website, sistem web, dan otomatisasi.",
      },
      {
        name: "Rico Sumantri",
        role: "Co-founder & Business Development",
        desc: "Memegang pengembangan bisnis dan hubungan dengan klien serta mitra.",
      },
      {
        name: "Annisa Wahyu Lestari",
        role: "Co-founder & Marketing",
        desc: "Memimpin strategi marketing, dari iklan sampai optimasi konversi.",
      },
    ],
    statsLabel: "SEKILAS",
    stats: [
      { value: "2025", label: "Tahun berdiri" },
      { value: "3", label: "Co-founder" },
      { value: "15", label: "Project di portofolio" },
      { value: "Yogyakarta", label: "Basis, melayani seluruh Indonesia" },
    ],
    fieldsLabel: "PENGALAMAN",
    fieldsTitle: "Bidang yang pernah kami tangani",
    fields: [
      "Transportasi dan logistik",
      "Wisata dan travel",
      "Properti dan penjualan lahan",
      "Konstruksi",
      "E-commerce dan marketplace",
      "Layanan publik dan informasi",
    ],
    ctaSectionTitle: "Punya proses bisnis yang ingin dirapikan?",
    ctaSectionDesc:
      "Ceritakan cara kerja bisnis Anda sekarang. Kami mulai dari mendengarkan, lalu membantu menentukan sistem yang paling pas.",
    ctaSectionLabel: "Konsultasi Gratis via WhatsApp",
  },
  en: {
    metaTitle: "About Us, Tech & Marketing Studio in Yogyakarta",
    metaDescription:
      "Flaat Studio is a tech & marketing studio from Yogyakarta, founded in 2025. Led by three co-founders, we help businesses go digital with systems that follow how they already work.",
    ogDescription:
      "Meet the team and approach behind Flaat Studio: human first, with systems that follow how you work.",
    breadcrumbLabel: "About Us",
    eyebrow: "ABOUT US",
    heroTitle: "A digital studio that starts by understanding how your business works.",
    heroDesc:
      "Flaat Studio was founded in 2025 in Yogyakarta to help businesses solve real problems through digitalization: more effective, more efficient, and more transparent.",
    ctaHref: wa("Hi Flaat, I'd like to consult"),
    ctaLabel: "Free Consultation",
    storyLabel: "OUR STORY",
    storyTitle: "Why Flaat Studio exists",
    story: [
      "Many businesses want to go digital but stall halfway because the system feels foreign and forces the team to change how they work.",
      "We were built to solve that. The goal is simple: businesses that adopt digitalization should work more effectively and efficiently, with processes that are more transparent for owners and teams alike.",
      "That is why we handle websites, web systems, AI automation, and digital marketing in one team, so the solution fits together instead of arriving as separate pieces.",
    ],
    principlesLabel: "HOW WE WORK",
    principlesTitle: "Human first",
    principles: [
      {
        title: "Start with empathy",
        desc: "Before talking technology, we first understand the people, habits, and obstacles behind the business.",
      },
      {
        title: "Systems follow you",
        desc: "Systems are built around everyday work behavior, instead of forcing the team to change how they work.",
      },
      {
        title: "Help tasks get done",
        desc: "Success is simple: once in place, the system genuinely helps get the work finished.",
      },
    ],
    teamLabel: "TEAM",
    teamTitle: "Three co-founders",
    team: [
      {
        name: "Alvin Al Munawwar",
        role: "Co-founder & Technical Lead",
        desc: "Leads the technical side: website architecture, web systems, and automation.",
      },
      {
        name: "Rico Sumantri",
        role: "Co-founder & Business Development",
        desc: "Handles business development and relationships with clients and partners.",
      },
      {
        name: "Annisa Wahyu Lestari",
        role: "Co-founder & Marketing",
        desc: "Leads marketing strategy, from ads to conversion optimization.",
      },
    ],
    statsLabel: "AT A GLANCE",
    stats: [
      { value: "2025", label: "Founded" },
      { value: "3", label: "Co-founders" },
      { value: "15", label: "Projects in our portfolio" },
      { value: "Yogyakarta", label: "Based here, serving all of Indonesia" },
    ],
    fieldsLabel: "EXPERIENCE",
    fieldsTitle: "Industries we have worked in",
    fields: [
      "Transportation and logistics",
      "Tourism and travel",
      "Property and land sales",
      "Construction",
      "E-commerce and marketplaces",
      "Public services and information",
    ],
    ctaSectionTitle: "Have a business process you want to tidy up?",
    ctaSectionDesc:
      "Tell us how your business runs today. We start by listening, then help decide the system that fits best.",
    ctaSectionLabel: "Free Consultation via WhatsApp",
  },
};
