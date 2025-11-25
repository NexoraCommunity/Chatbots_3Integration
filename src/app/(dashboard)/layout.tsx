import SideBar from "@/src/components/ui/SideBar";
import { SearchBar } from "@/src/components/ui/SearchBar";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="l-0 bg-linear-to-b from-[#eafffc] via-[#ffffff] to-[#C4FAF2] p-4 fixed">
        <SideBar />
      </div>
      <div className="flex-1 ml-72">

        {/* NAVBAR */}
        <div className="fixed top-0 left-72 right- z-50">
          <Image
            src="/navbar.svg"
            alt="Navbar"
            width={1075}
            height={88}
            className="w-full"
          />
          <div className="absolute top-0 left-5 w-full">
            <SearchBar />
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="mt-20 p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
