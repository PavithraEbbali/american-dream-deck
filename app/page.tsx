"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSlide from "@/components/slides/HeroSlide";
import WhyHereSlide from "@/components/slides/WhyHereSlide";
import RetailSlide from "@/components/slides/RetailSlide";
import LuxurySlide from "@/components/slides/LuxurySlide";
import DiningSlide from "@/components/slides/DiningSlide";
import EntertainmentSlide from "@/components/slides/EntertainmentSlide";
import EventsSlide from "@/components/slides/EventsSlide";
import CTASlide from "@/components/slides/CTASlide";
import DeckNav from "@/components/deck/DeckNav";
import Cursor from "@/components/ui/Cursor";

const slides = [
  { id: "hero", label: "Home" },
  { id: "why-here", label: "Why Here" },
  { id: "retail", label: "Retail" },
  { id: "luxury", label: "Luxury" },
  { id: "dining", label: "Dining" },
  { id: "entertainment", label: "Entertainment" },
  { id: "events", label: "Events" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartY = useRef(0);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    if (index < 0 || index >= slides.length) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isTransitioning) return;
      if (e.deltaY > 30) goToSlide(currentSlide + 1);
      else if (e.deltaY < -30) goToSlide(currentSlide - 1);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") goToSlide(currentSlide + 1);
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") goToSlide(currentSlide - 1);
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goToSlide(currentSlide + 1);
        else goToSlide(currentSlide - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSlide, isTransitioning]);

  const slideComponents = [
    <HeroSlide key="hero" onEnter={() => goToSlide(1)} />,
    <WhyHereSlide key="why" />,
    <RetailSlide key="retail" />,
    <LuxurySlide key="luxury" />,
    <DiningSlide key="dining" />,
    <EntertainmentSlide key="entertainment" />,
    <EventsSlide key="events" />,
    <CTASlide key="cta" />,
  ];

  return (
    <>
      <Cursor />
      <DeckNav
        slides={slides}
        currentSlide={currentSlide}
        onNavigate={goToSlide}
        onLogoClick={() => goToSlide(0)}
      />
      <div className="relative" style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#0A0A0A" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ position: "absolute", inset: 0 }}
          >
            {slideComponents[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}