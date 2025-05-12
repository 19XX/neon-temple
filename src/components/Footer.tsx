"use client";

import React from "react";
import Link from "next/link";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: '홈', icon: FaHome },
    { href: '/about', label: '소개', icon: FaInfoCircle },
    { href: '/contact', label: '문의', icon: FaEnvelope },
  ];

  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-black border-t border-white/10">
      <nav className="max-w-md mx-auto flex justify-around items-center h-16">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link key={href} href={href} className={`flex flex-col items-center justify-center w-1/3 h-full transition-colors duration-150 
                                                ${isActive ? 'text-point-purple' : 'text-white/60 hover:text-point-purple/80'}`}>
              <Icon size={22} />
              <span className={`mt-1 text-xs font-medium ${isActive ? 'font-bold' : ''}`}>{label}</span>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
} 