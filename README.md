# Sere Innovations Landing Page

A premium, single-page landing website for **Sere Innovations**, an agri-tech brand. The project follows the "Digital Agronomist" design philosophy, focusing on a clean, grounded, and trustworthy experience for the modern farmer.

**Key Design Principles:**
- **The "No-Line" Rule:** Boundaries are defined by background shifts, not borders.
- **Organic Asymmetry:** Layouts that feel natural and breathable.
- **Tonal Layering:** Depth achieved through soft color contrasts.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Fonts:** [Manrope](https://fonts.google.com/specimen/Manrope) (Headlines) & [Public Sans](https://fonts.google.com/specimen/Public+Sans) (Body)
- **Icons/Visuals:** SVG-based illustrations for resolution independence.

## 📂 Directory Structure

```text
├── app/
│   ├── globals.css          # Design tokens, Tailwind @theme, and utility classes
│   ├── layout.tsx           # Root layout with Google Fonts and SEO metadata
│   └── page.tsx             # Main entry point composing all 9 sections
├── components/
│   ├── Navbar.tsx           # Glassmorphic sticky navigation
│   ├── Hero.tsx             # Hero section with primary CTA
│   ├── Problem.tsx          # Pain points for modern farmers
│   ├── Solution.tsx         # The Sere Innovations value proposition
│   ├── Features.tsx         # Grid of 6 core hardware/software features
│   ├── Benefits.tsx         # Scannable list of business advantages
│   ├── Trust.tsx            # Credibility and brand promise
│   ├── Audience.tsx         # Target segments (Poultry, Dairy, Horticulture)
│   ├── CTA.tsx              # Final conversion section
│   └── Footer.tsx           # Contact details and brand grounding
└── public/                  # Static assets - product image
```

## ✨ Features

- **9 Isolated Sections:** Highly modular components for easy maintenance.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop.
- **Glassmorphism:** Elegant blur effects on the sticky navigation bar.
- **Custom Design Tokens:** bespoke color palette (`surface`, `primary-fixed-dim`, etc.) defined in Tailwind.
- **SEO Optimized:** Semantic HTML5 tags and meta description implementation.

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/tejasg99/sere-innovations.git
cd sere-innovations
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

