"use client";

import { type DayKey, type FilterKey, legendLabels } from "@/data/trip";

interface LegendProps {
  selected: FilterKey;
}

const dayColors: Record<DayKey, string> = {
  sun: "border-day-sun text-day-sun",
  mon: "border-day-mon text-day-mon",
  tue: "border-day-tue text-day-tue",
};

export default function Legend({ selected }: LegendProps) {
  const days: DayKey[] = ["sun", "mon", "tue"];

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {days.map((day) => {
        const hidden =
          selected !== "all" && selected !== day;
        return (
          <span
            key={day}
            className={`flex items-center gap-2 text-[13px] font-semibold transition-opacity duration-300 ${
              dayColors[day]
            } ${hidden ? "opacity-20" : ""}`}
          >
            <span
              className={`inline-block w-5 border-t-[2.5px] border-dashed ${dayColors[day]}`}
            />
            {legendLabels[day]}
          </span>
        );
      })}
    </div>
  );
}
