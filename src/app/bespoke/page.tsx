import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import BespokeForm from '@/components/bespoke/BespokeForm';
import LelePlaceholder from '@/components/ui/LelePlaceholder';

export default function BespokePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-midnight-blue mb-4">Viajes a la Medida</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Cuéntanos tus sueños y nosotros nos encargamos del resto. Diseñamos cada detalle para que vivas el México que tú quieres.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
            {/* Form Section */}
            <div className="w-full lg:w-2/3">
                <BespokeForm />
            </div>

            {/* Sidebar / Lele */}
            <div className="w-full lg:w-1/3 space-y-6">
                <LelePlaceholder className="w-full h-auto py-8" message="¡Soy Lele! Estoy aquí para ayudarte a planear." />
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-midnight-blue mb-2">¿Por qué elegir un viaje a medida?</h3>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                        <li>Itinerarios 100% personalizados.</li>
                        <li>Guías locales expertos.</li>
                        <li>Soporte 24/7 durante tu viaje.</li>
                        <li>Acceso a experiencias exclusivas.</li>
                    </ul>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
