"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const tenants = [
  "H&M", "Zara", "Apple", "Sephora", "Uniqlo", "Primark",
  "Aritzia", "Lululemon", "Victoria's Secret", "American Eagle",
  "MAC", "Foot Locker", "Mango", "COS", "Pop Mart",
  "Miniso", "JD Sports", "IT'SUGAR",
];

const categories = [
  {
    label: "Flagship",
    desc: "Anchor your brand in the #1 entertainment destination in North America.",
    cta: "Secure Your Flagship Presence",
  },
  {
    label: "Luxury",
    desc: "Join The Avenue — our curated luxury wing with the world's top houses.",
    cta: "Explore The Avenue",
  },
  {
    label: "Pop-Up",
    desc: "Short-term, high-visibility activations with 40M annual visitors.",
    cta: "Book a Pop-Up",
  },
  {
    label: "F&B",
    desc: "65+ dining concepts. Space for more. Captive audience.",
    cta: "F&B Leasing",
  },
];

export default function RetailSlide() {
  const [inView, setInView] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slide">
      <video
        className="video-bg"
        src="/media/videos/retail.mp4"
        autoPlay muted loop playsInline
      />
      <div className="absolute inset-0 z-[1]" style={{
        background: "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 55%, rgba(0,0,0,0.5) 100%)"
      }} />

      <div className="slide-inner">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          className="section-tag"
        >
          Retail
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
          450+ Brands.
          <br />
          <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Every Customer.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.5 }}
          className="slide-subtitle"
          style={{ maxWidth: "420px" }}
        >
          From global flagships to emerging brands — American Dream offers unmatched retail diversity with 40M built-in visitors.
        </motion.p>

        <div className="two-col">
          {/* Left — tenants */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ delay: 0.6 }}
          >
            <span className="col-label">Current Tenants</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {tenants.map((tenant, i) => (
                <motion.span
                  key={tenant}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ delay: 0.7 + i * 0.03 }}
                  style={{
                    padding: "0.3rem 0.7rem",
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.04)",
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {tenant}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right — leasing */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
            transition={{ delay: 0.7 }}
          >
            <span className="col-label">Leasing Opportunities</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  onClick={() => setActiveCategory(i)}
                  style={{
                    padding: "0.85rem 1rem",
                    border: `1px solid ${activeCategory === i ? "#C9A84C" : "rgba(255,255,255,0.08)"}`,
                    background: activeCategory === i ? "rgba(201,168,76,0.06)" : "rgba(255,255,255,0.02)",
                    cursor: "none", transition: "all 0.3s ease",
                  }}
                >
                  <div style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: activeCategory === i ? "0.5rem" : 0
                  }}>
                    <span style={{
                      fontSize: "0.62rem", letterSpacing: "0.18em",
                      textTransform: "uppercase", fontWeight: 600,
                      color: activeCategory === i ? "#C9A84C" : "rgba(255,255,255,0.55)"
                    }}>
                      {cat.label}
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.8rem" }}>
                      {activeCategory === i ? "−" : "+"}
                    </span>
                  </div>
                  {activeCategory === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <p style={{
                        color: "rgba(255,255,255,0.5)", fontSize: "0.7rem",
                        lineHeight: 1.5, marginBottom: "0.5rem"
                      }}>
                        {cat.desc}
                      </p>
                      <span style={{
                        color: "#C9A84C", fontSize: "0.58rem",
                        letterSpacing: "0.15em", textTransform: "uppercase"
                      }}>
                        {cat.cta} →
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}