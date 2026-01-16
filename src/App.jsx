import { useState, useEffect, lazy, Suspense } from 'react'
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
const NotFound = lazy(() => import('./components/NotFound'))

function HomePage({ onSubItemClick }) {
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
  const { pathname } = useLocation();

  useEffect(() => {
    // Add/remove class to html element based on route
    if (pathname === '/') {
      document.documentElement.classList.add('home-page');
    } else {
      document.documentElement.classList.remove('home-page');
    }
    
    // Force scroll to top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

function App() {
  const [activeContent, setActiveContent] = useState(null);
  
  const handleSubItemClick = (content) => {
    setActiveContent(content);
  };
  
  return (
    <Router>
      <ScrollToTop />
      <Header onSubItemClick={handleSubItemClick} />
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
          <Route path="/" element={<HomePage onSubItemClick={handleSubItemClick} />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/company" element={<Company />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default App
