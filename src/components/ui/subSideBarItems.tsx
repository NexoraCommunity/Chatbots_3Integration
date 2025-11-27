'use client'
import Link from "next/link";

interface subSideBarItemProps {
  label: string;
  href: string;
}
const SubSideBarItems = ({ label, href }: subSideBarItemProps) => {
  return (
    <Link href={href}>
      <div className="bg-[#00D2B2]">{label}</div>
    </Link>
  );
};

export {SubSideBarItems};
