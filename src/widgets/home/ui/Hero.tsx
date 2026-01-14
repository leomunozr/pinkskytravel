import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Hero = () => {
  return (
    <Box component="section" sx={{ position: 'relative', width: '100%' }}>
      {/* Video Background Placeholder */}
      <Box sx={{
        width: '100%',
        height: '70vh', // Slightly taller
        bgcolor: 'grey.900',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Gradient Overlay */}
        <Box sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
            zIndex: 1
        }} />

        <Typography variant="h6" sx={{ zIndex: 2, color: 'rgba(255,255,255,0.3)', fontWeight: 'bold', letterSpacing: 2 }}>
          [ VIDEO PLACEHOLDER ]
        </Typography>

        <Container maxWidth="md" sx={{
          position: 'absolute',
          zIndex: 2,
          textAlign: 'center',
        }}>
          <Typography variant="h1" component="h1" sx={{
            color: 'white',
            mb: 3,
            fontSize: { xs: '3rem', md: '4.5rem' },
            letterSpacing: '-0.02em',
            lineHeight: 1.1
          }}>
            Descubre el México <Box component="span" sx={{ color: 'secondary.main' }}>Real</Box>
          </Typography>
          <Typography variant="h5" sx={{
            color: 'rgba(255,255,255,0.9)',
            mb: 0,
            fontWeight: 400,
            maxWidth: 600,
            mx: 'auto'
          }}>
            Experiencias auténticas diseñadas para ti.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
