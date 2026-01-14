import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import LinkButton from '@/shared/ui/LinkButton';
import Navbar from '@/widgets/layout/ui/Navbar';
import Footer from '@/widgets/layout/ui/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Destinos | Pink Sky Travel',
  description: 'Explora nuestros destinos favoritos en México. Desde Pueblos Mágicos hasta playas paradisíacas.',
};

const destinations = [
  {
    name: 'Ciudad de México',
    slug: 'ciudad-de-mexico',
    image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80',
    description: 'La vibrante capital, llena de historia, arte y gastronomía.',
  },
  {
    name: 'Oaxaca',
    slug: 'oaxaca',
    image: 'https://images.unsplash.com/photo-1569931726058-29472e39194e?auto=format&fit=crop&q=80',
    description: 'Cuna de la cultura zapoteca, el mezcal y los alebrijes.',
  },
  {
    name: 'Yucatán',
    slug: 'yucatan',
    image: 'https://images.unsplash.com/photo-1546288339-38b8c2c73024?auto=format&fit=crop&q=80',
    description: 'Cenotes, ruinas mayas y haciendas históricas.',
  },
  {
    name: 'Baja California',
    slug: 'baja-california',
    image: 'https://images.unsplash.com/photo-1552598818-8f5b40cb0372?auto=format&fit=crop&q=80',
    description: 'Viñedos en Valle de Guadalupe y playas vírgenes.',
  },
];

export default function DestinationsPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom sx={{ color: 'secondary.main', mb: 1 }}>
            Nuestros Destinos
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
            Descubre la magia de México a través de nuestras regiones favoritas.
          </Typography>

          <Grid container spacing={4}>
            {destinations.map((dest) => (
              <Grid size={{ xs: 12, md: 6 }} key={dest.slug}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={dest.image}
                    alt={dest.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h4" component="h2" color="secondary.main">
                      {dest.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {dest.description}
                    </Typography>
                    <LinkButton
                        href={`/destinations/${dest.slug}`}
                        variant="outlined"
                        color="primary"
                    >
                        Ver Tours
                    </LinkButton>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
