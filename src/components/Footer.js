import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-left">
            <p>&copy; 2024 Manga Tracker</p>
            <p>
              Para más información, contáctanos:<br />
              Teléfono: <a href="tel:+5401156596336" className="text-white">+54 011 5659 6336</a><br />
              Facebook: <a href="https://www.facebook.com/MangaTracker" target="_blank" rel="noopener noreferrer" className="text-white">MangaTracker</a><br />
              Instagram: <a href="https://www.instagram.com/MangaTracker" target="_blank" rel="noopener noreferrer" className="text-white">MangaTracker</a>
            </p>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <img src="/images/LogoRana.png" alt="Logo Rana" style={{ maxWidth: '150px', maxHeight: '100px' }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
