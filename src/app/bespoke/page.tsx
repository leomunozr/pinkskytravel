import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import BespokeForm from '@/components/bespoke/BespokeForm';
import LelePlaceholder from '@/components/ui/LelePlaceholder';

export default function BespokePage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'grey.50' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography variant="h3" component="h1" fontWeight="bold" color="primary.main" gutterBottom>
                  Viajes a la Medida
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                  Cuéntanos tus sueños y nosotros nos encargamos del resto. Diseñamos cada detalle para que vivas el México que tú quieres.
              </Typography>
          </Box>

          <Grid container spacing={6} justifyContent="center">
              {/* Form Section */}
              <Grid size={{ xs: 12, lg: 8 }}>
                  <BespokeForm />
              </Grid>

              {/* Sidebar / Lele */}
              <Grid size={{ xs: 12, lg: 4 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <LelePlaceholder sx={{ width: '100%', height: 'auto', py: 4 }} message="¡Soy Lele! Estoy aquí para ayudarte a planear." />

                      <Paper sx={{ p: 4, bgcolor: 'background.paper' }} elevation={1}>
                          <Typography variant="h6" fontWeight="bold" color="primary.main" gutterBottom>
                              ¿Por qué elegir un viaje a medida?
                          </Typography>
                          <Box component="ul" sx={{ pl: 2, typography: 'body2', color: 'text.secondary' }}>
                              <li>Itinerarios 100% personalizados.</li>
                              <li>Guías locales expertos.</li>
                              <li>Soporte 24/7 durante tu viaje.</li>
                              <li>Acceso a experiencias exclusivas.</li>
                          </Box>
                      </Paper>
                  </Box>
              </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
