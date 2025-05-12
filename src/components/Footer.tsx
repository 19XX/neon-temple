"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: '홈', iconSrc: '/assets/images/home_icon.png' },
    { href: '/about', label: '소개', iconSrc: '/assets/images/aboutus_icon.png' },
    { href: '/contact', label: '문의', iconSrc: '/assets/images/contact_icon.png' },
  ];

  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-black border-t border-white/10">
      <nav className="max-w-md mx-auto flex justify-around items-center h-16">
        {navItems.map(({ href, label, iconSrc }) => {
          const isActive = pathname === href;
          return (
            <Link key={href} href={href} className={`flex flex-col items-center justify-center w-1/3 h-full transition-colors duration-150 
                                                ${isActive ? 'text-point-purple' : 'text-white/60 hover:text-point-purple/80'}`}>
              <div className="relative w-8 h-8">
                <Image 
                  src={iconSrc} 
                  alt={label} 
                  fill
                  sizes="32px"
                  priority
                  className="object-contain"
                />
              </div>
              <span className={`mt-1 text-xs font-medium ${isActive ? 'font-bold' : ''}`}>{label}</span>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
} 