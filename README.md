# Saartech - React Website

A modern React application for Saartech, showcasing IT solutions and services with a focus on urban mobility and railway access systems.

## Features

- **Video Background Hero Section** - Dynamic video background with tagline
- **Responsive Navigation** - Multi-level dropdown navigation
- **About Section** - Company overview with feature highlights
- **Solutions Grid** - Interactive cards showcasing various IT solutions
- **Partners Section** - Display of technology partners
- **CSR Section** - Corporate Social Responsibility initiatives
- **Comprehensive Footer** - Contact information, social links, and newsletter subscription

## Tech Stack

- React 18.3
- Vite 5.4
- Modern ES6+ JavaScript
- CSS3 with animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will open at `http://localhost:5173/`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       - Navigation with dropdowns
│   ├── Hero.jsx         - Video background hero section
│   ├── About.jsx        - About company section
│   ├── Products.jsx     - Solutions/Services grid
│   ├── Partners.jsx     - Partner logos section
│   ├── CSR.jsx          - CSR section
│   ├── Content.jsx      - Dynamic content display
│   └── Footer.jsx       - Footer with contact info
├── App.jsx              - Main application component
├── main.jsx             - Application entry point
├── styles.css           - Global styles
└── index.css            - Base styles
```

## Components

### Header
Fixed navigation bar with dropdown menus for Company, Solutions, Partner, and Contact sections.

### Hero
Full-screen video background with overlay text and animated tagline.

### About
Company information with feature highlights and call-to-action button.

### Solutions
Grid of six solution cards with hover effects:
- Cyber Security
- Infrastructure Modernization
- Software Solutions
- Intelligent Devices
- Mobility
- Services

### Partners
Display of technology partners including HP, Texmaco, Atek, and SentinelOne.

### CSR
Corporate Social Responsibility section highlighting community initiatives.

### Footer
Comprehensive footer with:
- Contact information (address, phone, email)
- Useful links
- Social media connections
- Newsletter subscription

## License

Copyright © 2024 Saartech. All rights reserved.

