"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { ReactNode } from "react";

interface SideBarItemProps {
  label: string;
  icon?: ReactNode;
  href?: string;
  active?: boolean;

  toggle?: boolean;
  isOpen?: boolean;
  forcedInactive?: boolean;

  onToggle?: () => void;       // klik icon panah
  onClickMain?: () => void;    // klik area utama
}

const MotionLink = motion(Link);

export function SideBarItems({
  label,
  icon,
  href,
  active,
  toggle,
  isOpen,
  forcedInactive,
  onToggle,
  onClickMain,
}: SideBarItemProps) {
  const isActiveNow = toggle ? active : !forcedInactive && active;

  const baseClass = `
    flex items-center justify-between gap-3 p-4 rounded-3xl cursor-pointer transition font-medium 
    ${
      isActiveNow
        ? "bg-linear-to-r from-[#00D2B2] to-[#7cfce9] text-white shadow-md"
        : "text-[#655E5E] hover:bg-[#eafffc] hover:shadow-sm"
    }
  `;

  // ITEM DROPDOWN
  if (toggle) {
    return (
      <div className={baseClass}>
        <div
          onClick={onClickMain}
          className="flex items-center gap-3 flex-1 select-none"
        >
          {icon}
          <span>{label}</span>
        </div>

        <motion.div
          onClick={(e) => {
            e.stopPropagation();
            onToggle?.();
          }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="p-1"
        >
          <Icon icon="mdi:chevron-up" width="20" height="20" />
        </motion.div>
      </div>
    );
  }

  // NORMAL LINK ITEM
  return (
    <MotionLink href={href || "#"} className={baseClass}>
      <div className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </div>
    </MotionLink>
  );
}
