// SVG Icons for Modio
// All icons are 24x24 viewBox for consistency

export const Icons = {


  // Instagram
  Instagram: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15 3H9C5.686 3 3 5.686 3 9V15C3 18.314 5.686 21 9 21H15C18.314 21 21 18.314 21 15V9C21 5.686 18.314 3 15 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="3.75" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.875" cy="7.125" r="1.125" fill="currentColor" />
    </svg>
  ),

  // LinkedIn
  LinkedIn: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.75 3.75H20.25V20.25H3.75V3.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8.25 10.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.25 7.125H8.257" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M12 16.5V13.125C12 11.675 13.175 10.5 14.625 10.5C16.075 10.5 17.25 11.675 17.25 13.125V16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),

  // Threads
  Threads: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M19.5 12C19.5 7.029 16.142 3 12 3C7.858 3 4.5 7.029 4.5 12C4.5 16.971 7.858 21 12 21C16.5 21 18.75 18 18.75 15.75C18.75 9.75 9 9.75 9 14.25C9 18 15.75 18 15.75 12C15.75 6.75 10.5 6.75 9 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  // Hamburger Menu
  Menu: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3 6H21M3 12H21M3 18H21"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  // Close (X)
  Close: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18 6L6 18M6 6L18 18"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  // Home
  Home: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.75 12.439L12.969 3.219C13.11 3.078 13.301 2.999 13.5 2.999C13.699 2.999 13.89 3.078 14.031 3.219L23.25 12.439"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 10.94V20.25H11.25V14.25H15.75V20.25H21.75V10.94"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2.25 20.25H23.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  // About
  Info: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="7.875" cy="10.125" r="4.875" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M1.959 18.75C3.481 16.41 6.083 14.998 8.875 15C11.667 15 14.269 16.412 15.791 18.752"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.996 15C19.032 14.998 17.261 13.819 16.503 12.008C15.745 10.197 16.147 8.108 17.524 6.707C18.9 5.307 20.982 4.87 22.806 5.597"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  // Projects
  Briefcase: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 3.75H19.5L22.5 6.75V20.25H7.5V4.5C7.5 4.086 7.836 3.75 8.25 3.75H12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 6.75H2.25C1.836 6.75 1.5 7.086 1.5 7.5V20.25H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.75 15H14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9.75 18H14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  // Services
  Services: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3" y="4.5" width="18" height="15" rx="0.75" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6.375" cy="7.875" r="1.125" fill="currentColor" />
      <circle cx="10.125" cy="7.875" r="1.125" fill="currentColor" />
    </svg>
  ),

  // Contact
  Contact: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3 9L12 14.25L21 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 9V18.75C3 19.164 3.336 19.5 3.75 19.5H20.25C20.664 19.5 21 19.164 21 18.75V9L12 3L3 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.232 14.25L13.364 19.288"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.768 14.25L10.636 19.288"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  // Chevron Right (for project cards)
  ChevronRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // Check/accepting work
  Check: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="9" fill="currentColor" />
      <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

// Nav item icon mapping
export const NavIcon = ({ name, ...props }: { name: keyof typeof Icons } & React.SVGProps<SVGSVGElement>) => {
  const Icon = Icons[name];
  return <Icon {...props} />;
};
