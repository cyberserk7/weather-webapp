"use client";

import { useSearchParams } from "next/navigation";
import { InfoCardSection } from "./_components/card-section/info-card-section";
import { LocationHeader } from "./_components/location-header";
import { NearbyLocations } from "./_components/nearby-locations/nearby-locations";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Info } from "lucide-react";

export interface WeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const area = searchParams.get("area") || "";

  const [coords, setCoords] = useState<any>({});
  const [weatherData, setWeatherData] = useState<any>({});

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
      const res = await toast.promise(
        axios.get<WeatherResponse>(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.NEXT_PUBLIC_WEATHTER_API_KEY}&units=metric&limit=1&lang=en`
        ),
        {
          loading: "Searching...",
          success: "Updated",
        }
      );

      setWeatherData(res.data);
      console.log(res.data);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data.cod === "404") {
        toast.error("Location not found");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  if (!weatherData.name) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div className="bg-white rounded-lg p-4 border border-gray-200 flex justify-center items-center gap-4">
          <div className="flex items-center gap-2">
            <Info size={24} strokeWidth={2} className="text-blue-500" />
            <h1>Search to get the latest weather updates</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 h-full">
      <LocationHeader weatherData={weatherData} />
      <InfoCardSection weatherData={weatherData} />
      <NearbyLocations weatherData={weatherData} />
    </div>
  );
}
