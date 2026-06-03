export type NavItem = { label: string; href: string };
export type Service = {
  title: string;
  description: string;
  image: string;
  alt: string;
};
export type FAQItem = { q: string; a: string };
export type StepItem = { step: string; title: string; desc: string };
export type PricingTier = {
  name: string;
  price: string;
  blurb?: string;
  details: string[];
};
export type ServicePillar = { title: string; description: string };

const id = {
  site: {
    name: "Flaat Studio",
    tagline: "Technology & Digital Marketing Agency",
    based: "Based on yogyakarta",
    year: "2025",
  },

  nav: {
    home: "Beranda",
    about: "Tentang Kami",
    services: "Layanan",
    projects: "Portofolio",
    contact: "Kontak",
  },

  social: {
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    email: "Email",
    threads: "Threads",
  },

  hero: {
    since: "Home",
    status: "Technology & Digital Marketing Agency",
    title:
      "Digital partner yang menggabungkan teknologi AI dan strategi marketing untuk mempercepat pertumbuhan bisnis Anda.",
    cta: "Konsultasi Gratis",
    ctaHref:
      "https://wa.me/6285156652910?text=Halo%20Flaat%2C%20saya%20ingin%20konsultasi",
  },

  about: {
    label: "ABOUT",
    eyebrow: "Tentang Kami",
    text: "Flaat Studio adalah hybrid partner digital yang menggabungkan web development, integrasi AI, dan strategi marketing untuk membangun kredibilitas serta mendorong profitabilitas bisnis Anda. Kami percaya kehadiran digital yang hebat bukan hanya soal estetika, tapi tentang sistem yang bekerja otomatis menghasilkan konversi.",
  },

  services: {
    label: "SERVICES",
    title: "Layanan",
    items: [
      {
        title: "Web Development",
        description:
          "Website berkinerja tinggi, aplikasi web kustom, dan landing page yang dirancang untuk konversi maksimal. Built dengan Next.js, WordPress, atau solusi custom sesuai kebutuhan bisnis Anda.",
        image: "/assets/images/Webdev.webp",
        alt: "Web Development",
      },
      {
        title: "AI & Automation",
        description:
          "Otomatisasi workflow, chatbot cerdas, dan AI agent yang bekerja 24/7 untuk efisiensi bisnis. Integrasikan teknologi AI tanpa kerumitan teknis.",
        image: "/assets/images/AI.webp",
        alt: "AI & Automation",
      },
      {
        title: "Digital Marketing",
        description:
          "SEO, iklan multi-platform (Meta/Google/TikTok), marketplace, dan optimasi konversi berbasis data. Strategi marketing yang terukur untuk pertumbuhan berkelanjutan.",
        image: "/assets/images/Digmar.webp",
        alt: "Digital Marketing",
      },
    ] satisfies Service[],
  },

  contact: {
    label: "CONTACT",
    title: "Kontak",
    office: "Yogyakarta, Indonesia",
    phone: "+62 851-5665-2910",
    phoneHref:
      "https://wa.me/6285156652910?text=Halo%20Flaat%2C%20saya%20ingin%20konsultasi",
    email: "hi@flaat.studio",
    emailHref: "mailto:hi@flaat.studio",
    locationLabel: "Lokasi",
    nameLabel: "Nama",
    namePlaceholder: "Nama Anda",
    emailLabel: "Email",
    emailPlaceholder: "nama@perusahaan.com",
    messageLabel: "Pesan",
    messagePlaceholder: "Ceritakan kebutuhan & tantangan bisnis Anda...",
    submit: "Mulai Diskusi",
    sending: "Mengirim...",
    success: "Pesan berhasil dikirim! Kami akan menghubungi Anda segera.",
    errorRequired: "Mohon isi semua kolom",
    errorSend: "Gagal mengirim pesan",
    errorGeneric: "Terjadi kesalahan",
  },

  footer: {
    navigation: "navigasi",
    social: "sosial media",
    contact: "kontak",
  },

  notFound: {
    code: "404",
    subtitle: "Halaman tidak ditemukan",
    heading: "Halaman yang Anda cari tidak ditemukan.",
    text: "Tautan mungkin sudah berubah, halaman dipindahkan, atau alamat yang Anda buka tidak tersedia.",
    backHome: "Kembali ke Beranda",
    viewPortfolio: "Lihat Portofolio",
  },

  metadata: {
    home: {
      title: "Flaat Studio - Jasa Website, AI, dan Digital Marketing",
      description:
        "Flaat Studio adalah digital partner yang menggabungkan web development, AI automation, dan strategi digital marketing untuk pertumbuhan bisnis dari Yogyakarta.",
    },
    root: {
      title: "Flaat Studio | Web Development, AI, dan Digital Marketing",
      description:
        "Flaat Studio adalah digital partner yang menggabungkan web development, AI, dan digital marketing untuk mendorong pertumbuhan bisnis.",
    },
  },

  projects: {
    title: "Portofolio Project",
    description:
      "Lihat portofolio Flaat Studio untuk project web development, AI automation, dan digital marketing yang dirancang untuk pertumbuhan bisnis.",
    all: "Semua",
    notFoundTitle: "Project Not Found",
    notFoundDescription: "Project yang Anda cari tidak ditemukan.",
    collectionName: "Portofolio Project Flaat Studio",
    collectionDescription:
      "Kumpulan project Flaat Studio di bidang web development, AI automation, dan digital marketing.",
    defaultProjectDescription:
      "{title} adalah salah satu project Flaat Studio di bidang web development, AI, dan digital marketing.",
    noProjects: "Belum ada project.",
    relatedProjects: "Project Lainnya",
    viewAll: "Lihat Semua Project",
  },

  pricing: {
    servicePillars: [
      {
        title: "Web Development",
        description:
          "Website yang rapi, kredibel, dan siap dipakai untuk promosi maupun operasional.",
      },
      {
        title: "AI & Automation",
        description:
          "Workflow yang lebih ringan, cepat, dan efisien untuk kebutuhan harian bisnis.",
      },
      {
        title: "Digital Marketing",
        description:
          "Strategi growth yang lebih terarah, terukur, dan relevan dengan target bisnis.",
      },
    ] satisfies ServicePillar[],
    webTiers: [
      {
        name: "Starter",
        price: "Rp 1.500.000",
        details: [
          "2 halaman: Home + Contact",
          "Mobile responsive",
          "Domain .com + hosting setup 1 tahun",
          "Timeline 1-2 minggu",
        ],
      },
      {
        name: "Bisnis",
        price: "Rp 3.500.000",
        details: [
          "3-5 halaman website",
          "CMS untuk edit konten",
          "Contact form",
          "Basic SEO",
          "Timeline 2-3 minggu",
        ],
      },
      {
        name: "Custom",
        price: "Mulai Rp 5.000.000",
        details: [
          "Web app, ERP, dashboard, atau kebutuhan khusus",
          "Scope mengikuti kebutuhan bisnis",
          "Timeline 3-8 minggu",
        ],
      },
    ] satisfies PricingTier[],
    automationTiers: [
      {
        name: "Basic",
        price: "Rp 1.300.000",
        details: [
          "WA reminder, chatbot, atau AI assistant",
          "1 workflow utama",
          "Cocok untuk kebutuhan awal automation",
        ],
      },
      {
        name: "Advance",
        price: "Rp 2.300.000",
        details: [
          "Multi workflow",
          "Integrasi API",
          "Custom logic",
          "Cocok untuk alur kerja yang lebih kompleks",
        ],
      },
      {
        name: "Enterprise",
        price: "Mulai Rp 3.500.000",
        details: [
          "Full system automation",
          "Maintenance",
          "Training 3x",
          "Cocok untuk implementasi yang lebih menyeluruh",
        ],
      },
    ] satisfies PricingTier[],
    marketingTiers: [
      {
        name: "Starter",
        price: "Rp 2.000.000 / 2 bulan",
        details: [
          "Audit digital",
          "Strategi konten",
          "Basic SEO on-page",
          "Laporan bulanan",
        ],
      },
      {
        name: "Growth",
        price: "Rp 3.500.000 / 2 bulan",
        details: [
          "Semua di Starter",
          "Ads management",
          "Optimasi konversi",
          "A/B testing",
        ],
      },
      {
        name: "Scale",
        price: "Rp 5.500.000 / 3 bulan",
        details: [
          "Multi-platform ads",
        ],
      },
    ] satisfies PricingTier[],
    addonsHeading: "Add-on & Maintenance",
    addonsText:
      "Add-ons tersedia untuk membantu bisnis Anda tetap berkembang setelah project utama selesai, tanpa harus memulai ulang dari nol.",
    printButton: "Cetak Harga",
    metaTitle: "Harga & Paket | Flaat Studio",
    metaDescription:
      "Lihat paket harga layanan web development, AI automation, dan digital marketing dari Flaat Studio.",
  },
};

export default id;
export type IDict = typeof id;
