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
  const [focusedId, setFocusedId] = useState<number | null>(null);

  const handlePlaceClick = useCallback((id: number) => {
    const el = document.getElementById(`place-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("ring-2", "ring-fg");
      setTimeout(() => el.classList.remove("ring-2", "ring-fg"), 1500);
    }
  }, []);

  const handleCardFocus = useCallback((id: number) => {
    setFocusedId((prev) => (prev === id ? null : id));
    const map = document.getElementById("jeju-map");
    if (map) {
      map.scrollIntoView({ behavior: "smooth", block: "center" });
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
        <JejuMap
          selected={selected}
          onPlaceClick={handlePlaceClick}
          focusedId={focusedId}
        />

        {/* Route order */}
        <RouteOrder selected={selected} onFocus={handleCardFocus} />

        {/* Note */}
        <div className="rounded-2xl bg-soft border border-line px-5 py-4 text-[13px] text-mute leading-relaxed">
          마커를 누르면 아래 방문지로 이동해요. 번호를 누르면 지도에서 해당
          마커가 강조돼요.
        </div>

        {/* Place cards */}
        <PlaceGrid selected={selected} onFocus={handleCardFocus} />
      </div>
    </main>
  );
}
