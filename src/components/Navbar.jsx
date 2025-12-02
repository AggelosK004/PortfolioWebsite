import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="20" y2="12"></line>
    <line x1="4" y1="6" x2="20" y2="6"></line>
    <line x1="4" y1="18" x2="20" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const menuItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <Toolbar sx={{ justifyContent: 'center', position: 'relative' }}>
        
        <Box 
          position={'fixed'}
          sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            gap: 1,
            backgroundColor: 'rgba(82, 109, 130, 0.5)', 
            padding: '8px 24px',
            borderRadius: '50px',
            border: '1px solid rgba(157, 178, 191, 0.2)',
            backdropFilter: 'blur(5px)',
          }}
        >
          {menuItems.map((item) => (
            <Button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)}
              sx={{ 
                color: '#DDE6ED',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                px: 2,
                position: 'relative',
                '&:hover': {
                  color: '#9DB2BF',
                  backgroundColor: 'transparent',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '0%',
                  height: '2px',
                  bottom: '5px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#9DB2BF',
                  transition: 'width 0.3s ease-in-out',
                },
                '&:hover::after': {
                  width: '70%',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <IconButton
          sx={{ 
            display: { xs: 'block', md: 'none' }, 
            color: '#9DB2BF',
            position: 'absolute',
            right: 16
          }}
          onClick={() => setMobileOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: '250px',
            backgroundColor: '#27374D',
            borderLeft: '1px solid #9DB2BF'
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#9DB2BF' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ mt: 2 }}>
          {menuItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton 
                onClick={() => scrollToSection(item.id)}
                sx={{
                  textAlign: 'center',
                  '&:hover': {
                    backgroundColor: 'rgba(157, 178, 191, 0.1)',
                  }
                }}
              >
                <ListItemText 
                  primary={item.label} 
                  primaryTypographyProps={{
                    sx: { 
                      color: '#DDE6ED', 
                      fontSize: '1.2rem',
                      fontWeight: 500
                    }
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}