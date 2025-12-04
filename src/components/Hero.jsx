import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const font = "'Orbitron', sans-serif";

  useEffect(() => {
    const messages = ["Full-Stack Developer", "Problem Solver"];
    const handleType = () => {
      const i = loopNum % messages.length;
      const fullText = messages[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        pt: '64px',
        px: { xs: 3, sm: 4, md: 8 },
        textAlign: 'center', 
        overflow: 'hidden'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography 
          variant="h6" 
          sx={{ fontFamily:font,color: '#9DB2BF', fontWeight: 'bold', letterSpacing: 2, mb: 2, textTransform: 'uppercase' }}
        >
          Hi There, I'm
        </Typography>

        <Typography 
          variant="h1" 
          sx={{ 
            
            fontSize: { xs: '3rem', sm: '4.5rem', md: '5.5rem' }, 
            fontWeight: 'bold',
            color: '#DDE6ED',
            mb: 2,
            textShadow: '0 0 20px rgba(157, 178, 191, 0.6)'
          }}
        >
          Aggelos Kolitsis
        </Typography>

        <Typography 
          variant="h4" 
          sx={{ 
            
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            color: '#DDE6ED', 
            mb: 4,
            minHeight: '60px'
          }}
        >
          I am a{' '}
          <span style={{ color: '#9DB2BF', fontWeight: 'bold' }}>
            {text}
          </span>
          <span style={{ animation: 'blink 1s infinite' }}>|</span>
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            
            color: '#9DB2BF', 
            maxWidth: '700px',
            fontSize: { xs: '1rem', md: '1.2rem' },
            mb: 5,
            lineHeight: 1.8,
          }}
        >
          Passionate about creating modern, responsive, and user-friendly web applications. 
          Let's turn your ideas into reality.
        </Typography>

        
        <Box sx={{ display: 'flex', gap: 3, mb: 5, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button 
            variant="contained" 
            onClick={() => scrollToSection('projects')}
            sx={{ 
              backgroundColor: '#9DB2BF', 
              color: '#27374D',
              fontWeight: 'bold',
              px: 5,
              py: 1.5,
              
              fontSize: '1rem',
              '&:hover': { backgroundColor: '#526D82' }
            }}
          >
            View My Work
          </Button>
          <Button 
            variant="outlined" 
            onClick={() => scrollToSection('contact')}
            sx={{ 
              borderColor: '#9DB2BF', 
              color: '#9DB2BF',
              fontWeight: 'bold',
              px: 5,
              py: 1.5,
              
              fontSize: '1rem',
              '&:hover': { 
                backgroundColor: 'rgba(157, 178, 191, 0.1)',
                borderColor: '#9DB2BF'
              }
            }}
          >
            Contact Me
          </Button>
        </Box>
       
        <Box sx={{ display: 'flex', gap: 4 }}>
          {[
            { icon: FaGithub, href: "https://github.com/AggelosK004" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/aggelos-kolitsis-72651b296/" },
            { icon: FaEnvelope, href: "mailto:aggelosk2004@gmail.com" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#9DB2BF', scale: 1.2 }}
              style={{ color: '#DDE6ED', fontSize: '28px', transition: 'all 0.3s' }}
            >
              <item.icon />
            </motion.a>
          ))}
        </Box>
      </motion.div>

      <style>
        {`
          @keyframes blink {
            50% { opacity: 0; }
          }
        `}
      </style>
    </Box>
  );
}