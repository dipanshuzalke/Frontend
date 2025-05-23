import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQQuestions";
import ContinuousCarousel from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Work />
      <ContinuousCarousel />
      <FAQSection />
      <Footer />
    </>
  );
}
