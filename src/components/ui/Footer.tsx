import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-midnight-blue text-white py-8 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Pink Sky Travel. Todos los derechos reservados.</p>
        <div className="mt-4">
          <p className="text-sm text-gray-400">Hecho con ❤️ en México</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
