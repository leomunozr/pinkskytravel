import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Navbar from '@/widgets/layout/ui/Navbar';
import Footer from '@/widgets/layout/ui/Footer';
import { Metadata } from 'next';
import { client } from '@/shared/api/sanity/client';
import { FEATURED_DESTINATIONS_QUERY } from '@/shared/api/sanity/queries';
import { Destino } from '@/shared/types/destino';

export const metadata: Metadata = {
  title: 'Destinos | Pink Sky Travel',
  description: 'Explora nuestros destinos favoritos en México. Desde Pueblos Mágicos hasta playas paradisíacas.',
};

export default async function DestinationsPage() {
  const destinations = await client.fetch<Destino[]>(FEATURED_DESTINATIONS_QUERY);

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
              <Grid size={{ xs: 12, md: 6 }} key={dest._id}>
                <Link href={`/destinos/${dest.slug.current}`}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={dest.imageUrl}
                      alt={dest.name}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h4" component="h2" color="secondary.main">
                        {dest.name}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" paragraph>
                        {dest.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
