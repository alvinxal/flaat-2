import type { HospitalityContent } from "@/components/hospitality/HospitalityBody";

export type ServiceKey = "website" | "ai" | "marketing";
export type ServiceLocale = "id" | "en";

export type ServicePageContent = HospitalityContent & {
  metaTitle: string;
  metaDescription: string;
  ogDescription: string;
  breadcrumbLabel: string;
  serviceType: string[];
};

// Public path (no locale prefix handling here) for each service + language.
export const servicePaths: Record<ServiceKey, Record<ServiceLocale, string>> = {
  website: { id: "/jasa-pembuatan-website/", en: "/en/website-development-services/" },
  ai: { id: "/jasa-ai-automation/", en: "/en/ai-automation-services/" },
  marketing: { id: "/jasa-digital-marketing/", en: "/en/digital-marketing-services/" },
};

const wa = (text: string) => `https://wa.me/6285156652910?text=${encodeURIComponent(text)}`;

const idLabels = {
  ctaLabel: "Konsultasi Gratis",
  needLabel: "KEBUTUHAN",
  servicesLabel: "LAYANAN",
  servicesTitle: "Apa yang bisa kami bantu",
  audiencesLabel: "COCOK UNTUK",
  processLabel: "PROSES",
  processTitle: "Bagaimana kami bekerja",
  whyLabel: "KEUNGGULAN",
  whyTitle: "Kenapa Flaat Studio",
  ctaSectionLabel: "Konsultasi Gratis via WhatsApp",
  faqLabel: "FAQ",
  faqTitle: "Pertanyaan umum",
};

const enLabels = {
  ctaLabel: "Free Consultation",
  needLabel: "THE PROBLEM",
  servicesLabel: "SERVICES",
  servicesTitle: "What we can help with",
  audiencesLabel: "WHO IT'S FOR",
  processLabel: "PROCESS",
  processTitle: "How we work",
  whyLabel: "WHY FLAAT STUDIO",
  whyTitle: "Why Flaat Studio",
  ctaSectionLabel: "Free Consultation via WhatsApp",
  faqLabel: "FAQ",
  faqTitle: "Frequently asked questions",
};

const idProcess = (understand: string, plan: string, build: string, test: string) => [
  { step: "01", title: "Pahami", desc: understand },
  { step: "02", title: "Rencana", desc: plan },
  { step: "03", title: "Buat", desc: build },
  { step: "04", title: "Uji Coba", desc: test },
  { step: "05", title: "Launch", desc: "Semua berjalan di lingkungan sebenarnya dan siap dipakai tim Anda." },
  { step: "06", title: "Support", desc: "Pendampingan dan penyesuaian setelah berjalan, bukan sekadar serah terima." },
];

const enProcess = (understand: string, plan: string, build: string, test: string) => [
  { step: "01", title: "Understand", desc: understand },
  { step: "02", title: "Plan", desc: plan },
  { step: "03", title: "Build", desc: build },
  { step: "04", title: "Test", desc: test },
  { step: "05", title: "Launch", desc: "Everything goes live in the real environment, ready for your team to use." },
  { step: "06", title: "Support", desc: "Ongoing help and adjustments after launch, not just a handover." },
];

export const servicePages: Record<ServiceKey, Record<ServiceLocale, ServicePageContent>> = {
  website: {
    id: {
      ...idLabels,
      eyebrow: "JASA PEMBUATAN WEBSITE",
      heroTitle: "Jasa Pembuatan Website untuk Bisnis yang Ingin Tumbuh",
      heroDesc:
        "Flaat Studio membangun website dan sistem web untuk operasional bisnis sehari-hari, dari company profile dan landing page sampai sistem booking, e-commerce, dan solusi custom. Berbasis di Yogyakarta, melayani bisnis di seluruh Indonesia.",
      ctaHref: wa("Halo Flaat, saya ingin konsultasi pembuatan website untuk bisnis saya"),
      needTitle: "Website seharusnya bekerja untuk bisnis Anda, bukan sekadar tampil",
      needDesc:
        "Banyak bisnis punya website yang hanya berfungsi sebagai brosur digital: lambat dibuka di HP, sulit diubah tanpa developer, dan tidak terhubung ke cara Anda menerima customer. Kami membangun website yang cepat, mudah dikelola sendiri, dan terhubung langsung ke alur kerja bisnis Anda, mulai dari form kontak dan WhatsApp sampai pembayaran online.",
      services: [
        { title: "Company Profile", desc: "Website profesional yang menjelaskan bisnis, layanan, dan cara menghubungi Anda secara jelas." },
        { title: "Landing Page", desc: "Halaman fokus untuk kampanye produk, jasa, atau event, dirancang agar pengunjung mengambil tindakan." },
        { title: "Sistem Booking", desc: "Cek ketersediaan dan pemesanan langsung dari website, cocok untuk hospitality dan bisnis berbasis jadwal." },
        { title: "Web Commerce", desc: "Toko online dengan katalog, keranjang, dan pembayaran yang bisa Anda kelola sendiri." },
        { title: "Sistem Internal & Dashboard", desc: "Aplikasi web untuk operasional internal seperti ERP sederhana, dashboard laporan, dan manajemen data." },
        { title: "Solusi Custom", desc: "Kebutuhan yang tidak masuk template: kami rancang alurnya, lalu bangun sesuai proses bisnis Anda." },
      ],
      audiencesTitle: "Bisnis yang cocok memakai layanan ini",
      audiences: [
        "Bisnis jasa dan UMKM yang ingin tampil lebih kredibel di Google",
        "Hotel, villa, dan homestay yang ingin menerima booking langsung",
        "Agensi, konsultan, dan firma profesional",
        "Bisnis yang masih mengelola order atau data secara manual",
        "Startup yang butuh MVP atau sistem internal",
      ],
      process: idProcess(
        "Diskusi tujuan bisnis, target pengunjung, dan cara Anda menerima customer saat ini.",
        "Susun struktur halaman, alur pengguna, dan fitur yang benar-benar dibutuhkan.",
        "Desain dan develop website yang cepat, responsif, dan siap dioptimasi untuk mesin pencari.",
        "Tes tampilan di berbagai perangkat, kecepatan, dan alur form atau pembayaran.",
      ),
      whyTitle: "Kenapa Flaat Studio",
      why: [
        "Dibangun dengan teknologi modern agar cepat dibuka dan mudah ditemukan di Google",
        "Mudah dikelola sendiri, tanpa harus selalu bergantung pada developer",
        "Satu tim untuk website, otomasi, dan marketing, sehingga semuanya saling terhubung",
        "Bekerja remote dan terbuka untuk konsultasi sebelum project dimulai",
      ],
      ctaSectionTitle: "Siap membangun website yang bekerja untuk bisnis Anda?",
      ctaSectionDesc: "Konsultasi awal gratis. Ceritakan kebutuhan Anda, dan kami bantu rekomendasikan solusi yang paling masuk akal.",
      faq: [
        { q: "Berapa biaya pembuatan website?", a: "Flaat Studio bekerja berbasis konsultasi, bukan paket tetap. Biaya bergantung pada cakupan kebutuhan, mulai dari landing page sederhana sampai sistem custom. Hubungi kami lewat WhatsApp untuk mendapat penawaran yang sesuai." },
        { q: "Apakah website bisa saya kelola sendiri setelah selesai?", a: "Bisa. Website dirancang agar konten umum mudah diubah tanpa harus menyentuh kode, dan kami tetap menyediakan bantuan maintenance bila dibutuhkan." },
        { q: "Apakah website akan mudah ditemukan di Google?", a: "Kami membangun fondasi teknisnya: kecepatan, struktur halaman, metadata, dan sitemap. Peringkat sendiri tetap bergantung pada konten, persaingan kata kunci, dan waktu, jadi tidak ada yang bisa menjanjikan posisi tertentu." },
        { q: "Apakah Flaat Studio hanya melayani bisnis di Yogyakarta?", a: "Tidak. Studio kami berbasis di Yogyakarta, tetapi seluruh proses bisa dilakukan jarak jauh sehingga kami melayani bisnis di seluruh Indonesia." },
        { q: "Bisakah website dihubungkan dengan WhatsApp atau sistem lain?", a: "Bisa. Kami sering menghubungkan website dengan WhatsApp, form, pembayaran, dan otomasi sehingga data dari customer langsung masuk ke alur kerja Anda." },
      ],
      metaTitle: "Jasa Pembuatan Website Profesional",
      metaDescription:
        "Jasa pembuatan website dari Flaat Studio Yogyakarta: company profile, landing page, sistem booking, web commerce, dan solusi custom untuk bisnis di seluruh Indonesia.",
      ogDescription: "Website cepat dan mudah dikelola untuk bisnis, dari company profile hingga sistem custom.",
      breadcrumbLabel: "Jasa Pembuatan Website",
      serviceType: ["Jasa pembuatan website", "Company profile website", "Landing page", "Sistem booking", "Web commerce"],
    },
    en: {
      ...enLabels,
      eyebrow: "WEBSITE DEVELOPMENT SERVICES",
      heroTitle: "Website Development for Businesses That Want to Grow",
      heroDesc:
        "Flaat Studio builds websites and web systems for day-to-day business operations, from company profiles and landing pages to booking systems, e-commerce, and custom solutions. Based in Yogyakarta, working with businesses across Indonesia and abroad.",
      ctaHref: wa("Hi Flaat, I'd like to consult about a website for my business"),
      needTitle: "A website should work for your business, not just look good",
      needDesc:
        "Many businesses end up with a website that is only a digital brochure: slow on mobile, hard to change without a developer, and disconnected from how customers actually reach you. We build websites that are fast, easy to manage yourself, and wired into your business workflow, from contact forms and WhatsApp to online payments.",
      services: [
        { title: "Company Profile", desc: "A professional website that explains your business, services, and how to reach you clearly." },
        { title: "Landing Page", desc: "A focused page for a product, service, or event campaign, designed to get visitors to take action." },
        { title: "Booking System", desc: "Availability checks and bookings straight from your website, ideal for hospitality and schedule-based businesses." },
        { title: "Web Commerce", desc: "An online store with catalog, cart, and payments that you can manage yourself." },
        { title: "Internal Systems & Dashboards", desc: "Web apps for internal operations such as lightweight ERP, reporting dashboards, and data management." },
        { title: "Custom Solutions", desc: "Needs that don't fit a template: we design the flow first, then build it around your business process." },
      ],
      audiencesTitle: "Businesses this fits",
      audiences: [
        "Service businesses and SMEs that want to look more credible on Google",
        "Hotels, villas, and homestays that want direct bookings",
        "Agencies, consultants, and professional firms",
        "Businesses still handling orders or data manually",
        "Startups that need an MVP or internal system",
      ],
      process: enProcess(
        "Discuss your business goals, target visitors, and how customers reach you today.",
        "Map out the page structure, user flow, and the features you actually need.",
        "Design and develop a fast, responsive website that is ready for search optimization.",
        "Test across devices, check speed, and run through every form or payment flow.",
      ),
      why: [
        "Built on modern technology so pages load fast and are easy for Google to crawl",
        "Easy to manage yourself, without always depending on a developer",
        "One team for web, automation, and marketing, so everything connects",
        "Remote-friendly, with a free consultation before any project starts",
      ],
      ctaSectionTitle: "Ready to build a website that works for your business?",
      ctaSectionDesc: "The first consultation is free. Tell us what you need and we'll recommend the most sensible solution.",
      faq: [
        { q: "How much does a website cost?", a: "Flaat Studio works on a consultation basis rather than fixed packages. Cost depends on scope, from a simple landing page to a custom system. Reach out on WhatsApp for a quote that fits." },
        { q: "Can I manage the website myself afterward?", a: "Yes. Websites are built so common content is easy to change without touching code, and we still offer maintenance support when you need it." },
        { q: "Will the website be easy to find on Google?", a: "We build the technical foundation: speed, page structure, metadata, and sitemap. Rankings still depend on content, keyword competition, and time, so nobody can honestly promise a specific position." },
        { q: "Does Flaat Studio only serve Yogyakarta?", a: "No. The studio is based in Yogyakarta, but the whole process works remotely, so we serve businesses across Indonesia and international clients." },
        { q: "Can the website connect to WhatsApp or other systems?", a: "Yes. We often connect websites to WhatsApp, forms, payments, and automations so customer data flows straight into your workflow." },
      ],
      metaTitle: "Website Development Services",
      metaDescription:
        "Website development by Flaat Studio in Yogyakarta: company profiles, landing pages, booking systems, web commerce, and custom solutions for businesses in Indonesia and abroad.",
      ogDescription: "Fast, easy-to-manage websites for businesses, from company profiles to custom systems.",
      breadcrumbLabel: "Website Development Services",
      serviceType: ["Website development", "Company profile website", "Landing page", "Booking system", "Web commerce"],
    },
  },

  ai: {
    id: {
      ...idLabels,
      eyebrow: "JASA AI & AUTOMATION",
      heroTitle: "Jasa AI Automation untuk Mengurangi Pekerjaan Manual Berulang",
      heroDesc:
        "Flaat Studio membangun otomasi dan chatbot AI yang menggantikan proses manual berulang, dari balas chat pelanggan, pengingat booking dan pembayaran, sampai notifikasi pesanan dan pengumpulan data. Tim Anda fokus pada pekerjaan yang butuh manusia.",
      ctaHref: wa("Halo Flaat, saya ingin konsultasi AI automation untuk bisnis saya"),
      needTitle: "Pekerjaan berulang menghabiskan waktu tim Anda",
      needDesc:
        "Membalas pertanyaan yang sama berkali-kali, mengirim pengingat satu per satu, memindahkan data dari chat ke spreadsheet: pekerjaan seperti ini rawan terlewat dan menyita jam kerja. Otomasi yang dirancang dengan baik membuat proses tersebut berjalan sendiri 24 jam, sementara Anda tetap memegang kendali atas hal-hal yang penting.",
      services: [
        { title: "Auto-reply Chat & Chatbot AI", desc: "Balasan otomatis untuk pertanyaan umum pelanggan di WhatsApp atau website, dengan eskalasi ke manusia saat dibutuhkan." },
        { title: "Pengingat Booking & Pembayaran", desc: "Pengingat otomatis ke pelanggan untuk jadwal, tagihan, atau perpanjangan langganan, tanpa kirim manual satu per satu." },
        { title: "Notifikasi Pesanan", desc: "Pesanan atau form yang masuk langsung diteruskan ke tim yang tepat lewat WhatsApp atau email." },
        { title: "Otomatisasi Workflow", desc: "Hubungkan aplikasi yang sudah Anda pakai sehingga data berpindah otomatis dan tidak perlu disalin ulang." },
        { title: "Pengumpulan & Pengolahan Data", desc: "Kumpulkan data publik atau internal secara terstruktur untuk kebutuhan riset, prospek, atau laporan." },
        { title: "Solusi AI Custom", desc: "Alur kerja khusus berbasis AI yang dirancang mengikuti proses bisnis Anda." },
      ],
      audiencesTitle: "Bisnis yang cocok memakai layanan ini",
      audiences: [
        "Bisnis yang banyak menerima pertanyaan berulang lewat WhatsApp atau Instagram",
        "Bisnis berbasis langganan atau jadwal yang butuh pengingat rutin",
        "Hotel, villa, dan jasa dengan alur booking",
        "Tim penjualan yang butuh data prospek lebih terstruktur",
        "Bisnis yang masih memindahkan data antar aplikasi secara manual",
      ],
      process: idProcess(
        "Petakan proses manual yang paling banyak menyita waktu dan yang paling sering terlewat.",
        "Tentukan mana yang layak diotomasi, mana yang tetap butuh manusia, dan alat apa yang dipakai.",
        "Bangun dan hubungkan otomasi atau chatbot dengan aplikasi yang sudah Anda pakai.",
        "Uji dengan skenario nyata, termasuk kasus tidak biasa, sebelum dipakai pelanggan.",
      ),
      whyTitle: "Kenapa Flaat Studio",
      why: [
        "Berangkat dari proses bisnis Anda, bukan dari tren teknologi",
        "Ada jalur eskalasi ke manusia, sehingga pelanggan tidak terjebak pada bot",
        "Dibangun bersama website dan sistem Anda, jadi data tidak terpecah di banyak tempat",
        "Transparan soal apa yang bisa dan belum bisa diotomasi",
      ],
      ctaSectionTitle: "Siap mengotomasi pekerjaan berulang di bisnis Anda?",
      ctaSectionDesc: "Konsultasi awal gratis. Ceritakan proses yang paling merepotkan, dan kami bantu petakan mana yang layak diotomasi.",
      faq: [
        { q: "Apa itu AI automation untuk bisnis?", a: "Sistem yang menjalankan tugas berulang secara otomatis, misalnya membalas pertanyaan umum, mengirim pengingat, atau memindahkan data antar aplikasi, dengan bantuan AI untuk memahami pesan dan konteks." },
        { q: "Apakah chatbot bisa menggantikan admin sepenuhnya?", a: "Umumnya tidak, dan itu bukan tujuannya. Chatbot menangani pertanyaan yang pola jawabannya jelas, lalu meneruskan kasus yang rumit ke tim Anda." },
        { q: "Apakah bisa dihubungkan dengan WhatsApp?", a: "Bisa. Banyak otomasi kami berjalan lewat WhatsApp, misalnya auto-reply, pengingat pembayaran langganan, dan notifikasi pesanan." },
        { q: "Berapa biaya jasa AI automation?", a: "Biaya bergantung pada kompleksitas alur dan integrasi yang dibutuhkan. Kami bekerja berbasis konsultasi, jadi cakupan dan penawaran dibahas setelah Anda menjelaskan prosesnya." },
        { q: "Apakah data pelanggan saya aman?", a: "Keamanan data kami bahas di awal sesuai kebutuhan Anda, termasuk data apa yang diproses, di mana disimpan, dan siapa yang punya akses." },
      ],
      metaTitle: "Jasa AI Automation & Chatbot untuk Bisnis",
      metaDescription:
        "Jasa AI automation dari Flaat Studio Yogyakarta: auto-reply chat, pengingat booking dan pembayaran via WhatsApp, notifikasi pesanan, dan otomatisasi workflow bisnis.",
      ogDescription: "Otomasi dan chatbot AI untuk mengurangi pekerjaan manual berulang di bisnis Anda.",
      breadcrumbLabel: "Jasa AI Automation",
      serviceType: ["Jasa AI automation", "Chatbot AI", "WhatsApp automation", "Workflow automation"],
    },
    en: {
      ...enLabels,
      eyebrow: "AI & AUTOMATION SERVICES",
      heroTitle: "AI Automation to Cut Repetitive Manual Work",
      heroDesc:
        "Flaat Studio builds automations and AI chatbots that replace repetitive manual work, from replying to customer chats and sending booking and payment reminders to order notifications and data collection. Your team stays focused on work that needs a human.",
      ctaHref: wa("Hi Flaat, I'd like to consult about AI automation for my business"),
      needTitle: "Repetitive work eats your team's time",
      needDesc:
        "Answering the same questions again and again, sending reminders one by one, copying data from chats into spreadsheets: this kind of work is easy to miss and drains working hours. Well-designed automation lets those processes run on their own around the clock while you stay in control of what matters.",
      services: [
        { title: "Auto-reply & AI Chatbots", desc: "Automatic replies to common customer questions on WhatsApp or your website, with handoff to a human when needed." },
        { title: "Booking & Payment Reminders", desc: "Automatic reminders for schedules, invoices, or subscription renewals, without sending each one by hand." },
        { title: "Order Notifications", desc: "Incoming orders or form submissions are forwarded to the right person via WhatsApp or email." },
        { title: "Workflow Automation", desc: "Connect the apps you already use so data moves on its own and never needs re-typing." },
        { title: "Data Collection & Processing", desc: "Gather public or internal data in a structured way for research, leads, or reporting." },
        { title: "Custom AI Solutions", desc: "Purpose-built AI workflows designed around your own business process." },
      ],
      audiencesTitle: "Businesses this fits",
      audiences: [
        "Businesses that get repetitive questions through WhatsApp or Instagram",
        "Subscription or schedule-based businesses that need regular reminders",
        "Hotels, villas, and services with a booking flow",
        "Sales teams that need better-structured lead data",
        "Businesses still moving data between apps by hand",
      ],
      process: enProcess(
        "Map the manual processes that take the most time or get missed most often.",
        "Decide what is worth automating, what still needs a human, and which tools to use.",
        "Build and connect the automation or chatbot to the apps you already use.",
        "Test with real scenarios, including edge cases, before customers ever see it.",
      ),
      why: [
        "Starts from your business process, not from technology trends",
        "Built-in handoff to a human, so customers never get stuck with a bot",
        "Built alongside your website and systems, so data doesn't scatter across tools",
        "Honest about what can and can't be automated",
      ],
      ctaSectionTitle: "Ready to automate the repetitive work in your business?",
      ctaSectionDesc: "The first consultation is free. Tell us which process is the most painful and we'll help map what is worth automating.",
      faq: [
        { q: "What is AI automation for business?", a: "Systems that run repetitive tasks automatically, such as answering common questions, sending reminders, or moving data between apps, using AI to understand messages and context." },
        { q: "Can a chatbot fully replace my admin?", a: "Generally no, and that isn't the goal. A chatbot handles questions with clear answer patterns and passes complicated cases to your team." },
        { q: "Can it connect to WhatsApp?", a: "Yes. Many of our automations run through WhatsApp, such as auto-replies, subscription payment reminders, and order notifications." },
        { q: "How much does AI automation cost?", a: "Cost depends on the complexity of the flow and the integrations needed. We work on a consultation basis, so scope and quote are discussed after you describe your process." },
        { q: "Is my customer data safe?", a: "We discuss data security at the start based on your needs, including what data is processed, where it is stored, and who has access." },
      ],
      metaTitle: "AI Automation & Chatbot Services for Business",
      metaDescription:
        "AI automation by Flaat Studio in Yogyakarta: chat auto-reply, WhatsApp booking and payment reminders, order notifications, and business workflow automation.",
      ogDescription: "AI automations and chatbots that cut repetitive manual work in your business.",
      breadcrumbLabel: "AI Automation Services",
      serviceType: ["AI automation", "AI chatbot", "WhatsApp automation", "Workflow automation"],
    },
  },

  marketing: {
    id: {
      ...idLabels,
      eyebrow: "JASA DIGITAL MARKETING",
      heroTitle: "Jasa Digital Marketing yang Terukur untuk Pertumbuhan Bisnis",
      heroDesc:
        "Flaat Studio menjalankan iklan Meta, Google, dan TikTok, mengelola marketplace, dan mengoptimalkan konversi berbasis data. Strategi marketing yang jelas ukurannya, supaya setiap rupiah iklan bisa dipertanggungjawabkan.",
      ctaHref: wa("Halo Flaat, saya ingin konsultasi digital marketing untuk bisnis saya"),
      needTitle: "Iklan tanpa pengukuran hanya menghabiskan budget",
      needDesc:
        "Banyak bisnis sudah pasang iklan, tetapi tidak tahu iklan mana yang menghasilkan calon pembeli serius dan mana yang hanya menghasilkan klik. Kami memulai dari tujuan dan angka yang ingin dicapai, memasang pelacakan yang benar, lalu mengoptimalkan berdasarkan data, bukan perkiraan.",
      services: [
        { title: "Iklan Meta, Google & TikTok", desc: "Perencanaan, pembuatan, dan optimasi kampanye iklan di platform yang paling relevan dengan target pelanggan Anda." },
        { title: "Marketplace", desc: "Pengelolaan toko dan iklan di marketplace seperti Shopee, dari optimasi listing sampai strategi menaikkan performa toko." },
        { title: "Optimasi Konversi", desc: "Perbaiki halaman dan alur yang membuat pengunjung gagal menjadi pelanggan, termasuk landing page dan form." },
        { title: "Analisis Marketing", desc: "Pelacakan dan pembacaan data supaya jelas channel mana yang efektif dan mana yang perlu dihentikan." },
        { title: "Copywriting & Konten Iklan", desc: "Naskah dan materi iklan yang mengubah pembaca menjadi tindakan." },
        { title: "Konsultasi Strategi", desc: "Pendampingan menyusun strategi marketing yang realistis dengan budget dan tujuan bisnis Anda." },
      ],
      audiencesTitle: "Bisnis yang cocok memakai layanan ini",
      audiences: [
        "Bisnis yang sudah beriklan tetapi belum jelas hasilnya",
        "Penjual marketplace yang ingin menaikkan performa toko",
        "Properti, konstruksi, dan jasa dengan nilai transaksi tinggi",
        "Bisnis lokal yang ingin menjangkau pelanggan baru secara online",
        "Bisnis yang butuh website dan iklan berjalan sebagai satu sistem",
      ],
      process: idProcess(
        "Tetapkan tujuan, target pelanggan, budget, dan angka yang akan dijadikan ukuran keberhasilan.",
        "Susun strategi channel, pesan iklan, dan pelacakan konversi.",
        "Siapkan materi, pasang kampanye, dan hubungkan pelacakan ke website atau toko Anda.",
        "Pantau hasil, uji variasi, dan optimasi berdasarkan data yang masuk.",
      ),
      whyTitle: "Kenapa Flaat Studio",
      why: [
        "Berangkat dari tujuan bisnis dan angka, bukan dari jumlah klik",
        "Satu tim untuk iklan, landing page, dan otomasi follow-up, sehingga tidak ada celah antar vendor",
        "Pelaporan yang bisa dipahami tanpa harus menjadi ahli iklan",
        "Jujur soal ekspektasi: hasil iklan bergantung pada produk, penawaran, dan kompetisi",
      ],
      ctaSectionTitle: "Siap membuat marketing Anda lebih terukur?",
      ctaSectionDesc: "Konsultasi awal gratis. Ceritakan tujuan dan budget Anda, dan kami bantu susun langkah yang paling masuk akal.",
      faq: [
        { q: "Platform iklan mana yang paling cocok untuk bisnis saya?", a: "Tergantung target pelanggan dan jenis produk. Kami menentukan kombinasi Meta, Google, TikTok, atau marketplace setelah memahami bisnis dan budget Anda." },
        { q: "Berapa budget minimal untuk beriklan?", a: "Tidak ada angka tunggal. Budget iklan dibahas bersama berdasarkan tujuan dan persaingan di industri Anda, dan terpisah dari biaya jasa pengelolaan." },
        { q: "Apakah bisa menjanjikan jumlah penjualan atau leads tertentu?", a: "Tidak ada yang bisa menjanjikan hasil pasti. Yang bisa kami lakukan adalah memasang pelacakan yang benar, menguji secara sistematis, dan melaporkan hasilnya secara terbuka." },
        { q: "Apakah Flaat Studio juga mengelola toko marketplace?", a: "Ya, termasuk strategi dan optimasi untuk marketplace seperti Shopee." },
        { q: "Apakah bisa digabung dengan pembuatan website?", a: "Bisa, dan umumnya lebih efektif. Landing page, pelacakan, dan follow-up otomatis yang saling terhubung membuat hasil iklan lebih mudah diukur." },
      ],
      metaTitle: "Jasa Digital Marketing: Iklan Meta, Google, TikTok",
      metaDescription:
        "Jasa digital marketing dari Flaat Studio Yogyakarta: iklan Meta, Google, dan TikTok, pengelolaan marketplace, optimasi konversi, dan analisis marketing yang terukur.",
      ogDescription: "Iklan, marketplace, dan optimasi konversi berbasis data untuk pertumbuhan bisnis.",
      breadcrumbLabel: "Jasa Digital Marketing",
      serviceType: ["Jasa digital marketing", "Iklan Meta", "Iklan Google", "Iklan TikTok", "Marketplace management", "Optimasi konversi"],
    },
    en: {
      ...enLabels,
      eyebrow: "DIGITAL MARKETING SERVICES",
      heroTitle: "Measurable Digital Marketing for Business Growth",
      heroDesc:
        "Flaat Studio runs Meta, Google, and TikTok ads, manages marketplace stores, and optimizes conversion based on data. Marketing with clear metrics, so every rupiah of ad spend can be accounted for.",
      ctaHref: wa("Hi Flaat, I'd like to consult about digital marketing for my business"),
      needTitle: "Ads without measurement just burn budget",
      needDesc:
        "Many businesses already run ads but can't tell which ones bring serious buyers and which only bring clicks. We start from the goals and numbers you want to reach, set up tracking properly, and then optimize from data instead of guesses.",
      services: [
        { title: "Meta, Google & TikTok Ads", desc: "Planning, building, and optimizing ad campaigns on the platforms most relevant to your target customers." },
        { title: "Marketplace", desc: "Store and ad management on marketplaces such as Shopee, from listing optimization to strategies that lift store performance." },
        { title: "Conversion Optimization", desc: "Fix the pages and flows where visitors fail to become customers, including landing pages and forms." },
        { title: "Marketing Analysis", desc: "Tracking and data reading so it is clear which channels work and which to stop." },
        { title: "Copywriting & Ad Creative", desc: "Ad copy and creative that turn readers into action." },
        { title: "Strategy Consulting", desc: "Guidance in building a marketing strategy that is realistic for your budget and business goals." },
      ],
      audiencesTitle: "Businesses this fits",
      audiences: [
        "Businesses already running ads without clear results",
        "Marketplace sellers who want to improve store performance",
        "Property, construction, and high-ticket service businesses",
        "Local businesses that want to reach new customers online",
        "Businesses that need website and ads to work as one system",
      ],
      process: enProcess(
        "Set goals, target customers, budget, and the numbers that define success.",
        "Plan the channel strategy, ad messaging, and conversion tracking.",
        "Prepare creative, launch campaigns, and connect tracking to your website or store.",
        "Monitor results, test variations, and optimize based on incoming data.",
      ),
      why: [
        "Starts from business goals and numbers, not click counts",
        "One team for ads, landing pages, and automated follow-up, so nothing falls between vendors",
        "Reporting you can understand without being an ads expert",
        "Honest expectations: ad results depend on your product, offer, and competition",
      ],
      ctaSectionTitle: "Ready to make your marketing more measurable?",
      ctaSectionDesc: "The first consultation is free. Share your goals and budget and we'll help outline the most sensible next steps.",
      faq: [
        { q: "Which ad platform suits my business best?", a: "It depends on your target customers and product type. We decide on the mix of Meta, Google, TikTok, or marketplaces after understanding your business and budget." },
        { q: "What is the minimum ad budget?", a: "There is no single number. Ad budget is agreed together based on your goals and industry competition, and is separate from our management fee." },
        { q: "Can you guarantee a certain number of sales or leads?", a: "Nobody can guarantee exact results. What we can do is set up proper tracking, test systematically, and report results openly." },
        { q: "Does Flaat Studio also manage marketplace stores?", a: "Yes, including strategy and optimization for marketplaces such as Shopee." },
        { q: "Can this be combined with website development?", a: "Yes, and it's usually more effective. Connected landing pages, tracking, and automated follow-up make ad results easier to measure." },
      ],
      metaTitle: "Digital Marketing Services: Meta, Google & TikTok Ads",
      metaDescription:
        "Digital marketing by Flaat Studio in Yogyakarta: Meta, Google, and TikTok ads, marketplace management, conversion optimization, and measurable marketing analysis.",
      ogDescription: "Data-driven ads, marketplace management, and conversion optimization for business growth.",
      breadcrumbLabel: "Digital Marketing Services",
      serviceType: ["Digital marketing", "Meta ads", "Google ads", "TikTok ads", "Marketplace management", "Conversion optimization"],
    },
  },
};
