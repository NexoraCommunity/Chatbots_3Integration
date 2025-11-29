"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { ReactNode } from "react";

interface SideBarItemProps {
  label: string;
  icon?: ReactNode;
  href: string;
  active?: boolean;

  toggle?: boolean;
  isOpen?: boolean;
  onToggle?: () => void; // klik icon panah
}

const MotionLink = motion(Link);

export function SideBarItems({
  label,
  icon,
  href,
  active,
  toggle,
  isOpen,
  onToggle,
}: SideBarItemProps) {
  const isActiveNow = active;

  const baseClass = `
    flex items-center justify-between p-2 rounded-xl cursor-pointer transition font-normal 
    ${
      isActiveNow
        ? "bg-linear-to-r from-[#00D2B2] to-[#7cfce9] text-white justify-center my-3 py-4 shadow-md"
        : "text-[#655E5E] hover:bg-[#eafffc] hover:shadow-sm"
    }
  `;

  // ITEM DROPDOWN
  if (toggle) {
    return (
      <MotionLink
        animate={{
          x: isActiveNow ? 10 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, duration: 0.2 }}
        href={href}
        className={baseClass}
      >
        <div className="flex items-center gap-3 flex-1 select-none">
          {icon}
          <span>{label}</span>
        </div>

        <motion.div
          onClick={(e) => {
            e.stopPropagation();
            onToggle?.();
          }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          className="p-1"
        >
          <Icon icon="mdi:chevron-up" width="20" height="20" />
        </motion.div>
      </MotionLink>
    );
  }

  // NORMAL LINK ITEM
  return (
    <MotionLink
      animate={{
        x: isActiveNow ? 10 : 0,
      }}
      transition={{ type: "keyframes", duration: 0.2 }}
      href={href || "#"}
      className={baseClass}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </div>
    </MotionLink>
  );
}
