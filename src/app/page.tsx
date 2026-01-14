import Box from '@mui/material/Box';
import Navbar from '@/widgets/layout/ui/Navbar';
import Footer from '@/widgets/layout/ui/Footer';
import Destacados from '@/widgets/home/ui/Destacados';
import Hero from '@/widgets/home/ui/Hero';
import TourCarousel from '@/widgets/home/ui/TourCarousel';

export default async function Home() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Hero />
        <Destacados />
        <TourCarousel />
      </Box>
      <Footer />
    </Box>
  );
}
