export type DayKey = "sun" | "mon" | "tue";
export type FilterKey = DayKey | "all";

export interface Place {
  id: number;
  name: string;
  desc: string;
  address: string;
  naverUrl: string;
  /** SVG coordinates [x, y] */
  coords: [number, number];
  /** Label offset from marker [dx, dy] */
  labelOffset: [number, number];
  labelAnchor: "start" | "end";
  days: DayKey[];
}

export const places: Place[] = [
  {
    id: 1,
    name: "제주국제공항",
    desc: "일 17:50 도착 · 화 20:45 출발",
    address: "제주시 공항로 2",
    naverUrl:
      "https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%EA%B5%AD%EC%A0%9C%EA%B3%B5%ED%95%AD",
    coords: [480, 108],
    labelOffset: [14, -14],
    labelAnchor: "start",
    days: ["sun", "tue"],
  },
  {
    id: 2,
    name: "명호돗갈비 중문본점",
    desc: "일 19:45~20:00 도착 목표 · 라스트오더 20:30",
    address: "서귀포시 안덕면 대평로 51, 1층",
    naverUrl:
      "https://map.naver.com/p/search/%EB%AA%85%ED%98%B8%EB%8F%97%EA%B0%88%EB%B9%84%20%EC%A4%91%EB%AC%B8%EB%B3%B8%EC%A0%90",
    coords: [332, 440],
    labelOffset: [-14, -28],
    labelAnchor: "end",
    days: ["sun"],
  },
  {
    id: 3,
    name: "제주신라호텔",
    desc: "일 체크인 · 월 조식, 패밀리 풀, 짬뽕 · 화 체크아웃",
    address: "서귀포시 중문관광로72번길 75",
    naverUrl:
      "https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%EC%8B%A0%EB%9D%BC%ED%98%B8%ED%85%94",
    coords: [372, 432],
    labelOffset: [-10, -30],
    labelAnchor: "end",
    days: ["sun", "mon", "tue"],
  },
  {
    id: 4,
    name: "소랑아시",
    desc: "월 12:00 중문 소품샵 · 제주 풍경 핸드메이드 소품",
    address: "서귀포시 중문관광로 27, 1층",
    naverUrl:
      "https://map.naver.com/p/search/%EC%86%8C%EB%9E%91%EC%95%84%EC%8B%9C%20%EC%A4%91%EB%AC%B8",
    coords: [390, 440],
    labelOffset: [14, 14],
    labelAnchor: "start",
    days: ["mon"],
  },
  {
    id: 5,
    name: "백한철꽈배기 & 식빵",
    desc: "월 12:45~13:00 포장 목표 · 소진 시 생략",
    address: "서귀포시 남원읍 남한로21번길 56",
    naverUrl:
      "https://map.naver.com/p/search/%EB%B0%B1%ED%95%9C%EC%B2%A0%20%EA%BD%88%EB%B0%B0%EA%B8%B0%20%EC%95%A4%20%EC%8B%9D%EB%B9%B5",
    coords: [680, 392],
    labelOffset: [14, -14],
    labelAnchor: "start",
    days: ["mon"],
  },
  {
    id: 6,
    name: "오는정김밥",
    desc: "월 14:35 방문 예약 · 화 09:00 픽업 목표",
    address: "서귀포시 동문동로 2",
    naverUrl:
      "https://map.naver.com/p/search/%EC%98%A4%EB%8A%94%EC%A0%95%EA%B9%80%EB%B0%A5",
    coords: [538, 428],
    labelOffset: [14, 24],
    labelAnchor: "start",
    days: ["mon", "tue"],
  },
  {
    id: 7,
    name: "봉주르마담",
    desc: "월 15:10 빵 포장",
    address: "서귀포시 대청로 33, 오름빌딩1차 103호",
    naverUrl:
      "https://map.naver.com/p/search/%EB%B4%89%EC%A3%BC%EB%A5%B4%EB%A7%88%EB%8B%B4%20%EC%84%9C%EA%B7%80%ED%8F%AC",
    coords: [472, 424],
    labelOffset: [-14, 30],
    labelAnchor: "end",
    days: ["mon"],
  },
  {
    id: 8,
    name: "전원일기 본점",
    desc: "월 17:45 저녁",
    address: "서귀포시 이어도로 1065",
    naverUrl:
      "https://map.naver.com/p/search/%EC%A0%84%EC%9B%90%EC%9D%BC%EA%B8%B0%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EA%B7%80%ED%8F%AC",
    coords: [496, 432],
    labelOffset: [14, -18],
    labelAnchor: "start",
    days: ["mon"],
  },
  {
    id: 9,
    name: "카페루시아 본점",
    desc: "화 11:15 바다봐줘야지",
    address: "서귀포시 안덕면 난드르로 49-17",
    naverUrl:
      "https://map.naver.com/p/search/%EC%B9%B4%ED%8E%98%EB%A3%A8%EC%8B%9C%EC%95%84%20%EB%B3%B8%EC%A0%90%20%EC%A0%9C%EC%A3%BC",
    coords: [324, 448],
    labelOffset: [14, 20],
    labelAnchor: "start",
    days: ["tue"],
  },
  {
    id: 10,
    name: "춘미향 제주산방산점",
    desc: "화 12:20 점심",
    address: "서귀포시 산방로 378",
    naverUrl:
      "https://map.naver.com/p/search/%EC%B6%98%EB%AF%B8%ED%96%A5%20%EC%A0%9C%EC%A3%BC%EC%82%B0%EB%B0%A9%EC%82%B0%EC%A0%90",
    coords: [258, 446],
    labelOffset: [-14, 22],
    labelAnchor: "end",
    days: ["tue"],
  },
  {
    id: 11,
    name: "9.81파크 제주",
    desc: "화 13:50 바람맞으면서 루지타줘야됨..",
    address: "제주시 애월읍 천덕로 880-24",
    naverUrl:
      "https://map.naver.com/p/search/9.81%ED%8C%8C%ED%81%AC%20%EC%A0%9C%EC%A3%BC",
    coords: [318, 254],
    labelOffset: [14, 0],
    labelAnchor: "start",
    days: ["tue"],
  },
  {
    id: 12,
    name: "애월 한담해안산책로",
    desc: "화 16:05 바다 산책",
    address: "제주시 애월읍 곽지리 1359 일대",
    naverUrl:
      "https://map.naver.com/p/search/%ED%95%9C%EB%8B%B4%ED%95%B4%EC%95%88%EC%82%B0%EC%B1%85%EB%A1%9C",
    coords: [262, 168],
    labelOffset: [-14, -10],
    labelAnchor: "end",
    days: ["tue"],
  },
  {
    id: 13,
    name: "귤귤스토어 도두점",
    desc: "화 17:20 미피 굿즈 쇼핑",
    address: "제주시 서해안로 238",
    naverUrl:
      "https://map.naver.com/p/search/%EA%B7%A4%EA%B7%A4%EC%8A%A4%ED%86%A0%EC%96%B4%20%EB%8F%84%EB%91%90%EC%A0%90",
    coords: [446, 108],
    labelOffset: [-14, -16],
    labelAnchor: "end",
    days: ["tue"],
  },
  {
    id: 14,
    name: "더리트리브",
    desc: "월 16:00~17:00 카페 · 월요일 영업",
    address: "서귀포시 안덕면 화순로 67",
    naverUrl:
      "https://map.naver.com/p/search/%EB%8D%94%EB%A6%AC%ED%8A%B8%EB%A6%AC%EB%B8%8C",
    coords: [296, 432],
    labelOffset: [-14, -28],
    labelAnchor: "end",
    days: ["mon"],
  },
];

export interface RouteItem {
  text: string;
  placeId?: number;
}

export const dailyRoutes: Record<DayKey, RouteItem[]> = {
  sun: [
    { text: "16:35 김포 출발 → 17:50 제주 도착", placeId: 1 },
    { text: "18:15~19:00 렌터카 인수" },
    { text: "19:45~20:00 명호돗갈비 중문본점 도착 목표", placeId: 2 },
    { text: "21:00~21:20 제주신라호텔 체크인하고 시간되면 수영장", placeId: 3 },
  ],
  mon: [
    { text: "08:00 조식 → 패밀리 풀 → 수영장 짬뽕", placeId: 3 },
    { text: "12:00~12:30 소랑아시 소품 구경", placeId: 4 },
    { text: "12:45~13:00 백한철꽈배기 포장", placeId: 5 },
    { text: "14:35 오는정김밥 예약", placeId: 6 },
    { text: "15:10 봉주르마담 포장", placeId: 7 },
    { text: "16:00~17:00 더리트리브", placeId: 14 },
    { text: "17:45 전원일기 저녁", placeId: 8 },
    { text: "19:00 전후 호텔 복귀", placeId: 3 },
  ],
  tue: [
    { text: "08:30 호텔 출발 → 09:00 오는정김밥 픽업 → 호텔 김밥 먹고 11:00 전 체크아웃", placeId: 3 },
    { text: "11:15~11:55 카페루시아", placeId: 9 },
    { text: "12:20~13:10 춘미향 갈치조림이랑 미역국 존맛탱", placeId: 10 },
    { text: "13:50~15:40 9.81파크", placeId: 11 },
    { text: "16:05~16:40 애월 한담산책로 찍먹하기", placeId: 12 },
    { text: "17:20~17:55 귤귤스토어 · 미피", placeId: 13 },
    { text: "18:20~18:40 렌터카 반납 → 20:45 제주 출발 → 22:00 김포", placeId: 1 },
  ],
};

export const dailyStops: Record<DayKey, number[]> = {
  sun: [1, 2, 3],
  mon: [3, 4, 5, 6, 7, 14, 8],
  tue: [3, 6, 9, 10, 11, 12, 13, 1],
};

/** Route polyline points per day (connecting stop coords in order) */
export function getRoutePoints(day: DayKey): string {
  const stops = dailyStops[day];
  return stops
    .map((id) => {
      const place = places.find((p) => p.id === id)!;
      return `${place.coords[0]},${place.coords[1]}`;
    })
    .join(" ");
}

export const dayLabels: Record<FilterKey, string> = {
  all: "전체",
  sun: "1일차 · 12/20 일",
  mon: "2일차 · 12/21 월",
  tue: "3일차 · 12/22 화",
};

export const legendLabels: Record<DayKey, string> = {
  sun: "20일 공항 → 중문",
  mon: "21일 중문 · 남원 · 서귀포 · 화순",
  tue: "22일 중문 → 산방산 → 애월 → 공항",
};
