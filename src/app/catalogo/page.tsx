import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import LelePlaceholder from '@/components/ui/LelePlaceholder';
import Chip from '@mui/material/Chip';

export default function CatalogoPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 4 }}>
            <Box>
                <Typography variant="h3" component="h1" fontWeight="bold" color="primary.main" gutterBottom>
                    Catálogo de Experiencias
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Encuentra tu próxima aventura en México.
                </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <LelePlaceholder sx={{ width: 100, height: 100 }} message="Tips de Lele" />
            </Box>
          </Box>

          <Grid container spacing={4}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Grid size={{ xs: 12, md: 6, lg: 4 }} key={i}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ height: 200, bgcolor: 'grey.300', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography color="text.secondary">Imagen Tour {i}</Typography>
                        </Box>
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                                <Typography variant="h6" fontWeight="bold" color="primary.main">
                                    Tour Ejemplo {i}
                                </Typography>
                                <Chip label="Vibe" color="secondary" size="small" variant="outlined" />
                            </Box>
                            <Typography variant="body2" color="text.secondary" paragraph sx={{
                                display: '-webkit-box',
                                overflow: 'hidden',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 2,
                            }}>
                                Descripción corta del tour que vendrá desde Sanity. Una experiencia inolvidable.
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                                <Typography variant="h6" fontWeight="bold" color="secondary.main">
                                    $2,500 MXN
                                </Typography>
                                <Button color="primary" sx={{ textDecoration: 'underline' }}>
                                    Ver más
                                </Button>
                            </Box>
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
