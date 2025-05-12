import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'; // 예시 SNS 아이콘
import { RiKakaoTalkFill } from 'react-icons/ri'; // Import KakaoTalk icon

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col items-center px-4">
      {/* 회사 소개 섹션 */}
      <section className="w-full max-w-md mb-12 text-center">
        <Image
          src="/assets/images/character.gif" // 대표 이미지 (임시)
          alt="Neon Temple Character"
          width={120}
          height={120}
          className="mx-auto mb-6 rounded-full bg-point-purple/20 p-2"
        />
        <h2 className="text-2xl font-semibold text-point-purple mb-4">네온템플에 오신 것을 환영합니다!</h2>
        <p className="text-base text-white/80 leading-relaxed mb-4">
          NEON TEMPLE은 국경을 넘어 아시아 전역의 독창적이고 재능 있는 아티스트들을 연결하는 에이전시입니다.
          DJ, 래퍼, 가수 등 다양한 분야의 아티스트들과 함께 특별한 경험을 만들어갑니다.
        </p>
        <p className="text-base text-white/80 leading-relaxed">
          우리는 단순한 연결을 넘어, 아티스트와 클라이언트 모두에게 최적의 기회를 제공하고 성공적인 이벤트를 위해 노력합니다.
        </p>
      </section>

      {/* 공연 기획 문의 섹션 */}
      <section className="w-full max-w-md mb-12 p-6 bg-gradient-to-br from-point-purple/30 to-black border border-point-purple rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">행사/공연 전체 기획 문의</h2>
        <p className="text-base text-white/80 leading-relaxed mb-6">
          아티스트 섭외뿐만 아니라, 행사 컨셉 기획부터 현장 실행까지, Neon Temple이 성공적인 이벤트를 위한 모든 것을 책임지고 만들어 드립니다.
          페스티벌, 브랜드 파티, 기업 행사 등 어떤 형태의 이벤트든 최고의 경험을 선사합니다.
        </p>
        <a
          href="YOUR_KAKAO_CHANNEL_LINK" // Replace with your actual KakaoTalk channel link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#FEE500] text-black text-lg font-bold shadow-lg 
                     hover:bg-yellow-400 transition-colors duration-200 cursor-pointer w-full max-w-xs mx-auto gap-2"
        >
          <RiKakaoTalkFill size={24} />
          카카오톡으로 문의하기
        </a>
      </section>

      {/* 연락처 및 SNS 섹션 */}
      <section className="w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
        <p className="text-base text-white/80 mb-2">Email: <a href="mailto:contact@neontemple.com" className="text-point-purple hover:underline">contact@neontemple.com</a></p>
        <p className="text-base text-white/80 mb-6">Phone: <a href="tel:+82-2-1234-5678" className="text-point-purple hover:underline">+82-2-1234-5678</a> (임시번호)</p>

        <div className="flex flex-row justify-center gap-6">
          <a href="https://instagram.com/neontemple" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/70 hover:text-point-purple transition-colors">
            <FaInstagram size={32} />
          </a>
          <a href="https://twitter.com/neontemple" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white/70 hover:text-point-purple transition-colors">
            <FaTwitter size={32} />
          </a>
          <a href="https://youtube.com/neontemple" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/70 hover:text-point-purple transition-colors">
            <FaYoutube size={32} />
          </a>
          {/* 필요에 따라 다른 SNS 아이콘 추가 */}
        </div>
      </section>

      {/* 하단 여백 추가 */}
      <div className="h-48" />

    </div>
  );
} 