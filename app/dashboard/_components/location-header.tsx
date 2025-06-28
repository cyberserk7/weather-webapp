"use client";

import { Button } from "@/components/ui/button";
import axios, { AxiosError } from "axios";
import { Share2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface LocationHeaderProps {
  area?: string;
}

export const LocationHeader = ({ area }: LocationHeaderProps) => {
  const [coords, setCoords] = useState<any>({});

  useEffect(() => {
    if (area) {
      getLatLong();
    }
  }, [area]);

  useEffect(() => {
    if (coords.lat && coords.lon) {
      getWeatherData();
    }
  }, [coords]);

  const getLatLong = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${process.env.NEXT_PUBLIC_WEATHTER_API_KEY}&limit=1`
      );

      setCoords(res.data.coord);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data.cod === "404") {
        toast.error("Location not found");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  const getWeatherData = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.NEXT_PUBLIC_WEATHTER_API_KEY}&units=metric&limit=1&lang=en`
      );

      console.log(res.data);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data.cod === "404") {
        toast.error("Location not found");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="flex justify-between items-end">
      <div className="flex flex-col">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-red-600"
          >
            <path
              fillRule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="text-xl font-semibold">Kolkata, IN</h1>
        </div>
        <div className="flex gap-1 text-sm text-gray-500">
          <span>Monday, June 7</span>
          <span>•</span>
          <span>Updated just now</span>
        </div>
      </div>
      <div className="">
        <Button variant={"outline"} className="rounded-r-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 text-yellow-500"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
          Save
        </Button>
        <Button variant={"outline"} className="rounded-l-none">
          <Share2 />
          Share
        </Button>
      </div>
    </div>
  );
};
