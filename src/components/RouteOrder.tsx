"use client";

import {
  type DayKey,
  type FilterKey,
  dailyRoutes,
  dailyStops,
} from "@/data/trip";

interface RouteOrderProps {
  selected: FilterKey;
  onFocus?: (id: number) => void;
}

export default function RouteOrder({ selected, onFocus }: RouteOrderProps) {
  if (selected === "all") {
    return (
      <div className="rounded-2xl border border-line bg-[var(--color-accent-soft)] px-5 py-4 text-[14px] text-sub">
        날짜를 선택하면 그날의 방문 순서가 표시돼요
      </div>
    );
  }

  const day = selected as DayKey;
  const routes = dailyRoutes[day];
  const stops = dailyStops[day];

  return (
    <div className="rounded-2xl border border-line bg-soft px-5 py-4">
      <ol className="space-y-1">
        {routes.map((route, i) => {
          const hasPlace = route.placeId != null;
          const stopIdx = hasPlace
            ? stops.indexOf(route.placeId!)
            : -1;
          const displayNum = stopIdx >= 0 ? stopIdx + 1 : null;

          return (
            <li
              key={i}
              className={`flex gap-3 text-[14px] ${
                hasPlace
                  ? "cursor-pointer rounded-lg px-2 py-1 -mx-2 transition-colors hover:bg-[var(--color-accent-soft)]"
                  : "px-2 py-1 -mx-2"
              }`}
              onClick={() => {
                if (hasPlace) onFocus?.(route.placeId!);
              }}
            >
              <span
                className={`num shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold ${
                  displayNum != null
                    ? "bg-[var(--color-accent)] text-fg"
                    : "bg-line text-mute"
                }`}
              >
                {displayNum ?? "·"}
              </span>
              <span
                className={`pt-0.5 ${hasPlace ? "font-semibold" : "text-mute"}`}
              >
                {route.text}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
