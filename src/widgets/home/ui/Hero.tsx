"use client";

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { keyframes } from '@mui/material/styles';

const WORDS = ['Real', 'Auténtico', 'Mágico', 'Único'];

const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
        <Box
          autoPlay
          loop
          muted
          playsInline
          component="video"
          src="/Hero.webm"
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />

        {/* Gradient Overlay */}
        <Box sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
          zIndex: 1
        }} />

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
          }}>Descubre el México</Typography>
          <Typography variant="h1" component="h1" sx={{
            color: 'white',
            mb: 3,
            fontSize: { xs: '3rem', md: '4.5rem' },
            letterSpacing: '-0.02em',
            lineHeight: 1.1
          }}>
            <Box
              component="span"
              key={WORDS[index]}
              sx={{
                color: 'secondary.main',
                display: 'inline-block',
                animation: `${slideUp} 0.5s ease-out`
              }}
            >
              {WORDS[index]}
            </Box>
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
