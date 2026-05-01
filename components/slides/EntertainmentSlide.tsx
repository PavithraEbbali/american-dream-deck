"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const attractions = [
  {
    id: "waterpark",
    label: "🌊 Water Park",
    title: "DreamWorks Water Park",
    stat: "#1",
    statLabel: "Largest Indoor Water Park in North America",
    desc: "Wave pools, world-record waterslides, and a surf simulator — all indoors, all year round.",
    quote: "One destination. Indoor skiing, surfing, and theme parks — all under one roof, all year round.",
    video: "/media/videos/ent-water.mp4",
    color: "#0ea5e9",
  },
  {
    id: "themepark",
    label: "🎢 Theme Park",
    title: "Nickelodeon Universe",
    stat: "#1",
    statLabel: "Largest Indoor Theme Park in Western Hemisphere",
    desc: "World's tallest indoor rollercoaster. 35+ rides and attractions. SpongeBob, PAW Patrol, and more.",
    quote: "35+ rides, zero weather delays. The world's most visited indoor theme park destination.",
    video: "/media/videos/ent-theme.mp4",
    color: "#f97316",
  },
  {
    id: "ski",
    label: "⛷️ Ski Slope",
    title: "Big SNOW",
    stat: "Only",
    statLabel: "Indoor Ski Resort in North America",
    desc: "Real snow. Real slopes. Year-round skiing — as seen with Lindsey Vonn & Eli Manning.",
    quote: "Lindsey Vonn skied here. Eli Manning snowboarded here. American Dream attracts the world's biggest names.",
    video: "/media/videos/ent-ski.mp4",
    color: "#a8d8ea",
  },
  {
    id: "wheel",
    label: "🎡 Dream Wheel",
    title: "The Dream Wheel",
    stat: "16",
    statLabel: "Stories High — Indoor Observation Ferris Wheel",
    desc: "A 16-story ferris wheel inside the mall. A landmark experience visible from across the complex.",
    quote: "An icon visible from the highway. A memory that lasts long after the visit ends.",
    video: "/media/videos/ent-wheel.mp4",
    color: "#C9A84C",
  },
];

const extras = [
  { icon: "🐠", name: "SEA LIFE Aquarium", detail: "3,000+ sea creatures" },
  { icon: "🧱", name: "LEGOLAND Discovery Center", detail: "Interactive LEGO experience" },
  { icon: "🏒", name: "The Rink", detail: "NHL regulation ice rink" },
  { icon: "🎯", name: "Activate", detail: "Tech-powered active gaming" },
  { icon: "🏌️", name: "Mini Golf Club", detail: "Angry Birds themed" },
  { icon: "🎮", name: "The Gameroom", detail: "Powered by Hasbro" },
];

export default function EntertainmentSlide() {
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [active]);

  const current = attractions[active];

  return (
    <div className="slide">
      <AnimatePresence mode="wait">
        <motion.video
          key={current.video}
          ref={videoRef}
          className="video-bg"
          src={current.video}
          autoPlay muted loop playsInline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 z-[1]" style={{
        background: "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.7) 100%)"
      }} />

      <motion.div
        key={current.color}
        animate={{ opacity: 1 }} initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "2px", zIndex: 10,
          background: `linear-gradient(to right, ${current.color}, transparent)`
        }}
      />

      <div className="slide-inner">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          className="section-tag"
        >
          Attractions & Entertainment
        </motion.span>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? 50 : 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="gold-bar"
        />

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ delay: 0.3 }}
          style={{ display: "flex", gap: "0.4rem", marginBottom: "1.25rem", flexWrap: "wrap" }}
        >
          {attractions.map((a, i) => (
            <button
              type="button"
              key={a.id}
              onClick={() => setActive(i)}
              style={{
                padding: "0.38rem 0.9rem",
                border: `1px solid ${active === i ? a.color : "rgba(255,255,255,0.15)"}`,
                background: active === i ? `${a.color}20` : "transparent",
                color: active === i ? a.color : "rgba(255,255,255,0.45)",
                fontSize: "0.62rem", letterSpacing: "0.12em",
                textTransform: "uppercase", cursor: "none",
                transition: "all 0.3s ease",
              }}
            >
              {a.label}
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
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                color: "white", lineHeight: 1.1, marginBottom: "0.75rem"
              }}>
                {current.title}
              </h2>

              <div style={{
                display: "flex", alignItems: "center",
                gap: "0.75rem", marginBottom: "0.6rem",
                padding: "0.5rem 0.75rem",
              }}>
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.8rem", color: current.color, lineHeight: 1
                }}>
                  {current.stat}
                </span>
                <span style={{
                  color: "rgba(255,255,255,0.8)", fontSize: "0.72rem",
                  maxWidth: "200px", lineHeight: 1.4, fontWeight: 500
                }}>
                  {current.statLabel}
                </span>
              </div>

              <p style={{
                color: "rgba(255,255,255,0.55)", fontSize: "0.78rem",
                lineHeight: 1.6, marginBottom: "1rem", maxWidth: "360px"
              }}>
                {current.desc}
              </p>

              <div style={{
                borderLeft: `2px solid ${current.color}`,
                paddingLeft: "0.85rem"
              }}>
                <p style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "0.7rem", lineHeight: 1.5,
                  fontStyle: "italic"
                }}>
                  {current.quote}
                </p>
              </div>
            </div>

            {/* Right — extras */}
            <div>
              <span className="col-label">Also Inside American Dream</span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {extras.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    style={{
                      display: "flex", alignItems: "center",
                      gap: "0.85rem", padding: "0.6rem 0",
                      borderBottom: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <span style={{
                      fontSize: "1.1rem", flexShrink: 0,
                      width: "28px", textAlign: "center"
                    }}>
                      {item.icon}
                    </span>
                    <div>
                      <span style={{
                       color: "white",
                       fontSize: "0.75rem", fontWeight: 500
                      }}>
                        {item.name}
                      </span>
                      <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.68rem" }}>
                        {" "}— {item.detail}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}