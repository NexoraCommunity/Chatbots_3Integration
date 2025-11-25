"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "default";
  moveTo?: string;
  fullWidth?: boolean;
}

const Button = ({ label, variant = "primary", moveTo, fullWidth }: ButtonProps) => {
  const router = useRouter();

  const baseStyles = "text-lg font-bold rounded-full flex justify-center items-center p-3 transition active:scale-95 cursor-pointer";

  const variants = {
    primary: "bg-[#27C5FF] text-white",
    secondary: "bg-gray-300 text-white",
    default: "text-[#01D2B3]",
  };

  const handleMoveTo = () => {
    if (moveTo) router.push(moveTo);
  };

  return (
    <button
      onClick={handleMoveTo}
      className={`${baseStyles} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {label}
    </button>
  );
};

export { Button };
