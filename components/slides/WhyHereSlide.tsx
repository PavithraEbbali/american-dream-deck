"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "40M", label: "Annual Visitors", sub: "More than Disneyland Anaheim" },
  { number: "3M", label: "Square Feet", sub: "Larger than 40 Manhattan city blocks" },
  { number: "100M", label: "Cars Pass Annually", sub: "Via adjacent NJ Turnpike & Route 3" },
  { number: "55%", label: "Entertainment Space", sub: "No other mall comes close" },
];

const reasons = [
  { title: "Prime Location", desc: "Minutes from Manhattan. Adjacent to MetLife Stadium." },
  { title: "Global Access", desc: "3 major airports within 30 minutes. Direct NYC transit links." },
  { title: "Unmatched Scale", desc: "2nd largest mall in the USA. 3 million sq ft of opportunity." },
  { title: "Premium Demographics", desc: "65M+ tri-state residents. Median HHI $95,000+." },
];

export default function WhyHereSlide() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slide">
      <div className="absolute inset-0" style={{
        backgroundImage: "url('/media/images/why-here-bg.jpg')",
        backgroundSize: "cover", backgroundPosition: "center"
      }} />
      <div className="absolute inset-0 z-[1]" style={{
        background: "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.5) 100%)"
      }} />

      <div className="slide-inner">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          className="section-tag"
        >
          Why American Dream
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
          The Address That
          <br />
          <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Changes Everything.</span>
        </motion.h2>

        {/* Stats */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem", marginBottom: "1.75rem"
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(0,0,0,0.4)",
                padding: "1rem"
              }}
            >
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
                color: "#C9A84C", lineHeight: 1, marginBottom: "0.35rem"
              }}>
                {stat.number}
              </div>
              <div style={{ color: "white", fontSize: "0.72rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                {stat.label}
              </div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.62rem", lineHeight: 1.4 }}>
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reasons */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            >
              <div style={{ width: "20px", height: "1px", background: "#C9A84C", marginBottom: "0.6rem" }} />
              <h3 style={{
                color: "white", fontSize: "0.78rem",
                fontWeight: 600, marginBottom: "0.35rem"
              }}>
                {reason.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.7rem", lineHeight: 1.5 }}>
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}