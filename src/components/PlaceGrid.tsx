"use client";

import { type DayKey, type FilterKey, dailyStops, places } from "@/data/trip";

interface PlaceGridProps {
  selected: FilterKey;
}

const placeEmoji: Record<number, string> = {
  1: "✈️",
  2: "🍚",
  3: "🏨",
  4: "🍚",
  5: "🍚",
  6: "🍚",
  7: "🍚",
  8: "☕",
  9: "🍚",
  10: "🎢",
  11: "🚶",
  12: "🛍️",
  13: "☕",
  14: "🛍️",
};

export default function PlaceGrid({ selected }: PlaceGridProps) {
  const isAll = selected === "all";
  const stops = isAll ? null : dailyStops[selected as DayKey];

  const visiblePlaces = isAll
    ? places
    : stops!
        .map((id) => places.find((p) => p.id === id)!)
        .filter(Boolean);

  return (
    <section
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
      aria-label="장소별 주소와 네이버 지도"
    >
      {visiblePlaces.map((place, i) => (
        <article
          key={place.id}
          id={`place-${place.id}`}
          className="card-lift rounded-2xl border border-line bg-bg p-5 scroll-mt-20"
          style={{
            animation: `fade-in 400ms var(--ease-out-edit) ${i * 50}ms both`,
          }}
        >
          <div className="mb-1 flex items-center gap-3">
            <span className="tossface inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-lg">
              {placeEmoji[place.id] ?? "📍"}
            </span>
            <div>
              <strong className="text-[15px] font-bold leading-snug">
                {place.name}
              </strong>
              <span className="num ml-2 text-[11px] font-bold text-mute">
                #{String(place.id).padStart(2, "0")}
              </span>
            </div>
          </div>
          <p className="mt-2 text-[13px] text-fg">{place.desc}</p>
          <p className="mt-1 text-[12px] text-mute">{place.address}</p>
          <a
            href={place.naverUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rule-link mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-sub"
          >
            <span className="tossface">🗺️</span> 네이버 지도
          </a>
        </article>
      ))}
    </section>
  );
}
