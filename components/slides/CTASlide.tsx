"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const paths = [
  {
    title: "Retail Leasing",
    desc: "Flagship, luxury, pop-up, or F&B — secure your presence in North America's most visited destination.",
    cta: "Secure Your Flagship Presence",
  },
  {
    title: "Sponsorship & Partnerships",
    desc: "Brand activations, naming rights, experiential campaigns — own your moment in front of 40M visitors.",
    cta: "Own the Moment. Own the Market.",
  },
  {
    title: "Events & Venue Booking",
    desc: "Concerts, product launches, corporate events, fight nights — the most unexpected venue in America.",
    cta: "Launch Your Next Global Event Here",
  },
];

export default function CTASlide() {
  const [inView, setInView] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<number | null>(null);
  const [formState, setFormState] = useState({
    name: "", company: "", email: "", interest: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
      newErrors.email = "Please enter a valid email address";
    if (!formState.interest) newErrors.interest = "Please select an option";
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="slide">
      <div className="absolute inset-0" style={{
        backgroundImage: "url('/media/images/hero-bg.jpg')",
        backgroundSize: "cover", backgroundPosition: "center"
      }} />
      <div className="absolute inset-0 z-[1]" style={{ background: "rgba(0,0,0,0.9)" }} />
      <div className="absolute inset-0 z-[2]" style={{
        backgroundImage: `linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      <div className="slide-inner">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          className="section-tag"
        >
          Let&apos;s Build Something Together
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
          Your Next Move
          <br />
          <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Starts Here.</span>
        </motion.h2>

        <div className="two-col">
          {/* Left — paths */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ delay: 0.4 }}
          >
            <span className="col-label">Choose Your Path</span>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
              {paths.map((path, i) => (
                <motion.div
                  key={path.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  onMouseEnter={() => setHoveredPath(i)}
                  onMouseLeave={() => setHoveredPath(null)}
                  style={{
                    padding: "0.85rem 1rem",
                    border: `1px solid ${hoveredPath === i ? "#C9A84C" : "rgba(255,255,255,0.08)"}`,
                    background: hoveredPath === i ? "rgba(201,168,76,0.05)" : "rgba(255,255,255,0.02)",
                    cursor: "none", transition: "all 0.3s ease",
                  }}
                >
                  <h3 style={{
                    color: hoveredPath === i ? "#C9A84C" : "white",
                    fontSize: "0.8rem", fontWeight: 600,
                    marginBottom: "0.3rem", transition: "color 0.3s ease"
                  }}>
                    {path.title}
                  </h3>
                  <p style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: "0.68rem", lineHeight: 1.5, marginBottom: "0.3rem"
                  }}>
                    {path.desc}
                  </p>
                  <span style={{
                    color: hoveredPath === i ? "#C9A84C" : "rgba(255,255,255,0.2)",
                    fontSize: "0.58rem", letterSpacing: "0.15em",
                    textTransform: "uppercase", transition: "color 0.3s ease"
                  }}>
                    {path.cta} →
                  </span>
                </motion.div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "2rem" }}>
              <div>
                <p style={{
                  color: "rgba(255,255,255,0.2)", fontSize: "0.52rem",
                  letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.25rem"
                }}>
                  Email
                </p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.7rem" }}>
                  leasing@americandream.com
                </p>
              </div>
              <div>
                <p style={{
                  color: "rgba(255,255,255,0.2)", fontSize: "0.52rem",
                  letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.25rem"
                }}>
                  Location
                </p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.7rem" }}>
                  East Rutherford, NJ 07073
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
            transition={{ delay: 0.5 }}
          >
            {!submitted ? (
              <div style={{
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(0,0,0,0.5)",
                padding: "1.25rem"
              }}>
                {/* Form header */}
                <div style={{
                  marginBottom: "1rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid rgba(255,255,255,0.06)"
                }}>
                  <p style={{
                    color: "white", fontSize: "0.85rem",
                    fontWeight: 600, marginBottom: "0.2rem"
                  }}>
                    Get in Touch
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.65rem" }}>
                    Our team responds within 24 hours.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    { key: "name", label: "Full Name", placeholder: "John Smith", type: "text" },
                    { key: "company", label: "Company", placeholder: "Brand / Agency / Company", type: "text" },
                    { key: "email", label: "Email Address", placeholder: "john@company.com", type: "email" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label style={{
                        color: "rgba(255,255,255,0.35)", fontSize: "0.52rem",
                        letterSpacing: "0.18em", textTransform: "uppercase",
                        display: "block", marginBottom: "0.35rem"
                      }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formState[field.key as keyof typeof formState]}
                        onChange={(e) => {
                          setFormState((prev) => ({ ...prev, [field.key]: e.target.value }));
                          setErrors((prev) => ({ ...prev, [field.key]: "" }));
                        }}
                        style={{
                          width: "100%",
                          background: "rgba(255,255,255,0.05)",
                          border: `1px solid ${errors[field.key] ? "#ef4444" : "rgba(255,255,255,0.1)"}`,
                          color: "white", fontSize: "0.78rem",
                          padding: "0.55rem 0.75rem", outline: "none",
                        }}
                      />
                      {errors[field.key] && (
                        <p style={{ color: "#ef4444", fontSize: "0.58rem", marginTop: "0.2rem" }}>
                          {errors[field.key]}
                        </p>
                      )}
                    </div>
                  ))}

                  <div>
                    <label style={{
                      color: "rgba(255,255,255,0.35)", fontSize: "0.52rem",
                      letterSpacing: "0.18em", textTransform: "uppercase",
                      display: "block", marginBottom: "0.35rem"
                    }}>
                      I&apos;m Interested In
                    </label>
                    <select
                      value={formState.interest}
                      onChange={(e) => {
                        setFormState((prev) => ({ ...prev, interest: e.target.value }));
                        setErrors((prev) => ({ ...prev, interest: "" }));
                      }}
                      style={{
                        width: "100%", background: "#111",
                        border: `1px solid ${errors.interest ? "#ef4444" : "rgba(255,255,255,0.1)"}`,
                        color: formState.interest ? "white" : "rgba(255,255,255,0.3)",
                        fontSize: "0.78rem", padding: "0.55rem 0.75rem",
                        outline: "none", cursor: "none",
                      }}
                    >
                      <option value="" style={{ background: "#111" }}>Select an option</option>
                      <option value="leasing" style={{ background: "#111" }}>Retail Leasing</option>
                      <option value="luxury" style={{ background: "#111" }}>Luxury / The Avenue</option>
                      <option value="sponsorship" style={{ background: "#111" }}>Sponsorship & Partnerships</option>
                      <option value="events" style={{ background: "#111" }}>Events & Venue Booking</option>
                      <option value="popup" style={{ background: "#111" }}>Pop-Up Activation</option>
                    </select>
                    {errors.interest && (
                      <p style={{ color: "#ef4444", fontSize: "0.58rem", marginTop: "0.2rem" }}>
                        {errors.interest}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "center", marginTop: "0.25rem" }}
                  >
                    Start the Conversation
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  border: "1px solid rgba(201,168,76,0.3)",
                  background: "rgba(201,168,76,0.04)",
                  padding: "3rem", textAlign: "center",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  minHeight: "320px"
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✨</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#C9A84C", fontSize: "1.8rem", marginBottom: "0.75rem"
                }}>
                  Thank You
                </h3>
                <p style={{
                  color: "rgba(255,255,255,0.5)", fontSize: "0.8rem",
                  lineHeight: 1.6, maxWidth: "240px"
                }}>
                  Our team will be in touch within 24 hours to discuss your opportunity at American Dream.
                </p>
                <div style={{
                  width: "36px", height: "1px",
                  background: "#C9A84C", margin: "1.25rem auto 1rem"
                }} />
                <p style={{
                  color: "rgba(255,255,255,0.2)", fontSize: "0.58rem",
                  letterSpacing: "0.2em", textTransform: "uppercase"
                }}>
                  Not a Mall. A Global Stage.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}