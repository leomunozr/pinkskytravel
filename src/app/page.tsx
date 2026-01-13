import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/home/Hero';
import TourCarousel from '@/components/home/TourCarousel';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TourCarousel />
      </main>
      <Footer />
    </div>
  );
}
