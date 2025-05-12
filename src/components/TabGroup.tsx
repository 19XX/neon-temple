import React from "react";

interface TabOption {
  code: string;
  label: React.ReactNode; // 국가 이모지나 일반 텍스트 모두 수용
}

interface TabGroupProps {
  options: TabOption[];
  value: string;
  onChange: (code: string) => void;
  className?: string;
  size?: "small" | "medium" | "large"; // 크기 옵션
  ariaLabel?: string; // 접근성을 위한 레이블
}

export default function TabGroup({
  options,
  value,
  onChange,
  className = "",
  size = "medium",
  ariaLabel = "탭 그룹"
}: TabGroupProps) {
  
  // 크기에 따른 스타일 설정
  const sizeClasses = {
    small: "text-sm px-3 py-1",
    medium: "text-base px-4 py-1.5",
    large: "text-3xl px-4 py-2"
  };
  
  const gapClass = size === "large" ? "gap-4" : "gap-2";
  const marginClass = size === "large" ? "my-4" : "my-2";
  
  return (
    <nav 
      className={`flex flex-row justify-center ${gapClass} ${marginClass} ${className}`} 
      aria-label={ariaLabel}
    >
      {options.map((option) => (
        <button
          key={option.code}
          type="button"
          className={`${sizeClasses[size]} rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-point-purple font-semibold
            ${value === option.code 
              ? "bg-point-purple text-white shadow-lg transform scale-105" 
              : "bg-black/80 text-white/70 hover:bg-point-purple/60 hover:text-white/90"}`}
          aria-pressed={value === option.code}
          onClick={() => onChange(option.code)}
        >
          {option.label}
        </button>
      ))}
    </nav>
  );
} 