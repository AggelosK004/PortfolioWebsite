import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';


export default function About() {
   return (
    <Box id="about" sx={{
        py: { xs: 4, sm: 6, md: 8 },
        px: 2,
        maxWidth: '900px',
        marginTop: '100px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '150px',
        height: '100%',
        padding: { xs: '20px 15px', sm: '25px 20px', md: '30px 150px' },
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        borderRadius: '10px',
        border: '2px solid #9DB2BF',
        backgroundColor: '#526D82',
        
    }}>
      <Typography 
          variant="h3" 
          sx={{ 
            color: '#9DB2BF', 
            mb: 2, 
            textAlign: 'center',
            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          About Me
        </Typography>
        <Box sx={{ flexDirection:'column',width: '100%', height: '1px', backgroundColor: '#9DB2BF', mb: { xs: 3, sm: 4 } }} />
        <Typography 
          variant="body1"
            sx={{
                color: '#E1E5EA',
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                lineHeight: 1.8,
                textAlign: 'center',
                mb: 4,
            }}
        >
           I’m Aggelos — a full-stack developer and Applied Informatics student at the University of Macedonia in Thessaloniki.
           I love building modern, responsive web apps using React, JavaScript, and whatever tools help bring great ideas to life.
           I’m all about clean code, smooth UX, and constantly leveling up my skills. 
           There’s always a new challenge to tackle, and I’m always excited to take it on.     
        </Typography>
        
    </Box>
   )
}

