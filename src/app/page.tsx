import Box from '@mui/material/Box';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/home/Hero';
import TourCarousel from '@/components/home/TourCarousel';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Link from 'next/link';
import LinkButton from '@/components/ui/LinkButton';

const featuredDestinations = [
  {
    name: 'Ciudad de México',
    slug: 'ciudad-de-mexico',
    image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80',
  },
  {
    name: 'Oaxaca',
    slug: 'oaxaca',
    image: 'https://images.unsplash.com/photo-1569931726058-29472e39194e?auto=format&fit=crop&q=80',
  },
  {
    name: 'Yucatán',
    slug: 'yucatan',
    image: 'https://images.unsplash.com/photo-1546288339-38b8c2c73024?auto=format&fit=crop&q=80',
  },
];

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Hero />

        {/* Featured Destinations Section */}
        <Box sx={{ py: 8, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                    <Typography variant="h3" component="h2" color="secondary.main" fontWeight="bold">
                        Destinos Destacados
                    </Typography>
                    <LinkButton href="/destinations" color="primary" sx={{ fontWeight: 'bold' }}>
                        Ver todos
                    </LinkButton>
                </Box>

                <Grid container spacing={4}>
                    {featuredDestinations.map((dest) => (
                        <Grid size={{ xs: 12, md: 4 }} key={dest.slug}>
                            <Card sx={{ height: '100%', position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={dest.image}
                                    alt={dest.name}
                                    sx={{ filter: 'brightness(0.8)' }}
                                />
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    p: 3,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                                }}>
                                    <Typography variant="h5" color="white" fontWeight="bold">
                                        {dest.name}
                                    </Typography>
                                    <LinkButton
                                        href={`/destinations/${dest.slug}`}
                                        variant="text"
                                        sx={{ color: 'white', p: 0, mt: 1, '&:hover': { textDecoration: 'underline' } }}
                                    >
                                        Explorar
                                    </LinkButton>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>

        <TourCarousel />
      </Box>
      <Footer />
    </Box>
  );
}
