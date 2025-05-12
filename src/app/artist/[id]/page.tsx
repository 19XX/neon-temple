"use client";

import React from "react";
import Image from "next/image";
import { useParams, notFound, useRouter } from "next/navigation";
import { FaTwitter, FaInstagram, FaYoutube, FaSoundcloud, FaSpotify, FaApple } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";

// 메인 페이지의 더미 데이터 임시로 가져오기 (추후 데이터 로딩 로직 개선)
// 주의: 실제 앱에서는 데이터 로딩 방식을 별도로 구현해야 합니다.
const DUMMY_ARTISTS = [
  {
    id: "1",
    name: "DJ Alpha (KR)",
    genres: ["EDM", "House"],
    bio: "한국을 대표하는 EDM DJ. 강렬한 비트와 화려한 퍼포먼스로 무대를 장악합니다. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profileImage: "/assets/images/dj1.png",
    country: "KR",
    type: "DJ",
    portfolioLinks: ["https://soundcloud.com/example", "https://youtube.com/example"],
    snsLinks: { twitter: "https://twitter.com/example", instagram: "https://instagram.com/example" },
  },
  {
    id: "2",
    name: "Rapper Beta (KR)",
    genres: ["Hip-Hop", "Trap"],
    bio: "독보적인 플로우와 날카로운 가사로 한국 힙합씬의 주목을 받는 래퍼. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    profileImage: "/assets/images/rapper1.png",
    country: "KR",
    type: "RAPPER",
    portfolioLinks: ["https://youtube.com/example2"],
    snsLinks: { instagram: "https://instagram.com/example2" },
  },
  {
    id: "3",
    name: "Singer Gamma (JP)",
    genres: ["J-Pop", "R&B"],
    bio: "감미로운 목소리와 뛰어난 가창력으로 일본 J-Pop 시장을 사로잡은 싱어. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    profileImage: "/assets/images/character.gif",
    country: "JP",
    type: "SINGER",
    portfolioLinks: [],
    snsLinks: { twitter: "https://twitter.com/example3" },
  },
  {
    id: "5",
    name: "DJ Epsilon (KR)",
    genres: ["Techno", "Minimal"],
    bio: "섬세하고 깊이 있는 테크노 사운드로 국내외에서 활발히 활동 중인 DJ. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    profileImage: "/assets/images/dj2.png",
    country: "KR",
    type: "DJ",
    portfolioLinks: [],
    snsLinks: { soundcloud: "https://soundcloud.com/example5" },
  },
  {
    id: "6",
    name: "Rapper Charlie (KR)",
    genres: ["K-Hip-Hop", "Boom Bap"],
    bio: "날카로운 랩 스킬과 독특한 음색으로 떠오르는 신예 한국 여자 래퍼. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    profileImage: "/assets/images/rapper2.png",
    country: "KR",
    type: "RAPPER",
    portfolioLinks: ["https://youtube.com/example6"],
    snsLinks: { instagram: "https://instagram.com/example6" },
  },
];

export default function ArtistDetailPage() {
  const params = useParams();
  const router = useRouter();
  const artistId = params.id as string;

  const artist = DUMMY_ARTISTS.find((a) => a.id === artistId);

  if (!artist) {
    notFound(); // 아티스트 없으면 404 페이지 표시
  }

  const handleContactClick = () => {
    // 특정 아티스트 선택 상태로 문의 페이지 이동 (선택 사항)
    router.push(`/contact?artist=${artistId}`);
  };

  return (
    <div className="w-full flex flex-col items-center pb-16 px-4">
      {/* 뒤로가기 버튼 */}
      <button
        type="button"
        onClick={() => router.back()}
        className="self-start mt-8 mb-4 text-sm text-white/70 hover:text-white transition-colors"
      >
        &lt; 뒤로가기
      </button>

      {/* 프로필 이미지 */}
      <div className="w-full aspect-square max-w-[200px] mb-6 relative overflow-hidden rounded-lg shadow-lg bg-white/10">
        <Image
          src={artist.profileImage}
          alt={`${artist.name} 프로필 이미지`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover"
        />
      </div>

      {/* 아티스트 정보 */}
      <div className="w-full text-center mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">{artist.name}</h1>
        <p className="text-base text-point-purple font-semibold mb-4">{artist.genres.join(" / ")}</p>
        <p className="text-sm text-white/80 leading-relaxed text-left whitespace-pre-line">{artist.bio}</p>
      </div>

      {/* 구분선 */}
      <div className="w-full h-px bg-white/20 my-6" />

      {/* 포트폴리오 링크 */}
      {artist.portfolioLinks && artist.portfolioLinks.length > 0 && (
        <div className="w-full mb-6">
          <h2 className="text-xl font-semibold text-white mb-3 text-center">포트폴리오</h2>
          <div className="flex flex-col gap-2">
            {artist.portfolioLinks.map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-black border border-white/20 rounded-lg px-4 py-2 text-sm text-point-purple hover:bg-point-purple/20 hover:border-point-purple transition-colors"
              >
                {link} {/* 간단히 링크 표시, 추후 아이콘/제목 등 개선 */}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* SNS 링크 */}
      {artist.snsLinks && Object.keys(artist.snsLinks).length > 0 && (
        <div className="w-full mb-6">
          <h2 className="text-xl font-semibold text-white mb-3 text-center">SNS</h2>
          <div className="flex flex-row justify-center gap-6">
            {Object.entries(artist.snsLinks).map(([platform, link]) => {
              // 플랫폼별 아이콘 매핑
              const getIcon = () => {
                switch(platform.toLowerCase()) {
                  case 'twitter': return <FaTwitter size={28} />;
                  case 'instagram': return <FaInstagram size={28} />;
                  case 'youtube': return <FaYoutube size={28} />;
                  case 'soundcloud': return <FaSoundcloud size={28} />;
                  case 'spotify': return <FaSpotify size={28} />;
                  case 'applemusic': return <SiApplemusic size={28} />;
                  default: return null;
                }
              };
              
              return (
                <a
                  key={platform}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-point-purple hover:text-white transition-colors"
                  aria-label={`${platform} 링크`}
                >
                  {getIcon()}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
} 