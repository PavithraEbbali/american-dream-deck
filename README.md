# American Dream — Interactive Sales Deck

> **"Not a Mall. A Global Stage."**

A cinematic, fully interactive browser-based sales deck for American Dream Mall, East Rutherford, NJ — the 2nd largest mall in the USA and North America's most powerful retail, entertainment, and events destination.

Built as a submission for the **Senior Frontend Engineer & AI-Powered Interactive Design** role at **LIAT.AI**.

---

## 🔗 Live Demo

[View Live Deck →](https://american-dream-deck-eta.vercel.app/)

---

## 🎯 What This Is

This is not a website. It is a **cinematic interactive sales engine** — a purpose-built tool that replaces static PDFs, fragmented slide decks, and manual sales presentations with a self-guided, immersive experience.

**Primary audience:** Prospective retail tenants, corporate sponsors, and event partners — decision-makers at brands, agencies, and production companies evaluating a presence at American Dream.

**Business objectives:**
- Drive retail leasing deals (flagship, luxury, pop-up, F&B)
- Drive sponsorship and brand partnership conversations
- Drive event bookings (concerts, activations, corporate events)

---

## 🏗️ Architecture

### Phase 1 — Core Interactive Overview
Eight fully animated slides covering the complete property story:

| Slide | Story Beat | Business Goal |
|---|---|---|
| Hero | Cinematic opening — scale, energy, ambition | Immediate emotional buy-in |
| Why Here | Location, demographics, regional reach | Build credibility |
| Retail | 450+ tenants, leasing opportunities | Drive leasing inquiries |
| Luxury | The Avenue — global luxury houses | Premium tenant acquisition |
| Dining | 65+ F&B concepts, culinary diversity | F&B leasing |
| Entertainment | Water park, theme park, ski, Dream Wheel | Differentiation |
| Events | Concerts, brand activations, sports, corporate | Event bookings |
| Contact | Three leasing paths + contact form | Drive action |

### Phase 2 — Expandable Sub-Modules
The architecture is fully modular and supports expansion:

- **Events Module** — 4 clickable tabs (Concerts, Brand Activations, Corporate Events, Sports & Fights) each with dedicated stats and booking CTA
- **Leasing Paths** — 4 expandable categories (Flagship, Luxury, Pop-Up, F&B) with tailored pitches
- **Sponsorship Module** — Partnership tiers with "Own the Moment. Own the Market." CTA
- **Entertainment Modules** — Dedicated tabs per venue (Water Park, Theme Park, Ski Slope, Dream Wheel)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Utility styling |
| Framer Motion | Slide transitions, animations |
| GSAP | Animation library (ready for ScrollTrigger integration) |
| CSS Custom Properties | Design system tokens |

---

## 🤖 AI Integration

AI was used as a **creative accelerator**, not a replacement for engineering judgment. Every AI output was critically evaluated, customized, and integrated into production-grade work.

| Tool | How I Used It |
|---|---|
| **Google Gemini** | Generated property imagery from custom prompts — then manually watermark-removed, color-graded, and optimized for web |
| **Leonardo.ai** | Generated luxury corridor backgrounds — selected best outputs from 10+ generations |
| **Claude AI** | Used as a senior engineering thought partner — architecture reviews, debugging, and creative direction |
| **ffmpeg** | Custom CLI scripts to trim, compress, and optimize 9 video clips to 720p web-ready format |

**What I actually built:**
- Designed the entire deck architecture and component structure from scratch
- Made all creative direction decisions — typography, color system, motion design
- Wrote and debugged all React/TypeScript components
- Curated and optimized all media assets
- Engineered the non-linear navigation system, form validation, and interactive tab modules
- Integrated AI outputs into a cohesive, premium experience

> AI tools saved time on asset generation. The thinking, decisions, and engineering were mine.

---

## 🎨 Design System

- **Primary Font:** Playfair Display (serif) — headings, stats, luxury feel
- **Secondary Font:** Inter — body text, labels, navigation
- **Gold:** `#C9A84C` — primary accent, CTAs, active states
- **Dark:** `#0A0A0A` — background base
- **Philosophy:** Luxury brand aesthetics (Apple, Hermès, Tesla) meets entertainment energy (Disney, Universal)

---

## 📁 Project Structure

## 📁 Project Structure

```
american-dream-deck/
├── app/
│   ├── layout.tsx          # Root layout, metadata
│   ├── page.tsx            # Deck shell, navigation logic
│   └── globals.css         # Design system, custom classes
├── components/
│   ├── deck/
│   │   └── DeckNav.tsx     # Top navbar + side dot navigation
│   ├── slides/
│   │   ├── HeroSlide.tsx
│   │   ├── WhyHereSlide.tsx
│   │   ├── RetailSlide.tsx
│   │   ├── LuxurySlide.tsx
│   │   ├── DiningSlide.tsx
│   │   ├── EntertainmentSlide.tsx
│   │   ├── EventsSlide.tsx
│   │   └── CTASlide.tsx
│   └── ui/
│       └── Cursor.tsx      # Custom gold cursor
└── public/
    └── media/
        ├── videos/         # 9 optimized MP4 clips (720p)
        └── images/         # AI-generated backgrounds
```
---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/PavithraEbbali/american-dream-deck.git

# Navigate to project
cd american-dream-deck

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Navigation
- **Scroll** — move between slides
- **Arrow keys** — keyboard navigation
- **Top navbar** — jump to any slide directly
- **Side dots** — visual position indicator
- **Logo click** — return to home

---

## 📹 Media Assets

All video clips are sourced from American Dream's official YouTube channel and trimmed to 7–14 second segments optimized for web performance.

All images are AI-generated using Google Gemini with custom prompts designed to match the property's aesthetic.

---

## 🎯 Key Interactions

- **Non-linear navigation** — viewer controls their own journey
- **Tab-based exploration** — Entertainment and Events slides have clickable sub-sections
- **Expandable leasing cards** — Retail slide accordion for each leasing category
- **Custom cursor** — Gold cursor with follower ring
- **Scroll + keyboard + touch** — full input support
- **Form validation** — Contact slide with real-time email validation

---

## 📊 Performance

- Lazy video loading with `preload="auto"` on hero
- Optimized 720p MP4 clips (avg 3–4MB per clip)
- Framer Motion exit animations prevent layout shift
- Dark background prevents flash of unstyled content

---

## 🔮 What I Would Improve With More Time

1. **GSAP ScrollTrigger** — scroll-controlled video playback on hero (cinematic reveal)
2. **Three.js** — 3D globe showing American Dream's regional catchment
3. **Dedicated sub-module pages** — full-screen Events, Sponsorship, and Leasing modules
4. **CMS integration** — headless CMS for sales team to update content without code
5. **Analytics** — track which slides prospects spend most time on
6. **PDF export** — generate a leave-behind PDF from the deck

---
