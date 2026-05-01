"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Props {
  onEnter: () => void;
}

export default function HeroSlide({ onEnter }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <div className="slide" style={{ background: "#0A0A0A" }}>
      <video
        ref={videoRef}
        className="video-bg"
        src="/media/videos/hero.mp4"
        autoPlay muted loop playsInline
        preload="auto"
      />
      <div className="absolute inset-0 z-[1]" style={{
        background: "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.15) 100%)"
      }} />
      <div className="absolute bottom-0 left-0 right-0 z-[2]" style={{
        height: "120px",
        background: "linear-gradient(to top, #0A0A0A, transparent)"
      }} />

      <div className="slide-inner">
        <motion.span
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }} className="section-tag"
        >
          East Rutherford, New Jersey
        </motion.span>

        <motion.div
          initial={{ width: 0 }} animate={{ width: 50 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="gold-bar"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)",
            lineHeight: 1, marginBottom: "1rem", color: "white"
          }}
        >
          Not a Mall.
          <br />
          <span style={{ color: "#C9A84C", fontStyle: "italic" }}>A Global Stage.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{
            color: "rgba(255,255,255,0.6)", fontSize: "0.95rem",
            maxWidth: "480px", marginBottom: "1.75rem", lineHeight: 1.6
          }}
        >
          3 million sq ft. 40 million visitors. The most powerful retail & entertainment platform in North America.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          style={{ display: "flex", gap: "2.5rem", marginBottom: "2rem" }}
        >
          {[
            { number: "3M", label: "Sq Ft" },
            { number: "40M", label: "Annual Visitors" },
            { number: "450+", label: "Brands" },
            { number: "$5B", label: "Development" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
                color: "#C9A84C", lineHeight: 1
              }}>
                {stat.number}
              </div>
              <div style={{ width: "24px", height: "1px", background: "rgba(201,168,76,0.4)", margin: "0.35rem 0" }} />
              <div style={{
                fontSize: "0.58rem", letterSpacing: "0.2em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.4)"
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
        >
          <button type="button" onClick={onEnter} className="btn-primary">
            Explore the Property
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={onEnter}
            style={{
              background: "none", border: "none",
              color: "rgba(255,255,255,0.4)", fontSize: "0.62rem",
              letterSpacing: "0.2em", textTransform: "uppercase",
              cursor: "none", display: "flex", alignItems: "center", gap: "0.5rem"
            }}
          >
            <div style={{ width: "28px", height: "1px", background: "rgba(255,255,255,0.2)" }} />
            Scroll to discover
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <div style={{ width: "1px", height: "36px", background: "rgba(201,168,76,0.3)" }} />
          <div>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              2nd Largest Mall in the USA
            </p>
            <p style={{ color: "#C9A84C", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "0.2rem" }}>
              Minutes from Manhattan
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}