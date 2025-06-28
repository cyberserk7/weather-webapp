import { WeatherResponse } from "../../page";
import { AirQualityCard } from "./cards/air-quality-card";
import { CurrentWeatherCard } from "./cards/current-weather-card";
import { ForecastCard } from "./cards/forecast-card";

interface InfoCardSectionProps {
  weatherData?: WeatherResponse;
}

export const InfoCardSection = ({ weatherData }: InfoCardSectionProps) => {
  return (
    <div className="flex gap-6">
      <CurrentWeatherCard weatherData={weatherData} />
      <ForecastCard />
      <AirQualityCard />
    </div>
  );
};
