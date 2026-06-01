import React from "react";
import Image from "next/image";
import { MapPin, ShieldCheck } from "lucide-react";

interface HeroProps {
  ctaLink: string;
}

export default function Hero({ ctaLink }: HeroProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center text-center lg:text-right">
      <div className="w-full rounded-2xl overflow-hidden shadow-xl aspect-[16/9] lg:aspect-[6/4] bg-[#EADFC9] relative group order-1 lg:order-2 max-w-5xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-t from-[#4A3E3D]/30 to-transparent z-20 pointer-events-none" />

        <Image
          src="/hero-image.jpg"
          alt="סטודיו בוטיק דזרט רוז אילת"
          fill
          priority
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-w-1024px) 100vw, 50vw"
        />
      </div>

      {/* קונטיינר הטקסט - מופיע מתחת לתמונה בנייד, מימין ב-lg */}
      <div className="max-w-2xl mx-auto lg:mx-0 order-2 lg:order-1 flex flex-col items-center lg:items-start">
        {/* הבלון המתוקן: רקע לבן ב-50% שקיפות שיוצר גוון בהיר, רך ויוקרתי מעל הקרם של האתר */}
        <span className="inline-block text-[13px] uppercase tracking-widest text-[#D4AA04] font-extrabold bg-white/50 px-3 py-1.5 rounded-full mb-6 shadow-sm border border-white/20">
          קליניקת בוטיק לנשים בלבד
        </span>

        {/* HERO HEADLINE */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#D4AA04] mb-6 leading-tight">
          החופש האמיתי שלך באילת מתחיל{" "}
          <span className="text-[#A78BFA]">כאן.</span>
        </h1>

        {/* HERO SUB-HEADLINE */}
        <p className="text-lg text-[#7A6B68] font-light mb-8 leading-relaxed">
          הידיים הכי מקצועיות באילת, השמנים הכי איכותיים, השקט שחיפשת. מקום
          שכולו רוך, נשיות ורוגע.
        </p>

        {/* MAIN CTA BUTTON */}
        <div className="w-full flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#A78BFA] hover:bg-[#9067FA] text-white font-medium text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-md shadow-[#A78BFA]/30 transform hover:-translate-y-0.5 text-center"
          >
            לזימון תור מהיר
          </a>
        </div>

        {/* אלמנטים של ביטחון ומיקום */}
        {/* <div className="mt-6 flex justify-center lg:justify-start items-center gap-6 text-xs text-[#928380]">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-[#C5A880]" /> מרחב נשי ובטוח
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-[#C5A880]" /> חניה בשפע בכניסה
          </span>
        </div> */}
      </div>
    </section>
  );
}
