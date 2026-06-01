import React from "react";

interface FooterProps {
  ctaLink: string;
}

export default function Footer({ ctaLink }: FooterProps) {
  return (
    <>
      {/* FINAL FOOTER CTA SECTION */}
      <section className="py-20 px-4 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#D4AA04] mb-4">
          הגיע הזמן לעצור.
        </h2>
        <p className="text-lg text-[#7A6B68] font-light max-w-xl mx-auto mb-8">
          אל תדחי את הזמן לעצמך. בחרי את השעה הנוחה לך ביומן הדיגיטלי ותיהני
          מחוויית רוגע משנה תודעה.
        </p>
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#A78BFA] hover:bg-[#9067FA] text-white font-medium text-lg px-10 py-5 rounded-full transition-all duration-300 shadow-md shadow-[#A78BFA]/30 transform hover:-translate-y-0.5"
        >
          לכניסה ליומן וקביעת תור
        </a>
        <p className="text-xs text-[#A39281] mt-4">
          הסליקה מאובטחת | אישור מיידי ישלח בוואטסאפ
        </p>
      </section>

      {/* ACTUAL FOOTER */}
      <footer className="bg-[#4A3E3D] text-[#EADFC9] text-xs py-8 px-4 text-center border-t border-[#5E4F4E]">
        <p>
          © {new Date().getFullYear()} Desert Rose Eilat. כל הזכויות שמורות
          ליהונתן לוי
        </p>
        <p className="text-[#A39281] mt-2 font-light">
          עיסויים מקצועיים ורפואיים לנשים בלבד באילת. בתשלום מראש בלבד.
        </p>
      </footer>
    </>
  );
}
