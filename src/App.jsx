import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Slogan from './components/Slogan'
import About from './components/About'
import Solutions from './components/Products'
import Partners from './components/Partners'
import Content from './components/Content'
import Footer from './components/Footer'
import Company from './components/Company'
import './App.css'

function HomePage({ onSubItemClick }) {
  return (
    <>
      <Slogan />
      <About />
      <Solutions />
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
      <Routes>
        <Route path="/" element={<HomePage onSubItemClick={handleSubItemClick} />} />
        <Route path="/company" element={<Company />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
