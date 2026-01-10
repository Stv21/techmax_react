# SAARTECH - Advanced AFC Solutions

A modern, production-ready React application for SAARTECH, showcasing advanced Automatic Fare Collection (AFC) solutions for metro, BRT, and urban transit networks.

## 🚀 Features

- **Modern React Stack**: Built with React 19, Vite 7, and React Router 7
- **Responsive Design**: Fully responsive across all devices
- **Optimized Performance**: Code splitting, lazy loading, and optimized assets
- **SEO Ready**: Comprehensive meta tags and Open Graph support
- **Production Optimized**: Minified, tree-shaken, and production-ready builds
- **Horizontal Timeline**: Interactive company history timeline
- **Team Showcase**: Professional team member profiles
- **Solutions Grid**: AFC solutions and products showcase

## 📋 Prerequisites

- Node.js 20.x or higher
- npm or yarn

## 🛠️ Installation

```bash
# Install dependencies
npm install
```

## 🏃 Development

```bash
# Start development server
npm run dev

# Server will run on http://localhost:3000
```

## 🏗️ Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 📦 Project Structure

```
techmax_react/
├── public/              # Static assets
│   ├── img/            # Images
│   └── video/          # Videos
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Company.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   └── ...
│   ├── assets/         # Component assets
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── *.css           # Stylesheets
├── dist/               # Production build output
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## 🚀 Deployment

### Netlify
```bash
# Already configured via netlify.toml
# Connect your repository and deploy
```

### Vercel
```bash
# Already configured via vercel.json
# Connect your repository and deploy
```

### Manual Deployment
```bash
npm run build
# Upload the dist/ folder to your hosting service
```

## 🔧 Configuration

- **Vite Config**: `vite.config.js` - Build optimization and dev server configuration
- **Environment Variables**: `.env.production` and `.env.development`
- **Deployment**: `netlify.toml` and `vercel.json` for platform-specific settings

## 📱 Components

### Pages
- **Home**: Hero section, about, solutions, partners showcase
- **Company**: Mission & vision, team, company history timeline

### Core Components
- **Header**: Navigation with dropdown menus
- **Footer**: Contact information, quick links, newsletter
- **Products**: AFC solutions showcase
- **Partners**: Technology partner logos
- **Content**: Dynamic content sections

## 🎨 Styling

- Custom CSS with modern gradients
- Responsive design patterns  
- Smooth animations and transitions
- Mobile-first approach
- Orange gradient theme (#fc4a1a to #f7b733)

## 🔐 Security Headers

Production builds include security headers:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy

## 📊 Performance Optimizations

- **Code Splitting**: Vendor chunks separated (React, Router)
- **Asset Optimization**: Images and CSS optimized
- **Tree Shaking**: Unused code removed
- **Minification**: Terser for JS, optimized CSS
- **Console Removal**: All console logs removed in production
- **Caching**: Immutable cache headers for static assets

## 🌐 SEO Features

- Comprehensive meta tags
- Open Graph protocol support
- Twitter Card integration
- Semantic HTML structure
- Descriptive titles and descriptions
- Search engine friendly URLs

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔄 Version

Current Version: 1.0.0

## 📄 License

Proprietary - SAARTECH

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

