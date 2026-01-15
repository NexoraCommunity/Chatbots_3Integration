import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Cards = ({ children, className }: CardProps) => {
  return (
    <div
      className={`rounded-lg bg-white shadow-md ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export {Cards}