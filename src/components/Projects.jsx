import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../data/projectsData';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <Box id="projects"  sx={{ py: { xs: 4, sm: 6, md: 8 }, px: 2 }}>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Typography 
          variant="h3" 
          sx={{ 
            textAlign: 'center', 
            mb: 2, 
            color: '  #9DB2BF',
            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Projects
        </Typography>
        <Box sx={{ width: { xs: '80px', sm: '100px' }, height: '3px', backgroundColor: '#9DB2BF', margin: '0 auto', mb: { xs: 4, sm: 5, md: 6 } }} />
        
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ justifyContent: 'center' }}>
          {projectsData.map((project, index) => (
            <Grid item xs={12} sm={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display:'flex',
                    flexDirection: 'column',
                    backgroundColor: '#526D82',
                    border: '2px solid #9DB2BF',
                    borderRadius: '10px',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, padding: { xs: '20px', sm: '25px', md: '30px' } }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: '#9DB2BF', 
                        mb: 2,
                        fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#DDE6ED', 
                        mb: 3, 
                        lineHeight: 1.7,
                        fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem' }
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {project.technologies.map((tech, i) => (
                        <Typography
                          key={i}
                          variant="caption"
                          sx={{
                            backgroundColor: '#27374D',
                            color: '#9DB2BF',
                            padding: { xs: '4px 8px', sm: '6px 12px' },
                            borderRadius: '4px',
                            border: '1px solid rgba(157, 178, 191, 0.3)',
                            fontSize: { xs: '0.7rem', sm: '0.75rem' }
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: { xs: 1.5, sm: 2 }, flexWrap: 'wrap' }}>
                      {project.github && (
                        <Button
                          variant="outlined"
                          startIcon={<FaGithub />}
                          href={project.github}
                          target="_blank"
                          sx={{ 
                            color: '#9DB2BF', 
                            borderColor: '#9DB2BF',
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            padding: { xs: '6px 12px', sm: '6px 16px' },
                            '&:hover': {
                              borderColor: '#9DB2BF',
                              backgroundColor: 'rgba(157, 178, 191, 0.1)',
                            }
                          }}
                        >
                          Code
                        </Button>
                      )}
                      {project.live && (
                        <Button
                          variant="contained"
                          startIcon={<FaExternalLinkAlt />}
                          href={project.live}
                          target="_blank"
                          sx={{ 
                            backgroundColor: '#9DB2BF', 
                            color: '#27374D',
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            padding: { xs: '6px 12px', sm: '6px 16px' },
                            '&:hover': {
                              backgroundColor: '#526D82',
                            }
                          }}
                        >
                          Live Demo
                        </Button>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}