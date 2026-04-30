"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const restaurants = [
  { name: "Carpaccio Ristorante", type: "Italian Fine Dining" },
  { name: "Makoto", type: "Japanese Omakase" },
  { name: "Isola Bella", type: "Champagne Bar" },
  { name: "Marcus Live!", type: "Bar & Grille" },
  { name: "Yard House", type: "American Craft" },
  { name: "MrBeast Burger", type: "Celebrity Brand" },
  { name: "Jarana", type: "Latin Cuisine" },
  { name: "Mozzarella Bar", type: "Italian Casual" },
  { name: "House of Que", type: "BBQ & Smokehouse" },
  { name: "Around the Clock", type: "All-Day Diner" },
  { name: "Szechuan Opera", type: "Chinese Fine Dining" },
  { name: "Little Sheep Hot Pot", type: "Asian Hot Pot" },
];

const highlights = [
  { stat: "65+", label: "F&B Concepts", desc: "From Michelin-caliber dining to celebrity brands" },
  { stat: "4hrs", label: "Avg Dwell Time", desc: "Captive audience that stays, spends, and returns" },
  { stat: "$0", label: "Marketing Cost", desc: "40M visitors already coming. You just show up." },
];

export default function DiningSlide() {
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slide">
      <video
        className="video-bg"
        src="/media/videos/dining.mp4"
        autoPlay muted loop playsInline
      />
      <div className="absolute inset-0 z-[1]" style={{
        background: "linear-gradient(to right, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 100%)"
      }} />

      <div className="slide-inner">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          className="section-tag"
        >
          Dining & Lifestyle
        </motion.span>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? 50 : 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="gold-bar"
        />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.3 }}
          className="slide-title"
        >
          Not a Food Court.
          <br />
          <span style={{ color: "#C9A84C", fontStyle: "italic" }}>A Culinary Destination.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.5 }}
          className="slide-subtitle"
          style={{ maxWidth: "440px" }}
        >
          From celebrity chef concepts to global cuisine — American Dream serves every palate, every occasion, and every budget.
        </motion.p>

        <div className="two-col">
          {/* Left — restaurant list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ delay: 0.6 }}
          >
            <span className="col-label">Featured Concepts</span>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
              {restaurants.map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ delay: 0.7 + i * 0.04 }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    padding: "0.5rem 0.25rem",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    cursor: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div style={{
                    color: hovered === i ? "white" : "rgba(255,255,255,0.7)",
                    fontSize: "0.72rem", fontWeight: 500,
                    transition: "color 0.3s ease",
                    marginBottom: "0.1rem"
                  }}>
                    {r.name}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem" }}>
                    {r.type}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
            transition={{ delay: 0.7 }}
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            <span className="col-label">Why F&B Here Works</span>

            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                style={{
                  padding: "1rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(0,0,0,0.3)",
                }}
              >
                <div style={{
                  display: "flex", alignItems: "flex-end",
                  gap: "0.6rem", marginBottom: "0.35rem"
                }}>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.8rem", color: "#C9A84C", lineHeight: 1
                  }}>
                    {h.stat}
                  </span>
                  <span style={{
                    color: "white", fontSize: "0.76rem",
                    fontWeight: 500, marginBottom: "0.1rem"
                  }}>
                    {h.label}
                  </span>
                </div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.68rem", lineHeight: 1.5 }}>
                  {h.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}