import { AirQualityCard } from "./cards/air-quality-card";
import { CurrentWeatherCard } from "./cards/current-weather-card";
import { ForecastCard } from "./cards/forecast-card";

interface InfoCardSectionProps {
  area?: string;
}

export const InfoCardSection = ({ area }: InfoCardSectionProps) => {
  return (
    <div className="flex gap-6">
      <CurrentWeatherCard />
      <ForecastCard />
      <AirQualityCard />
    </div>
  );
};
