import React from 'react';
import LelePlaceholder from '../ui/LelePlaceholder';

// This would eventually come from Sanity
const MOCK_TOURS = [
  { id: 1, title: 'Ruta del Tequila', price: 1200, image: 'bg-orange-100' },
  { id: 2, title: 'Escapada a Holbox', price: 3500, image: 'bg-blue-100' },
  { id: 3, title: 'Selva Lacandona', price: 2800, image: 'bg-green-100' },
];

const TourCarousel = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-midnight-blue">Top 3 Experiencias</h2>
          <LelePlaceholder className="w-32 hidden md:flex" message="Lele recomienda" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_TOURS.map((tour) => (
            <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`h-48 w-full ${tour.image} flex items-center justify-center`}>
                <span className="text-gray-400 font-bold">Foto Tour {tour.id}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-midnight-blue mb-2">{tour.title}</h3>
                <p className="text-pink-dusk font-bold text-lg">${tour.price} MXN</p>
                <button className="mt-4 w-full bg-midnight-blue text-white py-2 rounded hover:bg-opacity-90 transition">
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourCarousel;
