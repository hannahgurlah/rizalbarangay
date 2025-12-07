# Barangay Rizal - Official Website

A modern, responsive website for Barangay Rizal, Municipality of Pinamungajan, Cebu built with Next.js, React, and Tailwind CSS.

🌐 **Live Site**: [https://brgyrizal.vercel.app](https://brgyrizal.vercel.app)

## Features

- 🏠 **Home Page** - Welcome section with hero banner
- 📖 **Our Barangay** - History, demographics, and officials
- 🛠️ **Barangay Services** - Comprehensive list of barangay services
- 💻 **Online Services** - Online service requests and certificates
- 📋 **Resources** - Ordinances and resolutions
- 📰 **News and Events** - Latest news and upcoming events
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI** - Beautiful and user-friendly interface

## Pages

- `/` - Home page
- `/our-barangay` - Barangay profile, demographics, history, and officials
- `/barangay-services` - Main services page
  - `/barangay-services/lupon` - Lupon Tagapamayapa services
  - `/barangay-services/health` - Health services
  - `/barangay-services/education` - Education services
  - `/barangay-services/social-services` - Social services
  - `/barangay-services/sports-events` - Sports and events facilities
- `/online-services` - Online service requests
- `/resources` - Ordinances and resolutions
- `/news-events` - News and events

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - UI library

## Project Structure

```
brgyrizal/
├── app/
│   ├── barangay-services/    # Barangay services pages
│   ├── online-services/       # Online services page
│   ├── our-barangay/         # Barangay profile page
│   ├── resources/            # Resources page
│   ├── news-events/         # News and events page
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # React components
├── public/                  # Static assets
└── package.json
```

## Deployment

This project is deployed on Vercel and automatically updates when changes are pushed to the main branch.

- **Production URL**: [https://brgyrizal.vercel.app](https://brgyrizal.vercel.app)
- **Vercel Dashboard**: [View deployments](https://vercel.com/hannah-panares-projects/brgyrizal)

## License

This project is open source and available for use.

