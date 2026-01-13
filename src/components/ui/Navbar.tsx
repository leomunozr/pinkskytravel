import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-midnight-blue text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-pink-dusk">
          Pink Sky Travel
        </Link>
        <div className="space-x-4">
          <Link href="/catalogo" className="hover:text-pink-dusk transition-colors">
            Catálogo
          </Link>
          <Link href="/bespoke" className="hover:text-pink-dusk transition-colors">
            A Medida
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
