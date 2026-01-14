import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import { client } from '@/shared/api/sanity/client';
import { CATEGORIES_QUERY } from '@/shared/api/sanity/queries';

interface Category {
  _id: string;
  name: string;
  slug: { current: string };
  emoji: string;
}

const Hero = async () => {
  const categories = await client.fetch<Category[]>(CATEGORIES_QUERY);

  return (
    <Box component="section" sx={{ position: 'relative', width: '100%', mb: 8 }}>
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

      {/* Categories */}
      <Container maxWidth="lg" sx={{ mt: -10, position: 'relative', zIndex: 3 }}>
        <Grid container spacing={2}>
          {categories.map((cat) => (
            <Grid size={{ xs: 6, md: 3 }} key={cat._id}>
              <Link href={`/catalogo?categoria=${cat.slug.current}`} style={{ textDecoration: 'none' }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                      bgcolor: 'white'
                    },
                    height: '100%'
                  }}
                >
                  <Typography variant="h2" sx={{ mb: 1, fontSize: '2.5rem' }}>{cat.emoji}</Typography>
                  <Typography variant="subtitle1" fontWeight={700} color="text.primary">
                    {cat.name}
                  </Typography>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
