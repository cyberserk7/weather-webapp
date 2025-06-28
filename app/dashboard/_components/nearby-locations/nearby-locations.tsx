"use client";

import { NEARBY_LOCATIONS } from "@/constants/nearby-locations";
import { CloudRain, CloudSun, Cloudy, Haze } from "lucide-react";
import Link from "next/link";
import { WeatherResponse } from "../../page";

interface NearbyLocationsProps {
  weatherData?: WeatherResponse;
}

export const NearbyLocations = ({ weatherData }: NearbyLocationsProps) => {
  return (
    <div className="flex flex-col w-full gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Nearby Locations</h1>
        <Link href={"/dashboard"} className="font-semibold text-blue-600">
          View All
        </Link>
      </div>
      <div className="flex justify-between gap-8">
        {NEARBY_LOCATIONS.filter((location, index) => index < 4).map(
          (location) => {
            function getWeatherIcon() {
              if (location.weather === "Partly Cloudy") {
                return <CloudSun size={28} className="text-gray-500" />;
              }
              if (location.weather === "Light Rain") {
                return <CloudRain size={28} className="text-blue-500" />;
              }
              if (location.weather === "Cloudy") {
                return <Cloudy size={28} className="text-gray-700" />;
              }
              if (location.weather === "Foggy") {
                return <Haze size={28} className="text-yellow-500" />;
              }

              return null;
            }

            return (
              <div
                key={location.location}
                className="flex-1 bg-white rounded-lg p-4 border border-gray-200 flex-col flex gap-4"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-lg font-semibold">
                      {location.location}
                    </h1>
                    <p className="text-sm text-gray-500 font-medium">
                      {location.distance} km away
                    </p>
                  </div>
                  <div>{getWeatherIcon()}</div>
                </div>
                <div>
                  <h1 className="text-2xl font-semibold">
                    {location.temp}°C{" "}
                    <span className="font-medium text-gray-500 text-sm">
                      {location.weather}
                    </span>
                  </h1>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
