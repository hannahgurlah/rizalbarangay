# Barangay Rizal - Official Website

A modern, responsive website for Barangay Rizal built with Next.js, React, and Tailwind CSS.

## Features

- 🏠 **Home Page** - Welcome section with hero banner
- 📖 **About Section** - History, mission, and vision of the barangay
- 🛠️ **Services** - Comprehensive list of barangay services
- 👥 **Officials** - Meet the barangay officials
- 📞 **Contact** - Contact information and inquiry form
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI** - Beautiful and user-friendly interface

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

## Project Structure

```
brgyrizal/
├── app/
│   ├── layout.tsx      # Root layout with navbar and footer
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Services.tsx    # Services section
│   ├── Officials.tsx  # Officials section
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer component
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Customization

You can easily customize the content by editing the component files:
- Update barangay information in `components/About.tsx`
- Modify services in `components/Services.tsx`
- Change officials in `components/Officials.tsx`
- Update contact details in `components/Contact.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - UI library

## License

This project is open source and available for use.

