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
  { id: 1, title: 'Ruta del Tequila', price: 1200, color: '#ffcc80' }, // orange-100ish
  { id: 2, title: 'Escapada a Holbox', price: 3500, color: '#bbdefb' }, // blue-100ish
  { id: 3, title: 'Selva Lacandona', price: 2800, color: '#c8e6c9' }, // green-100ish
];

const TourCarousel = () => {
  return (
    <Box component="section" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" fontWeight="bold" color="primary.main">
            Top 3 Experiencias
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
             <LelePlaceholder sx={{ width: 150 }} message="Lele recomienda" />
          </Box>
        </Box>

        <Grid container spacing={4}>
          {MOCK_TOURS.map((tour) => (
            <Grid size={{ xs: 12, md: 4 }} key={tour.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 6 } }}>
                <Box sx={{ height: 200, bgcolor: tour.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="h6" color="text.secondary" fontWeight="bold">
                    Foto Tour {tour.id}
                  </Typography>
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h6" gutterBottom fontWeight="bold" color="primary.main">
                    {tour.title}
                  </Typography>
                  <Typography variant="h6" color="secondary.main" fontWeight="bold" gutterBottom>
                    ${tour.price} MXN
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
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
