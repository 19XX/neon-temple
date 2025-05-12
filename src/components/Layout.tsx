import Image from "next/image";
import React from "react";
import Link from "next/link";

// 헤더의 대략적인 높이
const HEADER_HEIGHT = "h-24"; // 6rem = 96px

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden"> {/* h-screen 및 overflow-hidden으로 전체 페이지 스크롤 방지 */}
      {/* 상단 고정 헤더 */}
      <header className={`${HEADER_HEIGHT} bg-black w-full`}>
        <div className="flex flex-row items-center justify-between max-w-md mx-auto px-4 h-full">
          <Link href="/">
            <Image
              src="/assets/images/pixel_logo.png"
              alt="Neon Temple 텍스트 로고"
              width={126}
              height={42}
              priority
              className="object-contain block cursor-pointer transition-all duration-200 hover:scale-105 hover:brightness-125 active:scale-95"
              style={{ display: 'block' }}
            />
          </Link>
          <Image
            src="/assets/images/character.gif"
            alt="픽셀 몬스터 로고"
            width={72}
            height={72}
            priority
            className="object-contain block -translate-y-2"
            style={{ display: 'block' }}
          />
        </div>
      </header>

      {/* 스크롤되는 본문 영역 (동적 뷰포트 높이 사용, 푸터 높이 고려 제거) */}
      <main className="h-[calc(100dvh_-_6rem)] overflow-y-auto">
        <div className="w-full max-w-md mx-auto px-4">
          {/* 상단 여백 추가 */}
          <div className="h-8"></div>
          {children}
          {/* 하단 여백은 각 페이지에 이미 추가되어 있음 */}
        </div>
      </main>
    </div>
  );
} 