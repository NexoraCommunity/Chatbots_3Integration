"use client";
import Link from "next/link";
import { ReactNode, use } from "react";
import { motion } from "framer-motion";

interface SideBarItemProps {
  label: string;
  icon: ReactNode;
  href: string;
  active?: boolean;
}

const MotionLink = motion(Link);

const SideBarItems = ({ label, icon, href, active }: SideBarItemProps) => {
  return (
    <MotionLink
    animate={{
      scale: active ? 1.05 : 1,
    }}
      href={href}
      className={`
        flex items-center gap-3 p-4 rounded-3xl transition font-medium 
        ${
          active
            ? "bg-linear-to-r from-[#00D2B2] to-[#7cfce9] text-white shadow-md justify-center h-14"
            : "text-gray-600 hover:bg-[#eafffc] hover:shadow-sm"
        }
      `}
    >
      {icon}
      <span>{label}</span>
    </MotionLink>
  );
};

export { SideBarItems };
