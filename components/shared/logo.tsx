import { cn } from "@/lib/utils";
import { Cloudy } from "lucide-react";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <a href="/dashboard" className={cn("flex items-center gap-2", className)}>
      <div className="rounded-sm bg-blue-600 text-white p-1.5">
        <Cloudy size={18} strokeWidth={2.5} />
      </div>
      <span className="text-lg font-semibold">Sayani</span>
    </a>
  );
};
