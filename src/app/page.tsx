"use client";

import { useState, useCallback } from "react";
import { type FilterKey } from "@/data/trip";
import Header from "@/components/Header";
import DayControls from "@/components/DayControls";
import Legend from "@/components/Legend";
import JejuMap from "@/components/JejuMap";
import RouteOrder from "@/components/RouteOrder";
import PlaceGrid from "@/components/PlaceGrid";

export default function Home() {
  const [selected, setSelected] = useState<FilterKey>("all");

  const handlePlaceClick = useCallback((id: number) => {
    const el = document.getElementById(`place-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("ring-2", "ring-fg");
      setTimeout(() => el.classList.remove("ring-2", "ring-fg"), 1500);
    }
  }, []);

  return (
    <main className="frame pb-20">
      <div className="pt-8 lg:pt-12">
        <Header />
      </div>

      <div className="mt-8 flex flex-col gap-6">
        {/* Controls */}
        <div className="flex flex-col gap-4">
          <DayControls selected={selected} onChange={setSelected} />
          <Legend selected={selected} />
        </div>

        {/* Map */}
        <JejuMap selected={selected} onPlaceClick={handlePlaceClick} />

        {/* Route order */}
        <RouteOrder selected={selected} />

        {/* Note */}
        <div className="rounded-2xl bg-soft border border-line px-5 py-4 text-[13px] text-mute leading-relaxed">
          마커를 누르면 아래 방문지로 이동해요. 해안선은 개략 위치이며, 점선은
          방문 순서를 이은 선이에요. 실제 차량 경로는 각 장소의 네이버 지도에서
          확인하세요.
        </div>

        {/* Place cards */}
        <PlaceGrid selected={selected} />
      </div>
    </main>
  );
}
