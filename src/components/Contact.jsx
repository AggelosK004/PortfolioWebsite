import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    const subject = `Portfolio message from ${formData.name || 'Visitor'}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailto = `mailto:aggelosk2004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setFormData({ name: '', email: '', message: '' });
  };

  const colors = {
    darkest: '#27374D', 
    dark: '#526D82',  
    accent: '#9DB2BF',  
    light: '#DDE6ED',   
  };

  return (
    <Box id="contact" sx={{ py: { xs: 4, sm: 6, md: 8 }, px: 2, mb: { xs: 4, sm: 6, md: 8 } }}>
      <Box sx={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Typography 
          variant="h3" 
          sx={{ 
            textAlign: 'center', 
            mb: 2, 
            color: colors.light,
            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Get In Touch
        </Typography>
        <Box sx={{ width: { xs: '80px', sm: '100px' }, height: '3px', backgroundColor: colors.accent, margin: '0 auto', mb: { xs: 4, sm: 5, md: 6 } }} />

        <Grid container spacing={{ xs: 3, sm: 3, md: 4 }} sx={{ justifyContent: 'center' }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                padding: { xs: '20px', sm: '25px', md: '30px' },
                backgroundColor: colors.dark,
                border: `2px solid ${colors.accent}`,
                borderRadius: '10px',
                height: '100%',
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  color: colors.light, 
                  mb: 3,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' }
                }}
              >
                Contact Information
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FaEnvelope size={24} color={colors.accent} />
                <Typography 
                  variant="body1" 
                  sx={{ 
                    ml: 2, 
                    color: colors.light,
                    fontSize: { xs: '0.875rem', sm: '1rem' }
                  }}
                >
                  aggelosk2004@gmail.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FaPhone size={24} color={colors.accent} />
                <Typography 
                  variant="body1" 
                  sx={{ 
                    ml: 2, 
                    color: colors.light,
                    fontSize: { xs: '0.875rem', sm: '1rem' }
                  }}
                >
                  +30 694 653 9001
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <MdLocationOn size={24} color={colors.accent} />
                <Typography 
                  variant="body1" 
                  sx={{ 
                    ml: 2, 
                    color: colors.light,
                    fontSize: { xs: '0.875rem', sm: '1rem' }
                  }}
                >
                  Thessaloniki, Greece
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: { xs: 1.5, sm: 2 }, mt: 4, flexWrap: 'wrap' }}>
                <Button
                  variant="outlined"
                  startIcon={<FaGithub />}
                  href="https://github.com/AggelosK004"
                  target="_blank"
                  sx={{ 
                    color: colors.light, 
                    borderColor: colors.accent,
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                    padding: { xs: '6px 12px', sm: '6px 16px' },
                    '&:hover': {
                      borderColor: colors.light,
                      backgroundColor: 'rgba(157, 178, 191, 0.2)',
                    }
                  }}
                >
                  GitHub
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<FaLinkedin />}
                  href="https://www.linkedin.com/in/aggelos-kolitsis-72651b296/"
                  target="_blank"
                  sx={{ 
                    color: colors.light, 
                    borderColor: colors.accent,
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                    padding: { xs: '6px 12px', sm: '6px 16px' },
                    '&:hover': {
                      borderColor: colors.light,
                      backgroundColor: 'rgba(157, 178, 191, 0.2)',
                    }
                  }}
                >
                  LinkedIn
                </Button>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                padding: { xs: '20px', sm: '25px', md: '30px' },
                backgroundColor: colors.dark,
                border: `2px solid ${colors.accent}`,
                borderRadius: '10px',
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  color: colors.light, 
                  mb: 3,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' }
                }}
              >
                Send a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      color: colors.light,
                      '& fieldset': { borderColor: colors.accent },
                      '&:hover fieldset': { borderColor: colors.light },
                      '&.Mui-focused fieldset': { borderColor: colors.light },
                    },
                    '& .MuiInputLabel-root': { color: colors.accent },
                    '& .MuiInputLabel-root.Mui-focused': { color: colors.light },
                    '& .MuiOutlinedInput-input': {
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      color: colors.light,
                      '& fieldset': { borderColor: colors.accent },
                      '&:hover fieldset': { borderColor: colors.light },
                      '&.Mui-focused fieldset': { borderColor: colors.light },
                    },
                    '& .MuiInputLabel-root': { color: colors.accent },
                    '& .MuiInputLabel-root.Mui-focused': { color: colors.light },
                    '& .MuiOutlinedInput-input': {
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      color: colors.light,
                      '& fieldset': { borderColor: colors.accent },
                      '&:hover fieldset': { borderColor: colors.light },
                      '&.Mui-focused fieldset': { borderColor: colors.light },
                    },
                    '& .MuiInputLabel-root': { color: colors.accent },
                    '& .MuiInputLabel-root.Mui-focused': { color: colors.light },
                    '& .MuiOutlinedInput-input': {
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ 
                    backgroundColor: colors.accent, 
                    color: colors.darkest,
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    padding: { xs: '8px', sm: '10px' },
                    fontWeight: 'bold',
                    '&:hover': { 
                      backgroundColor: colors.light 
                    } 
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}