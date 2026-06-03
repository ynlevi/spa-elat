import React from "react";
import Image from "next/image";

interface Treatment {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: string;
  imageUrl: string; // נתיב לתמונה בתוך תיקיית public/images/
  imageAlt: string;
}

const treatmentsData: Treatment[] = [
  {
    id: 1,
    title: "עיסוי שוודי קלאסי",
    description:
      "עיסוי הוליסטי עמוק להפגת מתחים, שיפור זרימת הדם והרגעת הגוף והנפש באווירה עוטפת.",
    duration: "60 דקות",
    price: "₪280",
    imageUrl: "/images/swedish-massage.jpg",
    imageAlt: "עיסוי שוודי קלאסי מפנק עם שמנים ארומטיים בספא",
  },
  {
    id: 2,
    title: "עיסוי רקמות עמוק",
    description:
      "ממוקד לשחרור שרירים תפוסים וכאבים כרוניים. מתאים במיוחד לנשים פעילות ולשחרור לחצים.",
    duration: "60 דקות / 90 דקות",
    price: "₪320 / ₪420",
    imageUrl: "/images/deep-tissue.jpg",
    imageAlt: "טיפול עיסוי רקמות עמוק וממוקד לשחרור שרירים",
  },
  {
    id: 3,
    title: "טיפול אבנים חמות",
    description:
      "שילוב של חום עמוק מאבני בזלת וטכניקות עיסוי מתקדמות לאיזון אנרגטי מושלם והרפיה מוחלטת.",
    duration: "75 דקות",
    price: "₪380",
    imageUrl: "/images/hot-stones.jpg",
    imageAlt: "חלוקי נחל שחורים ואבני בזלת חמות על גב במהלך טיפול ספא",
  },
  {
    id: 4,
    title: "פילינג גוף ומסיכת הזנה",
    description:
      "טיפול התחדשות הכולל קילוף עדין של תאי עור מתים בעזרת מלחים ארומטיים ומסיכת לחות עשירה.",
    duration: "50 דקות",
    price: "₪260",
    imageUrl: "/images/body-scrub.jpg",
    imageAlt: "טיפול פילינג גוף מחדש ומזין עם מלחים ארומטיים",
  },
];

export default function Treatments() {
  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] text-[#4A3E3D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* כותרת הסקשיין */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-widest text-[#A39281] font-bold block mb-3">
            THE MENU
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide mb-4">
            תפריט הטיפולים שלנו
          </h2>
          <p className="text-gray-600 font-light">
            כל הטיפולים מבוצעים במרחב נשי, בטוח ואינטימי, תוך שימוש בשמנים
            אורגניים איכותיים ובהתאמה מדויקת לצרכי הגוף שלך.
          </p>
        </div>

        {/* גריד של הטיפולים עם תמונות */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatmentsData.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-2xl shadow-sm border border-neutral-100 flex flex-col justify-between overflow-hidden hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* מיקום לתמונה */}
                <div className="relative w-full h-48 bg-neutral-100 overflow-hidden">
                  <Image
                    src={treatment.imageUrl}
                    alt={treatment.imageAlt}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={treatment.id <= 3} // טעינה מהירה יותר לשורה הראשונה
                  />
                </div>

                {/* תוכן הטקסט */}
                <div className="p-6">
                  {/* כותרת ומחיר */}
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <h3 className="font-bold text-lg text-[#4A3E3D] leading-tight">
                      {treatment.title}
                    </h3>
                    <span className="font-extrabold text-[#A78BFA] whitespace-nowrap">
                      {treatment.price}
                    </span>
                  </div>

                  {/* תיאור קצרצר */}
                  <p className="text-gray-500 text-sm font-light leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              </div>

              {/* משך זמן הטיפול */}
              <div className="mx-6 mb-6 flex items-center gap-1.5 text-xs text-[#A39281] font-medium uppercase tracking-wider border-t border-neutral-50 pt-3">
                <svg
                  className="w-4 h-4 opacity-70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{treatment.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
