import { CircleGauge, CloudSun, Droplet, Eye, Gauge, Wind } from "lucide-react";

export const CurrentWeatherCard = () => {
  return (
    <div className="flex-1 bg-white rounded-lg p-4 border border-gray-200 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-sm text-gray-500">Current Weather</p>
          <div className="flex gap-1 items-center">
            <span className="text-4xl font-semibold">34°</span>
            <span className="text-lg font-medium">C</span>
          </div>
          <p className="text-sm">Feels like 42°C</p>
        </div>
        <CloudSun size={44} className="text-blue-600" />
      </div>
      <div className="text-sm space-y-1">
        <p className="">Party Cloudy</p>
        <div className="flex justify-between text-gray-500">
          <div className="flex-1 flex items-center gap-2">
            <Wind size={18} />
            <span>16 kmph</span>
          </div>
          <div className="flex-1 flex items-center gap-2">
            <Droplet size={18} />
            <span>80%</span>
          </div>
        </div>
        <div className="flex justify-between text-gray-500">
          <div className="flex-1 flex items-center gap-2">
            <Eye size={18} />
            <span>12 km</span>
          </div>
          <div className="flex-1 flex items-center gap-2">
            <Gauge size={18} />
            <span>29.92 inHg</span>
          </div>
        </div>
      </div>
    </div>
  );
};
