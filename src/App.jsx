import { useState } from 'react'
import Header from './components/Header'
import Slogan from './components/Slogan'
import About from './components/About'
import Solutions from './components/Products'
import Partners from './components/Partners'
import Content from './components/Content'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeContent, setActiveContent] = useState(null);
  
  const handleSubItemClick = (content) => {
    setActiveContent(content);
  };
  
  return (
    <>
      <Slogan />
      <Header onSubItemClick={handleSubItemClick} />
      <About />
      <Solutions />
      <Partners />
      <Content activeContent={activeContent} />
      <Footer />
    </>
  )
}

export default App
