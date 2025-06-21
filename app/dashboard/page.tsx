import { InfoCardSection } from "./_components/card-section/info-card-section";
import { LocationHeader } from "./_components/location-header";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <LocationHeader />
      <InfoCardSection />
    </div>
  );
}
