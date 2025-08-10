"use client";

import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { WeatherResponse } from "../page";
import { useEffect, useState } from "react";
interface LocationHeaderProps {
  weatherData?: WeatherResponse;
}

export const LocationHeader = ({ weatherData }: LocationHeaderProps) => {
  const [dayDate, setDayDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);

  function extractDayDateTime(weatherData: WeatherResponse) {
    const localDate = new Date((weatherData.dt + weatherData.timezone) * 1000);
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return {
      day: dayNames[localDate.getUTCDay()],
      date: `${monthNames[localDate.getUTCMonth()]} ${localDate.getUTCDate()}`,
      time: `${String(localDate.getUTCHours()).padStart(2, "0")}:${String(
        localDate.getUTCMinutes()
      ).padStart(2, "0")}`,
    };
  }

  useEffect(() => {
    if (weatherData) {
      const { day, date, time } = extractDayDateTime(weatherData);
      setDayDate(`${day}, ${date}`);
      setTime(time);
    }
  }, [weatherData]);

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
          <h1 className="text-xl font-semibold">
            {weatherData?.name}, {weatherData?.sys?.country}
          </h1>
        </div>
        <div className="flex gap-1 text-sm text-gray-500">
          <span>{dayDate}</span>
          <span>•</span>
          <span>{time}</span>
        </div>
      </div>
      <div className="">
        <Button variant={"outline"} className="">
          <Share2 />
          Share
        </Button>
      </div>
    </div>
  );
};
