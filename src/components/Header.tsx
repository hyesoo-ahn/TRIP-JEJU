export default function Header() {
  return (
    <header className="pb-8 lg:pb-10">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-soft)] px-4 py-1.5">
        <span className="tossface text-lg">🍊</span>
        <span className="text-[13px] font-bold text-[var(--color-accent)] tracking-wide">
          Jeju Trip 2026
        </span>
      </div>
      <h1 className="t-display">
        제주 2박 3일
        <br />
        <span className="text-[var(--color-accent)]">동선 지도</span>
      </h1>
      <p className="mt-3 text-[15px] text-sub">
        2026년 12월 20일 일요일 ~ 22일 화요일 · 제주신라호텔 2박
      </p>
    </header>
  );
}
