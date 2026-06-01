// export default function Home() {
//   return <div className=""></div>;
// }
// app/page.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Treatments from "./components/Treatments";

export default function LandingPage() {
  const CALMARK_LINK = "https://calmark.io/p/XCXRN";

  return (
    <div
      className="min-h-screen bg-[#EADFC9] text-[#4A3E3D] font-sans antialiased"
      dir="rtl"
    >
      <Header ctaLink={CALMARK_LINK} />
      <main>
        <Hero ctaLink={CALMARK_LINK} />
        <Treatments />
        <WhyUs />
        <Testimonials />
      </main>
      <Footer ctaLink={CALMARK_LINK} />
    </div>
  );
}
