import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-[#EADFC9]/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#D4AA04] ">
            מה הלקוחות שלנו אומרות?
          </h2>
          <p className="text-[#A39281] font-light mt-2">
            ביקורות של מטופלות שבחרו בעצמן{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* REVIEW 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#EADFC9]/40 flex flex-col justify-between">
            <div>
              <div className="flex text-[#A78BFA] gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-[#7A6B68] font-light italic leading-relaxed">
                "בתור אילתית שעובדת שעות על הרגליים במלונאות, חיפשתי מקום שקט
                באמת. החוויה בסטודיו הייתה שונה לגמרי מהמלונות. יחס אישי, שמנים
                מדהימים וחניה ממש בדלת. מומלץ בחום!"
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#F7F4EF]">
              <span className="font-medium text-sm text-[#4A3E3D]">
                מיכל א.
              </span>
              <p className="text-xs text-[#A39281]">תושבת אילת</p>
            </div>
          </div>

          {/* REVIEW 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#EADFC9]/40 flex flex-col justify-between">
            <div>
              <div className="flex text-[#A78BFA] gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-[#7A6B68] font-light italic leading-relaxed">
                "ירדתי לסופ"ש באילת וסירבתי לשלם את המחירים ההזויים של הספא
                במלון. הגעתי לפה דרך הפרסום וזו הייתה ההחלטה הכי טובה בחופשה.
                שקט, נקי, מקצועי ובחצי מחיר."
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#F7F4EF]">
              <span className="font-medium text-sm text-[#4A3E3D]">דנה ל.</span>
              <p className="text-xs text-[#A39281]">נופשת מתל אביב</p>
            </div>
          </div>

          {/* REVIEW 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#EADFC9]/40 flex flex-col justify-between">
            <div>
              <div className="flex text-[#A78BFA] gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-[#7A6B68] font-light italic leading-relaxed">
                "הדבר הכי חשוב לי היה להרגיש בנוח, והעובדה שזה לנשים בלבד נתנה
                לי שקט נפשי מוחלט. העיסוי היה עמוק, משחרר ומקצועי ברמות. כבר
                קבעתי את התור הבא שלי ביומן!"
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#F7F4EF]">
              <span className="font-medium text-sm text-[#4A3E3D]">
                רפיק ש.
              </span>
              <p className="text-xs text-[#A39281]">תושבת אילת</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
