
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { client } from '@/shared/api/sanity/client';
import { CATEGORIES_QUERY } from '@/shared/api/sanity/queries';

const Categorias = async () => {
  const categories = await client.fetch<Categoria[]>(CATEGORIES_QUERY);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {categories.map((cat) => (
          <Grid size={{ xs: 12, md: 3 }} key={cat._id}>
            <Link href={`/catalogo?categoria=${cat.slug.current}`} style={{ textDecoration: 'none' }}>
              <Card sx={{
                height: '100%',
                position: 'relative',
                overflow: 'hidden', // Add this
                transition: 'box-shadow 0.3s ease', // Add transition for shadow
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)', // Base shadow
                '&:hover': {
                  boxShadow: '0 12px 24px rgba(0,0,0,0.08)', // Hover shadow
                  '& .destination-image': { // Target the image for zoom
                    transform: { xs: 'scale(1)', md: 'scale(1.1)' },
                  }
                }
              }}>
                <CardMedia
                  className="destination-image"
                  component="img"
                  height="300"
                  image={cat.imageUrl}
                  alt={cat.name}
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
                    {cat.name}
                  </Typography>
                </Box>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container >
  );
};

export default Categorias;
