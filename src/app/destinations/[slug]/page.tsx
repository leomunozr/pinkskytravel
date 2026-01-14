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

// Mock data
const destinations = {
  'ciudad-de-mexico': {
    name: 'Ciudad de México',
    description: 'La vibrante capital, llena de historia, arte y gastronomía.',
    image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80',
    highlights: ['Museo Frida Kahlo', 'Teotihuacán', 'Centro Histórico', 'Xochimilco'],
  },
  'oaxaca': {
    name: 'Oaxaca',
    description: 'Cuna de la cultura zapoteca, el mezcal y los alebrijes.',
    image: 'https://images.unsplash.com/photo-1569931726058-29472e39194e?auto=format&fit=crop&q=80',
    highlights: ['Hierve el Agua', 'Monte Albán', 'Mercado 20 de Noviembre', 'Artesanías'],
  },
  'yucatan': {
    name: 'Yucatán',
    description: 'Cenotes, ruinas mayas y haciendas históricas.',
    image: 'https://images.unsplash.com/photo-1546288339-38b8c2c73024?auto=format&fit=crop&q=80',
    highlights: ['Chichen Itzá', 'Uxmal', 'Cenote Ik Kil', 'Mérida'],
  },
  'baja-california': {
    name: 'Baja California',
    description: 'Viñedos en Valle de Guadalupe y playas vírgenes.',
    image: 'https://images.unsplash.com/photo-1552598818-8f5b40cb0372?auto=format&fit=crop&q=80',
    highlights: ['Valle de Guadalupe', 'Ensenada', 'La Bufadora', 'Playas de Tijuana'],
  },
};

const tours = [
    {
        title: "Aventura Urbana",
        slug: "aventura-urbana",
        destination: "ciudad-de-mexico",
        image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80",
        price: "$1,200 MXN",
        duration: "1 Día"
    },
    {
        title: "Sabores de Oaxaca",
        slug: "sabores-de-oaxaca",
        destination: "oaxaca",
        image: "https://images.unsplash.com/photo-1569931726058-29472e39194e?auto=format&fit=crop&q=80",
        price: "$1,500 MXN",
        duration: "5 Horas"
    }
]

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations[slug as keyof typeof destinations];
  if (!destination) return { title: 'Destino no encontrado' };

  return {
    title: `${destination.name} | Pink Sky Travel`,
    description: destination.description,
  };
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations[slug as keyof typeof destinations];

  if (!destination) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Container sx={{ py: 8, flexGrow: 1 }}>
          <Typography variant="h3">Destino no encontrado</Typography>
        </Container>
        <Footer />
      </Box>
    );
  }

  const destinationTours = tours.filter(t => t.destination === slug);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box sx={{
            position: 'relative',
            height: '400px',
            backgroundImage: `url(${destination.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'flex-end',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.4)'
            }
        }}>
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pb: 6 }}>
                <Typography variant="h2" component="h1" sx={{ color: 'white', fontWeight: 800 }}>
                    {destination.name}
                </Typography>
            </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Grid container spacing={6}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Typography variant="h4" gutterBottom color="secondary.main">Sobre {destination.name}</Typography>
                    <Typography variant="body1" paragraph>
                        {destination.description}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Descubre lo mejor de esta región con nuestros tours seleccionados. Desde la cultura local hasta la naturaleza impresionante, {destination.name} tiene algo para todos.
                    </Typography>

                    <Typography variant="h5" gutterBottom sx={{ mt: 6 }} color="secondary.main">Tours Disponibles</Typography>
                    {destinationTours.length > 0 ? (
                        <Grid container spacing={4}>
                            {destinationTours.map(tour => (
                                <Grid size={{ xs: 12, md: 6 }} key={tour.slug}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={tour.image}
                                            alt={tour.title}
                                        />
                                        <CardContent>
                                            <Typography variant="h6" gutterBottom>{tour.title}</Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                                <Typography variant="body2" color="text.secondary">{tour.duration}</Typography>
                                                <Typography variant="body2" fontWeight="bold" color="primary.main">{tour.price}</Typography>
                                            </Box>
                                            <LinkButton
                                                href={`/tours/${tour.slug}`}
                                                variant="contained"
                                                fullWidth
                                                color="primary"
                                                sx={{ color: 'white' }}
                                            >
                                                Ver Detalles
                                            </LinkButton>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    ) : (
                        <Typography variant="body1" color="text.secondary">
                            Próximamente tendremos tours en este destino. ¡Mantente al tanto!
                        </Typography>
                    )}
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2, boxShadow: 1 }}>
                        <Typography variant="h6" gutterBottom color="secondary.main">Lo más destacado</Typography>
                        <Box component="ul" sx={{ pl: 2 }}>
                            {destination.highlights.map((highlight, index) => (
                                <li key={index}>
                                    <Typography variant="body1" sx={{ mb: 1 }}>{highlight}</Typography>
                                </li>
                            ))}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
