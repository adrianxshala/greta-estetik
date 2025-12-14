import { useState, useEffect, Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import StickyCTA from "@/components/StickyCTA";

// Lazy load heavy components
const ServicesGrid = lazy(() => import("@/components/ServicesGrid"));
const BeforeAfterSection = lazy(() => import("@/components/BeforeAfterSection"));
const BiographySection = lazy(() => import("@/components/BiographySection"));
const TestimonialsCarousel = lazy(() => import("@/components/TestimonialsCarousel"));

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
      <Suspense fallback={<div className="min-h-screen" />}>
        <ServicesGrid />
      </Suspense>

      {/* Biography Section */}
      <Suspense fallback={<div className="min-h-screen" />}>
        <BiographySection />
      </Suspense>

      {/* Before/After Section */}
      <Suspense fallback={<div className="min-h-screen" />}>
        <BeforeAfterSection />
      </Suspense>

      {/* Testimonials */}
      <Suspense fallback={<div className="min-h-screen" />}>
        <TestimonialsCarousel />
      </Suspense>

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
