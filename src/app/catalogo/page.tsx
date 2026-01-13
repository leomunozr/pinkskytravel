import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import LelePlaceholder from '@/components/ui/LelePlaceholder';

export default function CatalogoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-end mb-8">
            <div>
                <h1 className="text-4xl font-bold text-midnight-blue mb-2">Catálogo de Experiencias</h1>
                <p className="text-gray-600">Encuentra tu próxima aventura en México.</p>
            </div>
            <LelePlaceholder className="w-24 h-24 hidden md:flex" message="Tips de Lele" />
        </div>

        {/* Placeholder Grid for Tours */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Imagen Tour {i}</span>
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-lg text-midnight-blue">Tour Ejemplo {i}</h3>
                            <span className="bg-pink-100 text-pink-dusk text-xs px-2 py-1 rounded-full font-bold">Vibe</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                            Descripción corta del tour que vendrá desde Sanity. Una experiencia inolvidable.
                        </p>
                        <div className="flex justify-between items-center mt-4">
                            <span className="font-bold text-pink-dusk">$2,500 MXN</span>
                            <button className="text-sm text-midnight-blue underline hover:text-pink-dusk">Ver más</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
