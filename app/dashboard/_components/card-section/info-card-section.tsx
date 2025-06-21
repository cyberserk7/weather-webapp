import { AirQualityCard } from "./cards/air-quality-card";
import { CurrentWeatherCard } from "./cards/current-weather-card";
import { ForecastCard } from "./cards/forecast-card";

export const InfoCardSection = () => {
  return (
    <div className="flex gap-6">
      <CurrentWeatherCard />
      <ForecastCard />
      <AirQualityCard />
    </div>
  );
};
