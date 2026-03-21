import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GymOrFitnessCenter",
  name: "LIFE TIME GYMS Gym",
  description: "Premium fitness facility with expert personal trainers, state-of-the-art equipment, and flexible membership plans.",
  address: { "@type": "PostalAddress", streetAddress: "123 Fitness Ave", addressLocality: "Downtown" },
  telephone: "(555) 123-4567",
  openingHours: ["Mo-Fr 05:00-23:00", "Sa 06:00-22:00", "Su 07:00-21:00"],
};

const Index = () => (
  <>
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
