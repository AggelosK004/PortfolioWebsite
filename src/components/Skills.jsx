import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt, FaReact } from 'react-icons/fa';

export default function Skills() {
  const skillStack = [
    { name: 'JavaScript', icon: FaJsSquare, color: '#9DB2BF' },
    { name: 'HTML5', icon: FaHtml5, color: '#9DB2BF' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#9DB2BF' },
    { name: 'Git', icon: FaGitAlt, color: '#9DB2BF' },
    { name: 'React', icon: FaReact, color: '#9DB2BF' },
  ];

  return (
    <Box id="skills" sx={{ py: { xs: 4, sm: 6, md: 8 }, px: 2 }}>
      <Card
        sx={{
          backgroundColor: '#526D82',
          maxWidth: '900px',
          margin: '0 auto',
          padding: { xs: '20px 15px', sm: '25px 20px', md: '30px 20px' },
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
          borderRadius: '10px',
          border: '2px solid #9DB2BF',
        }}
      >
        <Typography 
          variant="h3" 
          sx={{ 
            color: '#9DB2BF', 
            mb: 2, 
            textAlign: 'center',
            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Skills
        </Typography>
        <Box sx={{ width: '100%', height: '1px', backgroundColor: '#9DB2BF', mb: { xs: 3, sm: 4 } }} />
        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} sx={{ justifyContent: 'center' }}>
          {skillStack.map((skill) => (
            <Grid item xs={6} sm={4} md={2} key={skill.name}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: { xs: '15px', sm: '18px', md: '20px' },
                  border: '1px solid rgba(157, 178, 191, 0.3)',
                  borderRadius: '8px',
                  backgroundColor: '#27374D',
                }}
              >
                <skill.icon size={50} color={skill.color} />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#DDE6ED', 
                    mt: 1,
                    fontSize: { xs: '0.75rem', sm: '0.875rem' }
                  }}
                >
                  {skill.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
}