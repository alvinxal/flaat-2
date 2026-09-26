export type NavItem = { label: string; href: string };
export type Service = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
};

const id = {
  site: {
    name: "Flaat Studio",
    tagline: "Tech & Marketing Studio",
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
    status: "Tech & Marketing Studio",
    title:
      "Partner digital yang membangun website, sistem AI, dan strategi marketing untuk mempercepat pertumbuhan bisnis Anda.",
    cta: "Konsultasi Gratis",
    ctaHref:
      "https://wa.me/6285156652910?text=Halo%20Flaat%2C%20saya%20ingin%20konsultasi",
  },

  about: {
    label: "ABOUT",
    eyebrow: "Tentang Kami",
    text: "Flaat Studio membangun website, sistem AI, dan strategi marketing yang bekerja untuk bisnis Anda, mulai dari sistem web yang efisien dan otomatisasi, sampai kampanye marketing yang terukur dan mendatangkan pelanggan.",
  },

  logos: {
    label: "TRUSTED BY",
    title: "Klien & Partner",
  },

  faq: {
    label: "FAQ",
    title: "Pertanyaan Umum",
    items: [
      {
        q: "Apa saja layanan Flaat Studio?",
        a: "Flaat Studio melayani tiga layanan utama: Web Development (website dan sistem web), AI & Automation (chatbot dan otomatisasi proses bisnis), dan Digital Marketing (ads, marketplace, dan optimasi konversi).",
      },
      {
        q: "Berapa biaya untuk membuat website atau sistem AI?",
        a: "Flaat Studio bekerja berbasis konsultasi, bukan paket harga tetap. Biaya menyesuaikan scope dan kebutuhan bisnis Anda, jadi diskusikan dulu lewat WhatsApp atau form kontak untuk mendapatkan penawaran yang sesuai.",
      },
      {
        q: "Apakah Flaat Studio hanya melayani Yogyakarta?",
        a: "Flaat Studio berbasis di Yogyakarta dan bisa melayani bisnis di seluruh Indonesia secara jarak jauh.",
      },
      {
        q: "Apakah Flaat Studio bisa melayani klien di luar negeri?",
        a: "Bisa. Seluruh proses kerja Flaat Studio dilakukan secara remote, jadi klien di luar Indonesia juga bisa konsultasi dan bekerja sama tanpa kendala jarak.",
      },
      {
        q: "Apakah bisa konsultasi dulu sebelum mulai project?",
        a: "Bisa. Konsultasi awal gratis dan bisa dilakukan lewat WhatsApp atau form kontak untuk membahas kebutuhan bisnis Anda sebelum menentukan scope project.",
      },
    ],
  },

  services: {
    label: "SERVICES",
    title: "Layanan",
    items: [
      {
        title: "Web Development",
        description:
          "Website dan sistem web yang dirancang untuk operasional bisnis sehari-hari, dari company profile hingga sistem booking dan e-commerce, dibangun agar mudah dikelola sendiri dan siap berkembang sesuai kebutuhan bisnis.",
        tags: ["Company Profile", "Booking System", "Web Commerce", "Custom Solution"],
        image: "/assets/images/Webdev.webp",
        alt: "Web Development",
      },
      {
        title: "AI & Automation",
        description:
          "Automasi yang menggantikan proses manual berulang, dari balas chat hingga pengingat booking dan notifikasi pesanan, meningkatkan efisiensi kerja sekaligus mengurangi ketergantungan pada proses manual.",
        tags: ["Otomatisasi Workflow", "Auto-reply Chat", "Pengingat Booking", "Notifikasi Pesanan", "Custom Solution"],
        image: "/assets/images/AI.webp",
        alt: "AI & Automation",
      },
      {
        title: "Digital Marketing",
        description:
          "Iklan multi-platform (Meta/Google/TikTok), marketplace, dan optimasi konversi berbasis data. Strategi marketing yang terukur untuk pertumbuhan berkelanjutan.",
        tags: ["Meta/Google/TikTok Ads", "Marketplace", "Optimasi Konversi", "Analisis Marketing", "Konsultasi"],
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
    email: "studioflaat@gmail.com",
    emailHref: "mailto:studioflaat@gmail.com",
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
      title: "Flaat Studio - Jasa Website, Sistem AI & Digital Marketing",
      description:
        "Flaat Studio adalah tech & marketing studio dari Yogyakarta yang membangun website, sistem AI, dan strategi marketing untuk pertumbuhan bisnis di seluruh Indonesia.",
    },
    root: {
      title: "Flaat Studio | Web Development, AI & Digital Marketing",
      description:
        "Flaat Studio adalah digital partner yang membangun website, sistem AI, dan strategi marketing untuk mendorong pertumbuhan bisnis.",
    },
  },

  projects: {
    title: "Portofolio Project",
    description:
      "Lihat portofolio Flaat Studio untuk project web development dan AI automation yang dirancang untuk pertumbuhan bisnis.",
    all: "Semua",
    notFoundTitle: "Project Not Found",
    notFoundDescription: "Project yang Anda cari tidak ditemukan.",
    collectionName: "Portofolio Project Flaat Studio",
    collectionDescription:
      "Kumpulan project Flaat Studio di bidang web development dan AI automation.",
    defaultProjectDescription:
      "{title} adalah salah satu project Flaat Studio di bidang web development dan AI.",
    noProjects: "Belum ada project.",
    relatedProjects: "Project Lainnya",
    viewAll: "Lihat Semua Project",
    visitWebsite: "Kunjungi Website",
  },

};

export default id;
export type IDict = typeof id;
