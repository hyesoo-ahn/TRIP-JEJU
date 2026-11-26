"use client";

import { type DayKey, type FilterKey, dailyRoutes } from "@/data/trip";

interface RouteOrderProps {
  selected: FilterKey;
}

export default function RouteOrder({ selected }: RouteOrderProps) {
  if (selected === "all") {
    return (
      <div className="rounded-2xl border border-line bg-[var(--color-accent-soft)] px-5 py-4 text-[14px] text-sub">
        날짜를 선택하면 그날의 방문 순서가 표시돼요
      </div>
    );
  }

  const routes = dailyRoutes[selected as DayKey];

  return (
    <div className="rounded-2xl border border-line bg-soft px-5 py-4">
      <ol className="space-y-1">
        {routes.map((route, i) => (
          <li key={i} className="flex gap-3 text-[14px]">
            <span className="num shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent)] text-[11px] font-bold text-fg">
              {i + 1}
            </span>
            <span className="font-semibold pt-0.5">{route}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
