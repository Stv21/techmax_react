import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Slogan from './components/Slogan'
import About from './components/About'
import SolutionsSection from './components/Products'
import Partners from './components/Partners'
import Content from './components/Content'
import Footer from './components/Footer'
import './App.css'

// Lazy load heavy components
const Company = lazy(() => import('./components/Company'))
const Solutions = lazy(() => import('./components/Solutions'))
const MobilitySolutions = lazy(() => import('./components/MobilitySolutions'))
const EnterpriseSolutions = lazy(() => import('./components/EnterpriseSolutions'))
const AdvisorySolutions = lazy(() => import('./components/AdvisorySolutions'))
const ProfessionalSolutions = lazy(() => import('./components/ProfessionalSolutions'))
const Careers = lazy(() => import('./components/Careers'))
const NotFound = lazy(() => import('./components/NotFound'))

function HomePage() {
  return (
    <>
      <Slogan />
      <SolutionsSection />
      <Partners />
      <Content activeContent={null} />
    </>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const isDesktopPointer = () => {
      try {
        const finePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
        const notTouch = !('ontouchstart' in window) && !navigator.maxTouchPoints;
        return window.innerWidth > 768 && finePointer && notTouch;
      } catch (e) {
        return window.innerWidth > 768;
      }
    };
    // Add/remove class to html element based on route
    if (pathname === '/') {
      document.documentElement.classList.add('home-page');
    } else {
      document.documentElement.classList.remove('home-page');
    }
    
    // Handle hash scrolling for navigation
    if (hash && isDesktopPointer()) {
      // Desktop: Remove the # and scroll to element smoothly with header offset
      const scrollToWithHeaderOffset = (element, extra = 12) => {
        if (!element) return;
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 70;
        const y = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - extra;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      };

      const elementId = hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          scrollToWithHeaderOffset(element);
        }
      }, 200);
    } else {
      // On mobile/touch, avoid JS-driven scroll; force top only when appropriate
      if (isDesktopPointer()) {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      } else {
        // For mobile, do not run auto-scroll; allow native browser behavior
      }
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={
        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: 'linear-gradient(90deg, #fc4a1a 0%, #f7b733 100%)',
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: '600'
        }}>
          Loading...
        </div>
      }>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/mobility" element={<MobilitySolutions />} />
          <Route path="/solutions/enterprise" element={<EnterpriseSolutions />} />
          <Route path="/solutions/advisory" element={<AdvisorySolutions />} />
          <Route path="/solutions/professional" element={<ProfessionalSolutions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/company" element={<Company />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default App
