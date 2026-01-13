import React from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Pueblos Mágicos', slug: 'pueblos-magicos', emoji: '🏘️' },
  { name: 'Playa', slug: 'playa', emoji: '🏖️' },
  { name: 'Gastronomía', slug: 'gastronomia', emoji: '🌮' },
  { name: 'Aventura', slug: 'aventura', emoji: '🧗' },
];

const Hero = () => {
  return (
    <section className="relative w-full">
      {/* Video Background Placeholder */}
      <div className="w-full h-[60vh] bg-gray-300 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <p className="z-20 text-white text-xl font-bold">[ Video Hero Placeholder ]</p>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">
            Descubre el México <span className="text-pink-dusk">Real</span>
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl drop-shadow-md">
            Experiencias auténticas diseñadas para ti.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 -mt-16 relative z-30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/catalogo?categoria=${cat.slug}`}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer"
            >
              <span className="text-4xl mb-2">{cat.emoji}</span>
              <span className="font-semibold text-midnight-blue text-center">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
