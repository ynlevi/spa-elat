import React from "react";
import Image from "next/image";

interface HeaderProps {
  ctaLink: string;
}

export default function Header({ ctaLink }: HeaderProps) {
  return (
    <header
      className="border-b border-[#EADFC9] backdrop-blur-md sticky top-0 z-50 px-4 py-3 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* אזור הלוגו - צד ימין */}
        <div className="flex items-center gap-3">
          {/* <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 flex items-center justify-center overflow-visible">
            <Image
              src="/logo-website-v.png"
              alt="Desert Rose Boutique Spa Logo"
              fill
              priority
              className="object-contain scale-150 sm:scale-135" // ה-scale מגדיל את האיור בתוך השטח שלו
              sizes="(max-w-768px) 70px, 90px"
            />
          </div> */}

          {/* שם המותג לצד הלוגו */}
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-medium tracking-wide text-[#C5A880] leading-none">
              DESERT ROSE
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#A39281] tracking-widest mt-1.5 uppercase">
              BOUTIQUE SPA & WELLNESS
            </span>
          </div>
        </div>

        {/* כפתור הנעה לפעולה (CTA) - צד שמאל */}
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#A78BFA] hover:bg-[#9067FA] text-white font-medium text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-300 shadow-sm shadow-[#A78BFA]/20 whitespace-nowrap"
        >
          לזימון תור מהיר
        </a>
      </div>
    </header>
  );
}
