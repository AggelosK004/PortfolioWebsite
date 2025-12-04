import Box from '@mui/material/Box';
import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';
import About from './components/About.jsx';
import CVbutton from './components/CV/CVbutton.jsx';
import CV from './components/CV/Aggelos_Kolitsis_Resume_2025.pdf';

function App() {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      
      <ParticleBackground />
      
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CVbutton />
        <Contact />
        <Footer />
      </Box>
    </Box>
  );
}

export default App;