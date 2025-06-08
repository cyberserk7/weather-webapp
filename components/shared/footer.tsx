import { FOOTER_LINKS } from "@/constants/links";
import { Logo } from "./logo";
import { Github, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#F3F4F6]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-8 flex items-center justify-between">
        {/* Logo */}
        <Logo className="self-start" />
        <div className="flex flex-col items-center gap-4 font-medium">
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.map((link, index) => {
              return (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-700"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
          <span className="text-gray-600">
            &copy; 2023 Sayani. All rights reserved.
          </span>
        </div>
        {/* Social Media Icons */}
        <div className="flex gap-4 self-start text-gray-500">
          <div className="bg-[#F3F4F6] rounded-full p-2.5  ">
            <Twitter size={18} strokeWidth={2} />
          </div>
          <div className="bg-[#F3F4F6] rounded-full p-2.5 ">
            <Instagram size={18} strokeWidth={2} />
          </div>
          <div className="bg-[#F3F4F6] rounded-full p-2.5">
            <Github size={18} strokeWidth={2} />
          </div>
        </div>
      </div>
    </footer>
  );
};
