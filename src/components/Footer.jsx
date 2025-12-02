import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  const colors = {
    darkest: 'rgba(39, 55, 77, 0)', 
    accent: '#9DB2BF',  
    light: '#DDE6ED',   
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'rgba(82, 109, 130, 0)',
          maxWidth: '300px',
          margin: '0 auto',
          padding: { xs: '20px 15px', sm: '25px 20px', md: '30px 20px' },
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
          borderRadius: '10px',
          border: '2px solid #9DB2BF'
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: colors.light,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          fontSize: { xs: '0.875rem', sm: '1rem' },
          textShadow: '0 0 20px rgba(157, 178, 191, 0.6)',
        }}
      >
        Made by Aggelos Kolitsis with <FaHeart color={colors.accent} size={16} />
      </Typography>
    </Box>
  );
}