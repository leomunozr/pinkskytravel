import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import { client } from '@/shared/api/sanity/client';
import { FEATURED_DESTINATIONS_QUERY } from '@/shared/api/sanity/queries';
import { Destination } from '@/shared/types/destination';

const Destacados = async () => {
  const featuredDestinations = await client.fetch<Destination[]>(FEATURED_DESTINATIONS_QUERY);

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Link href="destinos" underline='none'>
            <Typography variant="h3" component="h2" color="secondary.main" fontWeight="bold">
              Destinos Destacados
            </Typography>
          </Link>
        </Box>

        <Grid container spacing={4}>
          {featuredDestinations.map((dest) => (
            <Grid size={{ xs: 12, md: 4 }} key={dest._id}>
              <Link href={`/destinos/${dest.slug.current}`}>
                <Card sx={{
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden', // Add this
                  transition: 'box-shadow 0.3s ease', // Add transition for shadow
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)', // Base shadow
                  '&:hover': {
                    boxShadow: '0 12px 24px rgba(0,0,0,0.08)', // Hover shadow
                    '& .destination-image': { // Target the image for zoom
                      transform: 'scale(1.1)',
                    }
                  }
                }}>
                  <CardMedia
                    className="destination-image" // Add class name for targeting
                    component="img"
                    height="300"
                    image={dest.imageUrl} // Fallback
                    alt={dest.name}
                    sx={{
                      transition: 'transform 1s ease-in-out', // Smooth transition for transform
                      transform: 'scale(1)', // Base scale
                    }}
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
                  </Box>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Destacados;