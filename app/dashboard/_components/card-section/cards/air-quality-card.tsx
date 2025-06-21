import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const AirQualityCard = () => {
  return (
    <div className="flex-1 bg-white rounded-lg p-4 border border-gray-200 flex flex-col gap-4">
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">Air Quality</p>
        <Badge className="bg-green-200 hover:bg-green-200 text-green-700 rounded-full">
          Good
        </Badge>
      </div>
      <div>
        <div className="flex items-end gap-1">
          <h1 className="text-4xl font-semibold">42</h1>
          <span className="text-gray-500">AQI</span>
        </div>
        <p className="text-sm">Air quality is considered satisfactory.</p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Progress progressColor="bg-green-500" value={42} />
        <div className="flex w-full text-sm font-medium">
          <div className="flex-1 flex justify-center">
            <div className="flex flex-col items-center">
              <p className="text-green-600">0-50</p>
              <p className="text-gray-500">Healthy</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex flex-col items-center">
              <p className="text-yellow-500">51-100</p>
              <p className="text-gray-500">Moderate</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex flex-col items-center">
              <p className="text-red-600">101+</p>
              <p className="text-gray-500">Unhealthy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
