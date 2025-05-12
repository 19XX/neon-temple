import React from "react";
import TabGroup from "./TabGroup";

const TYPES = [
  { code: "ALL", label: "전체" },
  { code: "DJ", label: "DJ" },
  { code: "RAPPER", label: "래퍼" },
  { code: "SINGER", label: "가수" },
];

interface TypeTabsProps {
  value: string;
  onChange: (code: string) => void;
  className?: string;
}

export default function TypeTabs({ value, onChange, className = "" }: TypeTabsProps) {
  return (
    <TabGroup
      options={TYPES}
      value={value}
      onChange={onChange}
      className={className}
      size="medium"
      ariaLabel="타입별 탭"
    />
  );
} 