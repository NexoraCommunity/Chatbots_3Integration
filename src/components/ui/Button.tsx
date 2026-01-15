"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "default" | "custom";
  moveTo?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right"
  className?: string;
}

const Button = ({
  label,
  variant = "primary",
  moveTo,
  fullWidth,
  icon,
  iconPosition,
  className
}: ButtonProps) => {
  const router = useRouter();

  const baseStyles =
    "text-lg flex justify-center items-center transition active:scale-95 cursor-pointer";

  const variants = {
    primary: "bg-[#27C5FF] p-3 text-white rounded-xl",
    secondary: "bg-gray-300 text-[#655E5E] rounded-xl",
    default: "p-3 rounded-xl border",
    custom: "",
  };

  const handleMoveTo = () => {
    if (moveTo) router.push(moveTo);
  };

  return (
    <button
      onClick={handleMoveTo}
      className={`${baseStyles} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      }${className ?? ""}`}
    >
      {icon && iconPosition === "left" && icon}
      <span>{label}</span>
      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export { Button };
