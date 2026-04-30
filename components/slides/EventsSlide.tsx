"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const eventTypes = [
  {
    id: "concerts",
    label: "🎵 Concerts & Shows",
    title: "A Stage Like No Other",
    desc: "Host world-class concerts, live performances, and music events inside Nickelodeon Universe — a venue unlike anything else on earth.",
    highlight: "Non-stop events. Year-round programming.",
    stats: [
      { number: "40M", label: "Annual Audience" },
      { number: "3M", label: "Sq Ft Venue" },
      { number: "365", label: "Days Available" },
    ],
  },
  {
    id: "brand",
    label: "🚀 Brand Activations",
    title: "Own the Moment",
    desc: "Launch products, activate campaigns, and create viral moments in front of 40 million annual visitors. From pop-ups to full-scale immersive experiences.",
    highlight: "Kim Kardashian. Lindsey Vonn. Eli Manning. They all came here.",
    stats: [
      { number: "40M", label: "Visitors/Year" },
      { number: "4hrs", label: "Avg Dwell Time" },
      { number: "100%", label: "Captive Audience" },
    ],
  },
  {
    id: "corporate",
    label: "🏢 Corporate Events",
    title: "Beyond the Boardroom",
    desc: "Host conferences, product launches, and corporate gatherings in spaces designed for impact. Convention-grade infrastructure with entertainment-grade energy.",
    highlight: "Convention space. Performing arts. Exposition halls.",
    stats: [
      { number: "55%", label: "Entertainment Space" },
      { number: "3", label: "Major Venues" },
      { number: "∞", label: "Possibilities" },
    ],
  },
  {
    id: "sports",
    label: "🥊 Sports & Fights",
    title: "Fight Night. Game Night.",
    desc: "Professional boxing. NHL-regulation ice. The most unexpected sports venue in America — inside a mall, in front of the most passionate crowds.",
    highlight: "Professional boxing. Live inside American Dream.",
    stats: [
      { number: "NHL", label: "Regulation Rink" },
      { number: "Pro", label: "Boxing Bouts" },
      { number: "NJ", label: "Meadowlands" },
    ],
  },
];

export default function EventsSlide() {
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const current = eventTypes[active];

  return (
    <div className="slide">
      <video
        className="video-bg"
        src="/media/videos/events.mp4"
        autoPlay muted loop playsInline
      />
      <div className="absolute inset-0 z-[1]" style={{
        background: "linear-gradient(to right, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.78) 50%, rgba(0,0,0,0.35) 100%)"
      }} />

      <div className="slide-inner">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          className="section-tag"
        >
          Events & Platform
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
          Launch Your Next
          <br />
          <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Global Event Here.</span>
        </motion.h2>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ delay: 0.4 }}
          style={{ display: "flex", gap: "0.4rem", marginBottom: "1.25rem", flexWrap: "wrap" }}
        >
          {eventTypes.map((e, i) => (
            <button
              type="button"
              key={e.id}
              onClick={() => setActive(i)}
              style={{
                padding: "0.38rem 0.9rem",
                border: `1px solid ${active === i ? "#C9A84C" : "rgba(255,255,255,0.15)"}`,
                background: active === i ? "rgba(201,168,76,0.1)" : "transparent",
                color: active === i ? "#C9A84C" : "rgba(255,255,255,0.45)",
                fontSize: "0.62rem", letterSpacing: "0.12em",
                textTransform: "uppercase", cursor: "none",
                transition: "all 0.3s ease",
              }}
            >
              {e.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="two-col"
          >
            {/* Left */}
            <div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                color: "white", lineHeight: 1.1, marginBottom: "0.6rem"
              }}>
                {current.title}
              </h3>

              <p style={{
                color: "rgba(255,255,255,0.55)", fontSize: "0.78rem",
                lineHeight: 1.6, marginBottom: "0.85rem", maxWidth: "360px"
              }}>
                {current.desc}
              </p>

              <div style={{
                borderLeft: "2px solid #C9A84C",
                paddingLeft: "0.85rem", marginBottom: "1.25rem"
              }}>
                <p style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.72rem", lineHeight: 1.5, fontStyle: "italic"
                }}>
                  {current.highlight}
                </p>
              </div>

              <button type="button" className="btn-primary" style={{ fontSize: "0.62rem" }}>
                Launch Your Next Global Event Here
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Right */}
            <div>
              <span className="col-label">By The Numbers</span>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
                {current.stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      display: "flex", alignItems: "center",
                      gap: "1.25rem", padding: "0.85rem 1rem",
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "rgba(0,0,0,0.3)",
                    }}
                  >
                    <span style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.8rem", color: "#C9A84C",
                      lineHeight: 1, minWidth: "70px"
                    }}>
                      {stat.number}
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.76rem" }}>
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Sponsorship */}
              <div style={{
                padding: "0.85rem 1rem",
                border: "1px solid rgba(201,168,76,0.2)",
                background: "rgba(201,168,76,0.04)",
              }}>
                <p style={{
                  color: "#C9A84C", fontSize: "0.58rem",
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  marginBottom: "0.35rem"
                }}>
                  Sponsorship Packages
                </p>
                <p style={{
                  color: "rgba(255,255,255,0.45)", fontSize: "0.68rem",
                  lineHeight: 1.5, marginBottom: "0.5rem"
                }}>
                  Custom partnership tiers designed for brands who want to lead.
                </p>
                <button type="button" style={{
                  background: "none", border: "none", color: "#C9A84C",
                  fontSize: "0.58rem", letterSpacing: "0.18em",
                  textTransform: "uppercase", cursor: "none"
                }}>
                  Own the Moment. Own the Market. →
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}