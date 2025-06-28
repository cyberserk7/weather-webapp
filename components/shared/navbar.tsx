"use client";

import { LINKS } from "@/constants/links";
import { cn } from "@/lib/utils";
import { ArrowRight, Bell, Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Logo } from "./logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import qs from "query-string";

export const Navbar = () => {
  const [location, setLocation] = useState("");

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const area = searchParams.get("area");

  useEffect(() => {
    if (area) {
      setLocation(area);
    }
  }, [area]);

  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          area: location,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  };

  return (
    <nav className="bg-white border-b border-[#F3F4F6]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* logo section */}
        <Logo />
        {/* links section */}
        <div className="flex items-center gap-6">
          {LINKS.map((link, index) => {
            const notIsActive = pathname !== link.href;

            return (
              <Link
                key={index}
                href={link.href}
                className={cn(
                  "font-medium border-b-2 border-blue-500",
                  notIsActive && "text-gray-400 border-transparent"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        {/* search section */}
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-[#F3F4F6] border-none flex items-center gap-1.5 px-2 text-gray-500">
            <Search size={18} strokeWidth={2} />
            <Input
              className="border-none outline-none rounded-none p-0 placeholder:text-gray-500"
              placeholder="Search location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            {location.trim() && (
              <button
                onClick={onClick}
                disabled={!location.trim()}
                className="rounded-full bg-blue-500 p-1 text-white hover:bg-blue-500/90 hover:shadow-lg cursor-pointer transition-all"
              >
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            )}
          </div>
          <Button
            size={"icon"}
            variant={"ghost"}
            className="rounded-full text-gray-500 bg-[#F3F4F6] p-2.5 hover:text-gray-500"
          >
            <Bell size={18} strokeWidth={2} />
          </Button>
        </div>
      </div>
    </nav>
  );
};
