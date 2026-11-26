import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FFFDF7 0%, #FFF3CC 50%, #FFE699 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <span style={{ fontSize: "72px" }}>🍊</span>
          <span style={{ fontSize: "72px" }}>🏝️</span>
          <span style={{ fontSize: "72px" }}>✈️</span>
        </div>

        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#3D3528",
            letterSpacing: "-0.04em",
            lineHeight: 1.2,
            textAlign: "center",
          }}
        >
          제주 2박 3일
        </div>

        <div
          style={{
            fontSize: "48px",
            fontWeight: 800,
            color: "#FFB800",
            letterSpacing: "-0.03em",
            marginTop: "8px",
          }}
        >
          동선 지도
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "32px",
            fontSize: "24px",
            color: "#7A6F5F",
          }}
        >
          <span>2026.12.20 ~ 12.22</span>
          <span style={{ color: "#EDE5D3" }}>|</span>
          <span>제주신라호텔 2박</span>
          <span style={{ color: "#EDE5D3" }}>|</span>
          <span>14개 방문지</span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "40px",
          }}
        >
          {["☕", "🍚", "🏨", "🛍️", "🚶", "🎢"].map((emoji, i) => (
            <div
              key={i}
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
              }}
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
