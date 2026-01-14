import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Grid from '@mui/material/Grid';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'white', color: 'text.primary', py: 8, mt: 'auto', borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary.main">
              Pink Sky Travel
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Diseñamos experiencias de viaje auténticas en México, conectándote con la cultura, la naturaleza y la gente.
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
              Explora
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/destinations" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                  Destinos
                </Typography>
              </Link>
              <Link href="/catalogo" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                  Catálogo
                </Typography>
              </Link>
              <Link href="/bespoke" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                  A Medida
                </Typography>
              </Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                Términos
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                Privacidad
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8, pt: 4, borderTop: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <Typography variant="caption" color="text.secondary">
            &copy; {new Date().getFullYear()} Pink Sky Travel.
            </Typography>
            <Typography variant="caption" color="text.secondary">
            Hecho con ❤️ en México
            </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
