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
        backgroundColor: colors.darkest, 
        border: `2px solid ${colors.accent}`,
        mt: 4,
        mb: 4,
        ml: 70,
        mr: 70,
        py: { xs: 2, sm: 3 },
        textAlign: 'center',
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