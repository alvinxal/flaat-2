import type { IDict } from "./id";

const en: IDict = {
  site: {
    name: "Flaat Studio",
    tagline: "Tech & Marketing Studio",
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
    status: "Tech & Marketing Studio",
    title:
      "A digital partner that builds websites, AI systems, and marketing strategies to accelerate your business growth.",
    cta: "Free Consultation",
    ctaHref:
      "https://wa.me/6285156652910?text=Hi%20Flaat%2C%20I%27d%20like%20to%20consult%20about%20a%20website",
  },

  about: {
    label: "ABOUT",
    eyebrow: "About Us",
    text: "Flaat Studio builds websites, AI systems, and marketing strategies that work for your business, from efficient web systems and automation to measurable marketing campaigns that bring in customers.",
  },

  logos: {
    label: "TRUSTED BY",
    title: "Partners & Clients",
  },

  services: {
    label: "SERVICES",
    title: "Services",
    items: [
      {
        title: "Web Development",
        description:
          "Websites and web systems built for daily business operations, from booking systems for hospitality to e-commerce and corporate websites, designed to be easy to manage and ready to grow with your business.",
        tags: ["Company Profile", "Booking System", "Web Commerce", "Custom Solution"],
        image: "/assets/images/Webdev.webp",
        alt: "Web Development",
      },
      {
        title: "AI & Automation",
        description:
          "Automation that replaces repetitive manual processes, from guest chat replies to booking reminders and order notifications, improving efficiency while reducing dependence on manual work.",
        tags: ["Auto-reply Chat", "Booking Reminders", "Order Notifications", "Workflow Automation", "Custom Solution"],
        image: "/assets/images/AI.webp",
        alt: "AI & Automation",
      },
      {
        title: "Digital Marketing",
        description:
          "SEO, multi-platform ads (Meta/Google/TikTok), marketplace, and data-driven conversion optimization. Measurable marketing strategies for sustainable growth.",
        tags: ["Meta/Google/TikTok Ads", "Marketplace", "Conversion Optimization", "Marketing Analysis", "Consultation"],
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
    email: "studioflaat@gmail.com",
    emailHref: "mailto:studioflaat@gmail.com",
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
      title: "Flaat Studio - Web Development & AI Systems Studio",
      description:
        "Flaat Studio is a digital partner that builds websites and AI systems for business growth.",
    },
    root: {
      title: "Flaat Studio | Web Development & AI Systems",
      description:
        "Flaat Studio is a digital partner that builds websites and AI systems to drive business growth.",
    },
  },

  projects: {
    title: "Project Portfolio",
    description:
      "Explore Flaat Studio's portfolio of web development and AI automation projects designed for business growth.",
    all: "All",
    notFoundTitle: "Project Not Found",
    notFoundDescription: "The project you're looking for was not found.",
    collectionName: "Flaat Studio Project Portfolio",
    collectionDescription:
      "A collection of Flaat Studio projects in web development and AI automation.",
    defaultProjectDescription:
      "{title} is one of Flaat Studio's projects in web development and AI.",
    noProjects: "No projects available yet.",
    relatedProjects: "More Projects",
    viewAll: "View All Projects",
    visitWebsite: "Visit Website",
  },
};

export default en;
