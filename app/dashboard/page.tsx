"use client";

import { useSearchParams } from "next/navigation";
import { InfoCardSection } from "./_components/card-section/info-card-section";
import { LocationHeader } from "./_components/location-header";
import { NearbyLocations } from "./_components/nearby-locations/nearby-locations";
import { useEffect } from "react";

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const area = searchParams.get("area") || "";

  return (
    <div className="flex flex-col gap-6">
      <LocationHeader area={area} />
      <InfoCardSection area={area} />
      <NearbyLocations area={area} />
    </div>
  );
}
