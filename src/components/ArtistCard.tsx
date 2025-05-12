import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';

export interface ArtistCardProps {
  id: string;
  name: string;
  genres: string[];
  bio: string;
  profileImage: string;
  onClick?: () => void;
}

// 카드 애니메이션 Variants 정의
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ArtistCard: React.FC<ArtistCardProps> = ({ id, name, genres, bio, profileImage, onClick }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className="flex items-center w-full bg-black/60 hover:bg-point-purple/20 transition-all duration-300 cursor-pointer border-b border-white/20 p-4 relative"
      onClick={onClick}
      aria-label={`${name} 아티스트 상세보기`}
    >
      {/* 좌측 하이라이트 바 (포인트 컬러) */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-point-purple opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex-shrink-0">
        <Image
          src={profileImage}
          alt={`${name} 프로필 이미지`}
          width={64}
          height={64}
          className="rounded-lg object-cover bg-white/10 shadow-md hover:shadow-point-purple/20 transition-shadow duration-300"
        />
      </div>
      <div className="flex-1 text-left ml-4">
        <div className="font-bold text-lg text-white mb-1 truncate">{name}</div>
        <div className="text-xs text-point-purple font-semibold mb-1 truncate">{genres.join(", ")}</div>
        <div className="text-xs text-white/80 line-clamp-2">{bio}</div>
      </div>
    </motion.div>
  );
}

export default ArtistCard; 