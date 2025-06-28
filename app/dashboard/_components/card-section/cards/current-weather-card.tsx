import { WeatherResponse } from "@/app/dashboard/page";
import { CircleGauge, CloudSun, Droplet, Eye, Gauge, Wind } from "lucide-react";
import Image from "next/image";

interface CurrentWeatherCardProps {
  weatherData?: WeatherResponse;
}

export const CurrentWeatherCard = ({
  weatherData,
}: CurrentWeatherCardProps) => {
  function getWeatherIconUrl(iconCode: string, size = "2x") {
    // OpenWeather icon URL format
    // Sizes available: 1x (50x50), 2x (100x100), 4x (200x200)
    return `https://openweathermap.org/img/wn/${iconCode}@${size}.png`;
  }

  const windSpeedMs = weatherData!.wind?.speed;
  const windSpeedKmH = (windSpeedMs * 3.6).toFixed(1);

  const visibilityInMeters = weatherData!.visibility;
  const visibilityInKm = visibilityInMeters / 1000;

  function getSimpleWeatherCategory(weatherData: WeatherResponse) {
    const weatherId = weatherData.weather[0].id;

    if (weatherId === 800) return "Sunny";
    if (weatherId >= 801 && weatherId <= 804) return "Cloudy";
    if (weatherId >= 500 && weatherId <= 599) return "Rainy";
    if (weatherId >= 600 && weatherId <= 699) return "Snowy";
    if (weatherId >= 200 && weatherId <= 299) return "Stormy";
    if (weatherId >= 300 && weatherId <= 399) return "Drizzle";
    if (weatherId >= 700 && weatherId <= 799) return "Foggy/Misty";

    return "Unknown";
  }

  return (
    <div className="flex-1 bg-white rounded-lg p-4 border border-gray-200 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-sm text-gray-500">Current Weather</p>
          <div className="flex gap-1 items-center">
            <span className="text-4xl font-semibold">
              {Math.floor(weatherData?.main.temp!)}°
            </span>
            <span className="text-lg font-medium">C</span>
          </div>
          <p className="text-sm">
            Feels like {Math.floor(weatherData?.main.feels_like!)}°C
          </p>
        </div>
        {/* <CloudSun size={44} className="text-blue-600" /> */}
        <Image
          src={getWeatherIconUrl(weatherData?.weather[0].icon!)}
          alt="icon"
          width={64}
          height={64}
        />
      </div>
      <div className="text-sm space-y-1">
        <p className="">{getSimpleWeatherCategory(weatherData!)}</p>
        <div className="flex justify-between text-gray-500">
          <div className="flex-1 flex items-center gap-2">
            <Wind size={18} />
            <span>{windSpeedKmH} km/h</span>
          </div>
          <div className="flex-1 flex items-center gap-2">
            <Droplet size={18} />
            <span>{weatherData?.main.humidity}%</span>
          </div>
        </div>
        <div className="flex justify-between text-gray-500">
          <div className="flex-1 flex items-center gap-2">
            <Eye size={18} />
            <span>{visibilityInKm} km</span>
          </div>
          <div className="flex-1 flex items-center gap-2">
            <Gauge size={18} />
            <span>{weatherData!.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};
