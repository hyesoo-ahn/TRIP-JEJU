"use client";

import {
  type DayKey,
  type FilterKey,
  dailyStops,
  places,
  getRoutePoints,
} from "@/data/trip";

interface JejuMapProps {
  selected: FilterKey;
  onPlaceClick: (id: number) => void;
}

const routeColors: Record<DayKey, string> = {
  sun: "var(--color-day-sun)",
  mon: "var(--color-day-mon)",
  tue: "var(--color-day-tue)",
};

const days: DayKey[] = ["sun", "mon", "tue"];

export default function JejuMap({ selected, onPlaceClick }: JejuMapProps) {
  const isAll = selected === "all";
  const activeStops = isAll
    ? places.map((p) => p.id)
    : dailyStops[selected as DayKey];

  return (
    <div className="overflow-auto rounded-2xl border border-line bg-soft">
      <svg
        viewBox="0 0 960 560"
        className="block min-w-[680px] w-full h-auto"
        aria-label="제주도 여행 동선과 13개 방문지"
      >
        {/* Jeju island */}
        <path
          d={jejuOutline}
          fill="var(--bg)"
          stroke="var(--line)"
          strokeWidth="1.5"
        />

        {/* Hallasan mountain area */}
        <ellipse
          cx="478"
          cy="290"
          rx="60"
          ry="35"
          fill="none"
          stroke="var(--line)"
          strokeWidth="0.8"
          strokeDasharray="3 3"
          opacity="0.5"
        />
        <text
          x="478"
          y="288"
          textAnchor="middle"
          className="text-[16px]"
          fill="var(--mute)"
        >
          ⛰️
        </text>
        <text
          x="478"
          y="308"
          textAnchor="middle"
          className="text-[10px] font-semibold"
          fill="var(--mute)"
        >
          한라산
        </text>

        {/* Region labels */}
        <text
          x="540"
          y="130"
          textAnchor="middle"
          className="text-[11px]"
          fill="var(--mute)"
          letterSpacing="3"
        >
          제주시
        </text>
        <text
          x="520"
          y="400"
          textAnchor="middle"
          className="text-[11px]"
          fill="var(--mute)"
          letterSpacing="3"
        >
          서귀포시
        </text>

        {/* Udo island */}
        <ellipse
          cx="870"
          cy="195"
          rx="22"
          ry="13"
          fill="var(--bg)"
          stroke="var(--line)"
          strokeWidth="1"
        />
        <text
          x="870"
          y="199"
          textAnchor="middle"
          className="text-[9px]"
          fill="var(--mute)"
        >
          우도
        </text>

        {/* Seongsan Ilchulbong hint */}
        <circle
          cx="830"
          cy="215"
          r="6"
          fill="none"
          stroke="var(--line)"
          strokeWidth="0.8"
        />
        <text
          x="830"
          y="232"
          textAnchor="middle"
          className="text-[8px]"
          fill="var(--mute)"
        >
          성산
        </text>

        {/* Route lines */}
        {days.map((day) => {
          const hidden = !isAll && selected !== day;
          return (
            <polyline
              key={day}
              points={getRoutePoints(day)}
              fill="none"
              stroke={routeColors[day]}
              strokeWidth="2.5"
              strokeDasharray="6 5"
              opacity={hidden ? 0.08 : 0.75}
              style={{
                transition: "opacity 400ms cubic-bezier(0.2,0.7,0.1,1)",
              }}
            />
          );
        })}

        {/* Place markers */}
        {places.map((place) => {
          const isActive = activeStops.includes(place.id);
          const [cx, cy] = place.coords;
          const [dx, dy] = place.labelOffset;

          return (
            <g
              key={place.id}
              onClick={() => onPlaceClick(place.id)}
              className="cursor-pointer"
              style={{
                opacity: isActive ? 1 : 0.15,
                transition: "opacity 400ms cubic-bezier(0.2,0.7,0.1,1)",
              }}
            >
              {/* Connector line */}
              <line
                x1={cx}
                y1={cy}
                x2={cx + dx}
                y2={cy + dy}
                stroke="var(--mute)"
                strokeWidth="0.8"
              />

              {/* Marker circle */}
              <circle
                cx={cx}
                cy={cy}
                r="12"
                fill="var(--color-accent)"
                stroke="var(--bg)"
                strokeWidth="2.5"
              />

              {/* Number */}
              <text
                x={cx}
                y={cy + 0.5}
                textAnchor="middle"
                dominantBaseline="central"
                fill="var(--fg)"
                className="text-[9px] font-extrabold pointer-events-none"
              >
                {place.id}
              </text>

              {/* Label */}
              <text
                x={cx + dx}
                y={cy + dy}
                textAnchor={place.labelAnchor}
                fill="var(--fg)"
                className="text-[11px] font-bold pointer-events-none"
                paintOrder="stroke"
                stroke="var(--soft)"
                strokeWidth="4"
                strokeLinejoin="round"
              >
                {place.name.length > 10
                  ? place.name.slice(0, 10)
                  : place.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

const jejuOutline = `
M 95,370
C 90,355 85,340 88,318
C 91,300 100,280 115,258
C 128,238 142,228 160,220
C 172,214 185,200 198,188
C 212,178 225,165 240,158
C 258,150 275,142 295,135
C 318,126 340,120 362,118
C 380,116 395,110 415,105
C 432,100 450,95 468,88
C 485,82 502,78 520,76
C 542,70 562,62 585,56
C 608,50 630,48 652,44
C 672,42 692,46 715,44
C 738,42 758,48 778,56
C 798,65 812,76 828,90
C 845,102 855,115 862,130
C 870,145 876,158 878,168
C 882,178 888,190 886,200
C 882,215 870,228 860,242
C 854,255 848,268 838,280
C 826,292 812,305 798,318
C 782,332 766,345 750,358
C 734,370 718,380 700,390
C 682,398 665,404 645,408
C 625,410 605,410 588,412
C 570,418 555,425 540,432
C 526,438 512,442 498,444
C 480,446 462,450 445,454
C 428,456 412,454 395,450
C 378,448 362,446 345,444
C 328,442 312,445 295,448
C 275,452 258,456 242,462
C 225,470 215,478 200,484
C 188,486 178,478 168,468
C 158,456 148,445 138,434
C 125,424 115,415 105,405
C 95,392 92,382 95,370
Z
`.trim();
