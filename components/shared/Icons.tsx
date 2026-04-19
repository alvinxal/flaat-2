"use client";

import {
  FaInstagram,
  FaLinkedinIn,
  FaThreads,
  FaBars,
  FaXmark,
  FaHouse,
  FaCircleInfo,
  FaBriefcase,
  FaEnvelope,
  FaChevronRight,
  FaCheck,
  FaHandsHolding,
  FaWhatsapp,
} from "react-icons/fa6";

type IconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
  Threads: FaThreads,
  Menu: FaBars,
  Close: FaXmark,
  Home: FaHouse,
  Info: FaCircleInfo,
  Briefcase: FaBriefcase,
  Services: FaHandsHolding,
  Contact: FaEnvelope,
  WhatsApp: FaWhatsapp,
  ChevronRight: FaChevronRight,
  Check: FaCheck,
};

export const NavIcon = ({
  name,
  ...props
}: {
  name: keyof typeof Icons;
} & IconProps) => {
  const Icon = Icons[name];
  return <Icon {...props} />;
};