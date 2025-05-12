import React from "react";
import TabGroup from "./TabGroup";

const COUNTRIES = [
  { code: "KR", label: "🇰🇷" },
  { code: "JP", label: "🇯🇵" },
];

interface CountryTabsProps {
  value: string;
  onChange: (code: string) => void;
  className?: string;
}

export default function CountryTabs({ value, onChange, className = "" }: CountryTabsProps) {
  return (
    <TabGroup
      options={COUNTRIES}
      value={value}
      onChange={onChange}
      className={className}
      size="large"
      ariaLabel="국가별 탭"
    />
  );
} 