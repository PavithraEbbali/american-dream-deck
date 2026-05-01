"use client";

import { motion } from "framer-motion";

interface Props {
  slides: { id: string; label: string }[];
  currentSlide: number;
  onNavigate: (index: number) => void;
  onLogoClick: () => void;
}

export default function DeckNav({ slides, currentSlide, onNavigate, onLogoClick }: Props) {
  

  return (
    <>
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.25rem 3rem",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)",
      }}>
        {/* Logo — clicks go home */}
        <motion.button
          type="button"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          onClick={onLogoClick}
          style={{
            display: "flex", alignItems: "center", gap: "0.75rem",
            background: "none", border: "none", cursor: "none",
          }}
        >
          <div style={{ width: "28px", height: "1px", background: "#C9A84C" }} />
          <span style={{
            color: "rgba(255,255,255,0.8)", fontSize: "0.65rem",
            letterSpacing: "0.3em", textTransform: "uppercase"
          }}>
            American Dream
          </span>
        </motion.button>

        {/* Nav links */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ display: "flex", alignItems: "center", gap: "2rem" }}
        >
          {slides.map((slide: { id: string; label: string }, index: number) => (
            <button
              type="button"
              key={slide.id}
              onClick={() => onNavigate(index)}
              style={{
                background: "none", border: "none",
                color: currentSlide === index ? "#C9A84C" : "rgba(255,255,255,0.4)",
                fontSize: "0.62rem", letterSpacing: "0.2em",
                textTransform: "uppercase", cursor: "none",
                transition: "color 0.3s ease",
              }}
            >
              {slide.label}
            </button>
          ))}
        </motion.nav>

        {/* CTA */}
        <motion.button
          type="button"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="btn-primary"
          onClick={() => onNavigate(7)}
          style={{ fontSize: "0.62rem", padding: "0.65rem 1.5rem" }}
        >
          Get in Touch
        </motion.button>
      </div>

      {/* Side dots */}
      <div style={{
        position: "fixed", right: "1.5rem", top: "50%",
        transform: "translateY(-50%)", zIndex: 50,
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem"
      }}>
        {slides.map((slide: { id: string; label: string }, index: number) => (
          <div
            key={slide.id}
            style={{ position: "relative", display: "flex", alignItems: "center" }}
          >
            
            <button
              type="button"
              onClick={() => onNavigate(index)}
              style={{ background: "none", border: "none", cursor: "none", padding: "2px" }}
            >
              <motion.div
                animate={{
                  height: currentSlide === index ? 20 : 5,
                  background: currentSlide === index ? "#C9A84C" : "rgba(255,255,255,0.25)",
                }}
                transition={{ duration: 0.3 }}
                style={{ width: "4px", borderRadius: "2px" }}
              />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}