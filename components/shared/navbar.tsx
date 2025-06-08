"use client";

import { LINKS } from "@/constants/links";
import { Cloudy } from "lucide-react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-[#F3F4F6]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* logo section */}
        <a href="/dashboard" className="flex items-center gap-2">
          <div className="rounded-sm bg-blue-600 text-white p-1.5">
            <Cloudy size={18} strokeWidth={2.5} />
          </div>
          <span className="text-lg font-semibold">Sayani</span>
        </a>
        {/* links section */}
        <div className="flex items-center gap-6">
          {LINKS.map((link, index) => {
            return (
              <div
                key={index}
                className={`${
                  pathname === link.href ? "text-black" : "text-gray-500"
                } `}
              >
                {link.label}
              </div>
            );
          })}
        </div>
        {/* search section */}
        <div></div>
      </div>
    </nav>
  );
};
