# Bahwan Motors

**Premium Lexus LX 600 & Toyota GXR showcase for the Gulf luxury automotive market.**

🔗 **Live site:** [bahwan-motors.vercel.app](https://bahwan-motors.vercel.app)

A high-end vehicle showcase site built for the Gulf luxury car market, featuring interactive 3D vehicle viewing, multi-region variant catalogs, and full English/Arabic localization.

---

## Features

- 🚗 **Interactive vehicle catalog** — Browse Lexus LX 600 and Toyota GXR variants (BB, VIP, and more), each sourced from different regional dealers (Saudi Arabia, Braimi/Oman, Kuwait)
- 🎮 **3D car viewer** — Real-time, interactive 3D vehicle models powered by Three.js / React Three Fiber
- 🌍 **Full localization** — Seamless English ⇄ Arabic switching (i18next), including RTL-ready UI
- 🎬 **Cinematic UX** — Animated route transitions, intro loader, and mouse-glow interactions for a premium feel (Framer Motion)
- 📋 **Detailed spec sheets** — Per-variant specs (engine, power, torque, drivetrain, 0–100 km/h, seating) and available color options
- 📞 **Direct contact integration** — Click-to-call, WhatsApp/Snapchat/social links for instant lead capture
- 📱 **Fully responsive** — Optimized for mobile, tablet, and desktop
- 🧩 **Modern component system** — Built on shadcn/ui + Radix primitives for consistent, accessible UI

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Language | TypeScript |
| Styling | Tailwind CSS + tailwindcss-animate |
| UI Components | shadcn/ui (Radix UI primitives) |
| Animation | Framer Motion |
| 3D Rendering | Three.js + React Three Fiber + drei |
| Routing | React Router DOM |
| Localization | i18next + react-i18next |
| Forms & Validation | React Hook Form + Zod |
| Data Fetching | TanStack Query |
| Icons | Lucide React |

## Project Structure

```
src/
├── components/         # Feature components (Hero, About, Contact, CarCatalog, etc.)
│   ├── Car3DViewer.tsx    # Interactive 3D model viewer
│   ├── VariantSlider.tsx  # Vehicle variant comparison/selection
│   ├── AnimatedRoutes.tsx # Page transition orchestration
│   └── ui/                # shadcn/ui component library
├── pages/
│   ├── Index.tsx          # Landing page
│   └── CarDetailPage.tsx  # Individual vehicle detail view
├── data/
│   └── carData.ts         # Vehicle catalog data (variants, specs, colors, pricing)
├── i18n/
│   └── locales/           # en.json / ar.json translation files
├── hooks/                  # Custom React hooks
└── lib/                    # Utilities
```

## Getting Started

**Prerequisites:** Node.js 18+ and npm (or Bun)

```bash
# Clone the repo
git clone https://github.com/mohammedfaiz3768/bahwan-motors.git
cd bahwan-motors

# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

The app will be available at `http://localhost:5173` by default.

## Deployment

This project is deployed on [Vercel](https://vercel.com) with automatic builds from the `main` branch.

## Adapting This for a New Client

This codebase is built as a reusable showcase template — swapping in a new dealership's branding, inventory, and contact details is fast:

1. Update `src/data/carData.ts` with the new vehicle/product catalog
2. Replace assets in `src/assets/` with the client's media
3. Update `src/i18n/locales/en.json` and `ar.json` (or add new locales) with client copy
4. Update contact details and social links in `src/components/Contact.tsx`
5. Update branding in `index.html` and `src/assets/logo.png`

## Contact

Built by **Mohammed Faiz Ahmed**
📧 faizahmed1605@gmail.com
🔗 [github.com/mohammedfaiz3768](https://github.com/mohammedfaiz3768)
