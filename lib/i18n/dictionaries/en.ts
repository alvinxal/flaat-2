import type { IDict } from "./id";

const en: IDict = {
  site: {
    name: "Flaat Studio",
    tagline: "Technology & Digital Marketing Agency",
    based: "Based on yogyakarta",
    year: "2025",
  },

  nav: {
    home: "Home",
    about: "About Us",
    services: "Services",
    projects: "Portfolio",
    contact: "Contact",
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
      "A digital partner that combines AI technology and marketing strategy to accelerate your business growth.",
    cta: "Free Consultation",
    ctaHref:
      "https://wa.me/6285156652910?text=Hi%20Flaat%2C%20I%27d%20like%20to%20consult%20about%20a%20website",
  },

  about: {
    label: "ABOUT",
    eyebrow: "About Us",
    text: "Flaat Studio is a hybrid digital partner that combines web development, AI integration, and marketing strategy to build credibility and drive profitability for your business. We believe great digital presence is not just about aesthetics, but about systems that automatically generate conversions.",
  },

  services: {
    label: "SERVICES",
    title: "Services",
    items: [
      {
        title: "Web Development",
        description:
          "High-performance websites, custom web applications, and landing pages designed for maximum conversion. Built with Next.js, WordPress, or custom solutions tailored to your business needs.",
        image: "/assets/images/Webdev.webp",
        alt: "Web Development",
      },
      {
        title: "AI & Automation",
        description:
          "Workflow automation, smart chatbots, and AI agents working 24/7 for business efficiency. Integrate AI technology without technical complexity.",
        image: "/assets/images/AI.webp",
        alt: "AI & Automation",
      },
      {
        title: "Digital Marketing",
        description:
          "SEO, multi-platform ads (Meta/Google/TikTok), marketplace, and data-driven conversion optimization. Measurable marketing strategies for sustainable growth.",
        image: "/assets/images/Digmar.webp",
        alt: "Digital Marketing",
      },
    ],
  },

  contact: {
    label: "CONTACT",
    title: "Contact",
    office: "Yogyakarta, Indonesia",
    phone: "+62 851-5665-2910",
    phoneHref:
      "https://wa.me/6285156652910?text=Hi%20Flaat%2C%20I%27d%20like%20to%20consult%20about%20a%20website",
    email: "hi@flaat.studio",
    emailHref: "mailto:hi@flaat.studio",
    locationLabel: "Location",
    nameLabel: "Name",
    namePlaceholder: "Your Name",
    emailLabel: "Email",
    emailPlaceholder: "name@company.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your needs and business challenges...",
    submit: "Start Discussion",
    sending: "Sending...",
    success: "Message sent! We'll get back to you shortly.",
    errorRequired: "Please fill in all fields",
    errorSend: "Failed to send message",
    errorGeneric: "Something went wrong",
  },

  footer: {
    navigation: "navigation",
    social: "social media",
    contact: "contact",
  },

  notFound: {
    code: "404",
    subtitle: "Page not found",
    heading: "The page you're looking for doesn't exist.",
    text: "The link may have changed, the page was moved, or the address you entered isn't available.",
    backHome: "Back to Home",
    viewPortfolio: "View Portfolio",
  },

  metadata: {
    home: {
      title: "Flaat Studio - Web Development, AI & Digital Marketing Agency",
      description:
        "Flaat Studio is a digital partner that combines web development, AI automation, and digital marketing strategies for business growth.",
    },
    root: {
      title: "Flaat Studio | Web Development, AI & Digital Marketing",
      description:
        "Flaat Studio is a digital partner that combines web development, AI, and digital marketing to drive business growth.",
    },
  },

  projects: {
    title: "Project Portfolio",
    description:
      "Explore Flaat Studio's portfolio of web development, AI automation, and digital marketing projects designed for business growth.",
    all: "All",
    notFoundTitle: "Project Not Found",
    notFoundDescription: "The project you're looking for was not found.",
    collectionName: "Flaat Studio Project Portfolio",
    collectionDescription:
      "A collection of Flaat Studio projects in web development, AI automation, and digital marketing.",
    defaultProjectDescription:
      "{title} is one of Flaat Studio's projects in web development, AI, and digital marketing.",
    noProjects: "No projects available yet.",
    relatedProjects: "More Projects",
    viewAll: "View All Projects",
  },

  pricing: {
    servicePillars: [
      {
        title: "Web Development",
        description:
          "Clean, credible websites ready for promotion and daily operations.",
      },
      {
        title: "AI & Automation",
        description:
          "Streamlined workflows that are faster and more efficient for your daily business needs.",
      },
      {
        title: "Digital Marketing",
        description:
          "Focused, measurable growth strategies that align with your business goals.",
      },
    ],
    webTiers: [
      {
        name: "Starter",
        price: "Rp 1,500,000",
        details: [
          "2 pages: Home + Contact",
          "Mobile responsive",
          "Domain .com + hosting setup 1 year",
          "Timeline 1-2 weeks",
        ],
      },
      {
        name: "Business",
        price: "Rp 3,500,000",
        details: [
          "3-5 page website",
          "CMS for content editing",
          "Contact form",
          "Basic SEO",
          "Timeline 2-3 weeks",
        ],
      },
      {
        name: "Custom",
        price: "Starting Rp 5,000,000",
        details: [
          "Web app, ERP, dashboard, or custom requirements",
          "Scope follows business needs",
          "Timeline 3-8 weeks",
        ],
      },
    ],
    automationTiers: [
      {
        name: "Basic",
        price: "Rp 1,300,000",
        details: [
          "WA reminder, chatbot, or AI assistant",
          "1 main workflow",
          "Ideal for getting started with automation",
        ],
      },
      {
        name: "Advance",
        price: "Rp 2,300,000",
        details: [
          "Multi workflow",
          "API integration",
          "Custom logic",
          "Ideal for more complex workflows",
        ],
      },
      {
        name: "Enterprise",
        price: "Starting Rp 3,500,000",
        details: [
          "Full system automation",
          "Maintenance",
          "Training 3x",
          "Ideal for comprehensive implementation",
        ],
      },
    ],
    marketingTiers: [
      {
        name: "Starter",
        price: "Rp 2,000,000 / 2 months",
        details: [
          "Digital audit",
          "Content strategy",
          "Basic on-page SEO",
          "Monthly report",
        ],
      },
      {
        name: "Growth",
        price: "Rp 3,500,000 / 2 months",
        details: [
          "Everything in Starter",
          "Ads management",
          "Conversion optimization",
          "A/B testing",
        ],
      },
      {
        name: "Scale",
        price: "Rp 5,500,000 / 3 months",
        details: [
          "Multi-platform ads",
        ],
      },
    ],
    addonsHeading: "Add-on & Maintenance",
    addonsText:
      "Add-ons are available to help your business keep growing after the main project is complete, without starting from scratch.",
    printButton: "Print Prices",
    metaTitle: "Pricing & Packages | Flaat Studio",
    metaDescription:
      "View pricing packages for web development, AI automation, and digital marketing services from Flaat Studio.",
  },
};

export default en;
