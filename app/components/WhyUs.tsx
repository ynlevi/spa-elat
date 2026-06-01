import React from "react";
import { Check, Clock, MapPin, Shield } from "lucide-react";

export default function WhyUs() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#D4AA04]">עיסוי עם נשמה.</h2>
        <p className="text-[#A39281] font-light mt-2">
          אנחנו פה בשביל מה שחשוב באמת.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="flex gap-3 items-start bg-white/40 p-5 rounded-xl border border-[#EADFC9]/60">
          <div className="p-2 bg-[#EADFC9]/50 rounded-lg text-[#C5A880] shrink-0">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium text-[#4A3E3D]">לנשים בלבד</h3>
            <p className="text-sm text-[#7A6B68] font-light mt-1">
              מרחב בטוח, אינטימי ומזמין שבו את יכולה להרגיש הכי בנוח בעולם.
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-start bg-white/40 p-5 rounded-xl border border-[#EADFC9]/60">
          <div className="p-2 bg-[#EADFC9]/50 rounded-lg text-[#C5A880] shrink-0">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium text-[#4A3E3D]">טיפול אישי ומדוייק</h3>
            <p className="text-sm text-[#7A6B68] font-light mt-1">
              לפני כל עיסוי נערך אבחון מהיר כדי להתאים את עוצמת הלחיצות והמוקדים
              בגוף בדיוק למה שאת צריכה כרגע.
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-start bg-white/40 p-5 rounded-xl border border-[#EADFC9]/60">
          <div className="p-2 bg-[#EADFC9]/50 rounded-lg text-[#C5A880] shrink-0">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium text-[#4A3E3D]">מחיר הוגן ושפוי</h3>
            <p className="text-sm text-[#7A6B68] font-light mt-1">
              חוויית ספא ברמה הגבוהה ביותר, מבלי לקרוע את הכיס ומבלי לשלם מחירים
              מופקעים של בתי מלון.
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-start bg-white/40 p-5 rounded-xl border border-[#EADFC9]/60">
          <div className="p-2 bg-[#EADFC9]/50 rounded-lg text-[#C5A880] shrink-0">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium text-[#4A3E3D]">
              שמנים אורגניים איכותיים
            </h3>
            <p className="text-sm text-[#7A6B68] font-light mt-1">
              שימוש בלעדי בשמני בסיס טהורים ושמנים אתריים שמזינים את העור
              ומעמיקים את תחושת השחרור.
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-start bg-white/40 p-5 rounded-xl border border-[#EADFC9]/60">
          <div className="p-2 bg-[#EADFC9]/50 rounded-lg text-[#C5A880] shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium text-[#4A3E3D]">חניה בשפע ובחינם</h3>
            <p className="text-sm text-[#7A6B68] font-light mt-1">
              בלי לחפש חניה במרכזי קניות ובלי ללכת ברגל בחום. חונים בקלות
              ובמהירות ממש מחוץ לסטודיו.
            </p>
          </div>
        </div>

        {/* POINT 8 */}
        <div className="flex gap-3 items-start bg-white/40 p-5 rounded-xl border border-[#EADFC9]/60">
          <div className="p-2 bg-[#EADFC9]/50 rounded-lg text-[#C5A880] shrink-0">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium text-[#4A3E3D]">שירות אישי ודיגיטלי</h3>
            <p className="text-sm text-[#7A6B68] font-light mt-1">
              שירות אישי ודיגיטלי מערכת זימון דיגיטלית קלה. ניתן לשנות או לבטל
              תור בקליק או ליצור איתנו קשר ישירות לכל שאלה.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
