"use client";

import { trackEvent } from "@/components/analytics/trackEvent";
import { Icons } from "@/components/shared/Icons";

const iconMap = {
  contact: Icons.Contact,
  instagram: Icons.Instagram,
  linkedin: Icons.LinkedIn,
  whatsapp: Icons.WhatsApp,
} as const;

type IconKey = "contact" | "instagram" | "linkedin" | "whatsapp";

const socialItems: { name: string; href: string; icon: IconKey }[] = [
  { name: "WhatsApp", href: "https://wa.me/6285156652910", icon: "whatsapp" },
  { name: "Instagram", href: "https://www.instagram.com/flaatstudio/", icon: "instagram" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/flaat-studio-84ab3b39a/", icon: "linkedin" },
  { name: "Email", href: "mailto:hi@flaat.studio", icon: "contact" },
];

export const SidebarSocialIcons = ({
  isOpen,
  totalItems,
}: {
  isOpen: boolean;
  totalItems: number;
}) => {
  return (
    <div
      style={{
        transitionDelay: isOpen ? `${(totalItems + 1) * 100}ms` : "0ms",
      }}
      className={`flex flex-col gap-6 w-full mt-auto border-t border-b border-gray-200 py-2 desk:mt-10 transition-all duration-500 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 desk:opacity-100 desk:translate-y-0"}`}
    >
      <div className='flex justify-center gap-4 flex-wrap'>
        {socialItems.map((item) => {
          const Icon = iconMap[item.icon];

          return (
            <a
              key={item.name}
              href={item.href}
              target='_blank'
              rel='noreferrer'
              onClick={() => {
                if (item.name === "WhatsApp") {
                  trackEvent("click_whatsapp", {
                    location: "sidebar_social",
                    label: item.name,
                  });
                  return;
                }

                if (item.name === "Email") {
                  trackEvent("click_email", {
                    location: "sidebar_social",
                    label: item.name,
                  });
                  return;
                }

                trackEvent("click_outbound", {
                  location: "sidebar_social",
                  label: item.name,
                  destination: item.href,
                });
              }}
              className='inline-flex items-center justify-center p-4 desk:p-2 rounded-full text-accent hover:bg-accent/10 transition-colors duration-200'
              aria-label={item.name}
            >
              <Icon className='size-7 desk:size-4' />
            </a>
          );
        })}
      </div>
    </div>
  );
};
