'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from 'next/link';

const categories = [
  { name: 'Pueblos Mágicos', slug: 'pueblos-magicos', emoji: '🏘️' },
  { name: 'Playa', slug: 'playa', emoji: '🏖️' },
  { name: 'Gastronomía', slug: 'gastronomia', emoji: '🌮' },
  { name: 'Aventura', slug: 'aventura', emoji: '🧗' },
];

const Hero = () => {
  return (
    <Box component="section" sx={{ position: 'relative', width: '100%' }}>
      {/* Video Background Placeholder */}
      <Box sx={{
        width: '100%',
        height: '60vh',
        bgcolor: 'grey.300',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.4)', zIndex: 1 }} />
        <Typography variant="h6" sx={{ zIndex: 2, color: 'white', fontWeight: 'bold' }}>
          [ Video Hero Placeholder ]
        </Typography>
        <Box sx={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          textAlign: 'center',
          px: 2
        }}>
          <Typography variant="h2" component="h1" sx={{ color: 'white', fontWeight: 'bold', mb: 2, textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}>
            Descubre el México <Box component="span" sx={{ color: 'secondary.main' }}>Real</Box>
          </Typography>
          <Typography variant="h5" sx={{ color: 'white', mb: 4, maxWidth: 600, textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}>
            Experiencias auténticas diseñadas para ti.
          </Typography>
        </Box>
      </Box>

      {/* Categories */}
      <Container maxWidth="lg" sx={{ mt: -8, position: 'relative', zIndex: 3 }}>
        <Grid container spacing={2}>
          {categories.map((cat) => (
            <Grid size={{ xs: 6, md: 3 }} key={cat.slug}>
              <Paper
                component={Link}
                href={`/catalogo?categoria=${cat.slug}`}
                elevation={3}
                sx={{
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.05)' },
                  height: '100%'
                }}
              >
                <Typography variant="h3" sx={{ mb: 1 }}>{cat.emoji}</Typography>
                <Typography variant="subtitle1" fontWeight="bold" color="primary.main" align="center">
                  {cat.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
