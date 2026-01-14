import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import LelePlaceholder from '../ui/LelePlaceholder';

// This would eventually come from Sanity
const MOCK_TOURS = [
  { id: 1, title: 'Ruta del Tequila', price: 1200, color: '#ffcc80' },
  { id: 2, title: 'Escapada a Holbox', price: 3500, color: '#bbdefb' },
  { id: 3, title: 'Selva Lacandona', price: 2800, color: '#c8e6c9' },
];

const TourCarousel = () => {
  return (
    <Box component="section" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
          <Box>
            <Typography variant="h3" fontWeight={800} color="text.primary" gutterBottom>
                Top Experiencias
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Los destinos favoritos de nuestros viajeros este mes.
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
             <LelePlaceholder sx={{ width: 150 }} message="Lele recomienda" />
          </Box>
        </Box>

        <Grid container spacing={4}>
          {MOCK_TOURS.map((tour) => (
            <Grid size={{ xs: 12, md: 4 }} key={tour.id}>
              <Card sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.08)'
                  }
              }}>
                {/* Image Placeholder */}
                <Box sx={{
                    height: 240,
                    bgcolor: tour.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                }}>
                  <Typography variant="h6" sx={{ opacity: 0.5, fontWeight: 700 }}>
                    Foto Tour {tour.id}
                  </Typography>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3, pt: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h5" fontWeight={700} color="text.primary" sx={{ lineHeight: 1.2 }}>
                        {tour.title}
                    </Typography>
                    <Typography variant="h6" color="secondary.main" fontWeight={700}>
                        ${tour.price}
                    </Typography>
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      4 días / 3 noches
                  </Typography>

                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    sx={{ mt: 'auto', border: '1px solid', borderColor: 'divider', color: 'text.primary' }}
                  >
                    Ver Detalles
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TourCarousel;
