import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { client } from '@/shared/api/sanity/client';
import { TOURS_QUERY } from '@/shared/api/sanity/queries';
import { Tour } from '@/shared/types/tour';
import LinkButton from '@/shared/ui/LinkButton';

const Tours = async () => {
  const tours = await client.fetch<Tour[]>(TOURS_QUERY);

  return (
    <Box component="section" id="tours" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
          <Box>
            <Typography variant="h3" fontWeight={800} color="text.primary" gutterBottom>
              Próximos Tours
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={4}>
          {tours.map((tour) => (
            <Grid size={{ xs: 12, md: 4 }} key={tour._id}>
              <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                overflow: 'hidden',
                '&:hover': {
                  boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
                  '& .tour-image': {
                    transform: { xs: 'scale(1)', md: 'scale(1.1)' },
                  }
                }
              }}>
                {/* Image or Placeholder */}
                {tour.imageUrl ? (
                  <Box
                    className="tour-image" // Add class name for targeting
                    component="img"
                    src={tour.imageUrl}
                    alt={tour.title}
                    sx={{
                      height: 240,
                      width: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease-in-out', // Smooth transition for transform
                      transform: 'scale(1)', // Base scale
                    }}
                  />
                ) : (
                  <Box
                    className="tour-image" // Add class name for targeting
                    sx={{
                      height: 240,
                      bgcolor: '#e0f7fa', // Default placeholder color
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      transition: 'transform 0.3s ease-in-out', // Smooth transition for transform
                      transform: 'scale(1)', // Base scale
                    }}
                  >
                    <Typography variant="h6" sx={{ opacity: 0.5, fontWeight: 700 }}>
                      {tour.title}
                    </Typography>
                  </Box>
                )}

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
                    {/* Vibe or static text */}
                    {tour.vibe ? `Vibe: ${tour.vibe}` : '4 días / 3 noches'}
                  </Typography>

                  <LinkButton
                    variant="outlined"
                    color="primary"
                    fullWidth
                    sx={{ mt: 'auto', border: '1px solid', borderColor: 'divider', color: 'text.primary' }}
                    href={`/tours/${tour.slug?.current}`}
                  >
                    Ver Detalles
                  </LinkButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Tours;
