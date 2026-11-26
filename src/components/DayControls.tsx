"use client";

import { type FilterKey, dayLabels } from "@/data/trip";

interface DayControlsProps {
  selected: FilterKey;
  onChange: (day: FilterKey) => void;
}

const keys: FilterKey[] = ["all", "sun", "mon", "tue"];

export default function DayControls({ selected, onChange }: DayControlsProps) {
  return (
    <div
      className="no-scrollbar flex gap-2 overflow-x-auto py-1"
      role="group"
      aria-label="여행 날짜 선택"
    >
      {keys.map((key) => (
        <button
          key={key}
          type="button"
          aria-pressed={selected === key}
          onClick={() => onChange(key)}
          className={`btn shrink-0 whitespace-nowrap text-[13px] ${
            selected === key ? "btn-solid" : "btn-line"
          }`}
        >
          {dayLabels[key]}
        </button>
      ))}
    </div>
  );
}
