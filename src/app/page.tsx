import Box from '@mui/material/Box';
import Navbar from '@/widgets/layout/ui/Navbar';
import Footer from '@/widgets/layout/ui/Footer';
import Destacados from '@/widgets/home/ui/Destacados';
import Hero from '@/widgets/home/ui/Hero';
import Categorias from '@/widgets/home/ui/Categorias';
import Tours from '@/widgets/home/ui/Tours';
import Nosotros from '@/widgets/home/ui/Nosotros'; // New import
import { featureFlags } from '@/shared/config/feature-flags';

export default async function Home() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {featureFlags.home.hero && <Hero />}
        {featureFlags.home.categories && <Categorias />}
        {featureFlags.home.featured && <Destacados />}
        {featureFlags.home.tours && <Tours />}
        <Nosotros />
      </Box>
      <Footer />
    </Box>
  );
}
