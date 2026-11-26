import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "제주 2박 3일 동선 지도",
  description:
    "2026년 12월 20~22일, 중문 제주신라호텔 2박 기준 제주 여행 동선과 14개 방문지 안내",
  openGraph: {
    title: "제주 2박 3일 동선 지도 🍊",
    description:
      "2026년 12월 20~22일 · 중문 제주신라호텔 2박 · 14개 방문지 동선",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "제주 2박 3일 동선 지도 🍊",
    description:
      "2026년 12월 20~22일 · 중문 제주신라호텔 2박 · 14개 방문지 동선",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/sunn-us/SUITE/fonts/variable/woff2/SUITE-Variable.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/toss/tossface/dist/tossface.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
