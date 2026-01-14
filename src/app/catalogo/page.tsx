import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Navbar from '@/widgets/layout/ui/Navbar';
import Footer from '@/widgets/layout/ui/Footer';
import LelePlaceholder from '@/shared/ui/LelePlaceholder';
import Chip from '@mui/material/Chip';

export default function CatalogoPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 8 }}>
            <Box maxWidth="sm">
                <Typography variant="h2" component="h1" fontWeight={800} color="text.primary" gutterBottom sx={{ letterSpacing: '-0.03em' }}>
                    Catálogo de Experiencias
                </Typography>
                <Typography variant="h6" color="text.secondary" fontWeight={400}>
                    Encuentra tu próxima aventura en México. Desde playas vírgenes hasta pueblos llenos de historia.
                </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <LelePlaceholder sx={{ width: 100, height: 100 }} message="Tips de Lele" />
            </Box>
          </Box>

          <Grid container spacing={4}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Grid size={{ xs: 12, md: 6, lg: 4 }} key={i}>
                    <Card sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 12px 24px rgba(0,0,0,0.08)'
                        }
                    }}>
                        <Box sx={{ height: 240, bgcolor: 'grey.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography color="text.secondary" fontWeight={500}>Imagen Tour {i}</Typography>
                        </Box>
                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                <Typography variant="h6" fontWeight={700} color="text.primary">
                                    Tour Ejemplo {i}
                                </Typography>
                                <Chip
                                    label="Aventura"
                                    size="small"
                                    sx={{
                                        bgcolor: 'rgba(240, 98, 146, 0.1)',
                                        color: 'secondary.main',
                                        borderRadius: 1
                                    }}
                                />
                            </Box>
                            <Typography variant="body2" color="text.secondary" paragraph sx={{
                                display: '-webkit-box',
                                overflow: 'hidden',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 2,
                                mb: 3
                            }}>
                                Descripción corta del tour que vendrá desde Sanity. Una experiencia inolvidable diseñada para conectar con la naturaleza.
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto', pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
                                <Box>
                                    <Typography variant="caption" display="block" color="text.secondary">Desde</Typography>
                                    <Typography variant="h6" fontWeight={700} color="text.primary">
                                        $2,500 MXN
                                    </Typography>
                                </Box>
                                <Button size="small" color="primary" sx={{ fontWeight: 600 }}>
                                    Ver Detalle
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
