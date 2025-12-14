import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import BiographySection from "@/components/BiographySection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookClick = () => {
    setIsBookingOpen(true);
  };

  const scrollToBeforeAfter = () => {
    document
      .getElementById("before-after")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle escape key for modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isBookingOpen) {
        setIsBookingOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isBookingOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isBookingOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isBookingOpen]);

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar onBookClick={handleBookClick} />

      {/* Hero Section */}
      <Hero
        onBookClick={handleBookClick}
        onBeforeAfterClick={scrollToBeforeAfter}
      />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Biography Section */}
      <BiographySection />

      {/* Before/After Section */}
      <BeforeAfterSection />

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Footer with Contact */}
      <Footer />

      {/* Sticky CTA */}
      <StickyCTA />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
};

export default Index;
