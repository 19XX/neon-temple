"use client";

import React, { useState, useMemo } from "react";
import CountryTabs from "../components/CountryTabs";
import TypeTabs from "../components/TypeTabs";
import ArtistCard, { ArtistCardProps } from "../components/ArtistCard";
import { useRouter } from "next/navigation"; // Use next/navigation for App Router

// ArtistCardProps에 country, type 추가 (필터링용)
interface ArtistData extends ArtistCardProps {
  country: string;
  type: string;
}

// 더미 데이터 (추후 Firebase 연동)
const DUMMY_ARTISTS: ArtistData[] = [
  {
    id: "1",
    name: "DJ Alpha (KR)",
    genres: ["EDM", "House"],
    bio: "한국을 대표하는 EDM DJ. 강렬한 비트와 화려한 퍼포먼스로 무대를 장악합니다.",
    profileImage: "/assets/images/dj1.png",
    country: "KR",
    type: "DJ",
  },
  {
    id: "2",
    name: "Rapper Beta (KR)",
    genres: ["Hip-Hop", "Trap"],
    bio: "독보적인 플로우와 날카로운 가사로 한국 힙합씬의 주목을 받는 래퍼.",
    profileImage: "/assets/images/rapper1.png",
    country: "KR",
    type: "RAPPER",
  },
  {
    id: "3",
    name: "Singer Gamma (JP)",
    genres: ["J-Pop", "R&B"],
    bio: "감미로운 목소리와 뛰어난 가창력으로 일본 J-Pop 시장을 사로잡은 싱어.",
    profileImage: "/assets/images/character.gif", // 임시 이미지
    country: "JP",
    type: "SINGER",
  },
  {
    id: "5",
    name: "DJ Epsilon (KR)",
    genres: ["Techno", "Minimal"],
    bio: "섬세하고 깊이 있는 테크노 사운드로 국내외에서 활발히 활동 중인 DJ.",
    profileImage: "/assets/images/dj2.png",
    country: "KR",
    type: "DJ",
  },
  {
    id: "6",
    name: "Rapper Charlie (KR)",
    genres: ["K-Hip-Hop", "Boom Bap"],
    bio: "날카로운 랩 스킬과 독특한 음색으로 떠오르는 신예 한국 여자 래퍼.",
    profileImage: "/assets/images/rapper2.png",
    country: "KR",
    type: "RAPPER",
  },
];

export default function HomePage() {
  const [selectedCountry, setSelectedCountry] = useState("KR");
  const [selectedType, setSelectedType] = useState("ALL"); // 초기값 ALL (전체 타입)
  const router = useRouter();

  const filteredArtists = useMemo(() => {
    return DUMMY_ARTISTS.filter((artist) => {
      const countryMatch = artist.country === selectedCountry;
      const typeMatch = selectedType === "ALL" || artist.type === selectedType;
      return countryMatch && typeMatch;
    });
  }, [selectedCountry, selectedType]);

  const handleArtistClick = (id: string) => {
    router.push(`/artist/${id}`);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <CountryTabs value={selectedCountry} onChange={setSelectedCountry} />
      <TypeTabs value={selectedType} onChange={setSelectedType} className="mb-6" />

      {filteredArtists.length > 0 ? (
        <div className="w-full grid grid-cols-1 gap-0">
          {filteredArtists.map((artist) => (
            <ArtistCard
              key={artist.id}
              {...artist}
              onClick={() => handleArtistClick(artist.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-white/70 py-10">
          <p className="text-lg">해당 아티스트가 없습니다.</p>
          <p className="text-sm">다른 국가나 타입을 선택해보세요.</p>
        </div>
      )}
    </div>
  );
}
