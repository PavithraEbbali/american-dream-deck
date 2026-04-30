"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const luxuryBrands = [
  "Gucci", "Hermès", "Louis Vuitton", "Saint Laurent",
  "Balenciaga", "Tiffany & Co.", "Rolex", "Ferrari",
  "Dolce & Gabbana", "Saks Fifth Avenue", "Canada Goose",
  "Alexander Wang", "Gentle Monster", "Zadig & Voltaire", "Bape",
];

const pillars = [
  {
    number: "01",
    title: "The Avenue",
    desc: "300,000 sq ft of pure luxury. The most concentrated collection of global luxury houses under one roof in North America.",
  },
  {
    number: "02",
    title: "Premium Footfall",
    desc: "High-net-worth visitors drawn by world-class entertainment. Average dwell time 4+ hours.",
  },
  {
    number: "03",
    title: "Flagship Opportunity",
    desc: "Architecturally distinct spaces designed for luxury retail. Your most statement-making location.",
  },
];

export default function LuxurySlide() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slide">
      <video
        className="video-bg"
        src="/media/videos/luxury.mp4"
        autoPlay muted loop playsInline
      />
      <div className="absolute inset-0 z-[1]" style={{
        background: "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.82) 55%, rgba(0,0,0,0.5) 100%)"
      }} />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: inView ? 1 : 0 }}
        transition={{ duration: 1.2 }}
        style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: "1px",
          background: "linear-gradient(to right, transparent, #C9A84C, transparent)",
          zIndex: 10, transformOrigin: "left"
        }}
      />

      <div className="slide-inner">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          className="section-tag"
        >
          The Avenue — Luxury Wing
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
          A Collection of
          <br />
          <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Global Luxury Houses.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.5 }}
          className="slide-subtitle"
          style={{ maxWidth: "440px" }}
        >
          The Avenue is not a luxury wing — it is a destination within a destination. 300,000 sq ft of architectural distinction, global brand houses, and high-net-worth clientele.
        </motion.p>

        <div className="two-col">
          {/* Left — brands */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ delay: 0.6 }}
          >
            <span className="col-label">Luxury Houses</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
              {luxuryBrands.map((brand, i) => (
                <motion.span
                  key={brand}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ delay: 0.7 + i * 0.04 }}
                  style={{
                    padding: "0.3rem 0.75rem",
                    border: "1px solid rgba(201,168,76,0.25)",
                    background: "rgba(201,168,76,0.04)",
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.06em",
                    fontWeight: 300,
                  }}
                >
                  {brand}
                </motion.span>
              ))}
            </div>

            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 1.4 }}
              className="btn-primary"
              style={{ fontSize: "0.62rem" }}
            >
              Secure Your Flagship Presence
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right — pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
            transition={{ delay: 0.7 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                style={{
                  display: "flex", gap: "1rem",
                  paddingBottom: "1.1rem",
                  borderBottom: "1px solid rgba(255,255,255,0.07)"
                }}
              >
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "rgba(201,168,76,0.4)",
                  fontSize: "1.3rem", lineHeight: 1, flexShrink: 0
                }}>
                  {pillar.number}
                </span>
                <div>
                  <h3 style={{
                    color: "white", fontSize: "0.82rem",
                    fontWeight: 600, marginBottom: "0.3rem"
                  }}>
                    {pillar.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.7rem", lineHeight: 1.5 }}>
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 1.2 }}
              style={{ borderLeft: "2px solid #C9A84C", paddingLeft: "1rem" }}
            >
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.8rem", color: "#C9A84C", lineHeight: 1
              }}>
                300K
              </div>
              <div style={{
                fontSize: "0.58rem", letterSpacing: "0.2em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
                marginTop: "0.25rem"
              }}>
                Sq Ft — The Avenue
              </div>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.62rem", marginTop: "0.3rem" }}>
                Most concentrated luxury retail in North America
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}