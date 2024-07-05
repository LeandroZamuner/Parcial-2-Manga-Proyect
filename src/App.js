import React, { useState } from 'react';
import CustomNavbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [users, setUsers] = useState([
    { username: 'admin', role: 'admin' },
    { username: 'user1', role: 'client' },
  ]);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Define a list of mangas
  const mangas = [
    { id: 1, title: 'DOROHEDORO 07', releaseDate: '2024-07-01', imageUrl: '/images/Manga01.png'},
    { id: 2, title: 'ONE PIECE 63', releaseDate: '2024-08-01', imageUrl: '/images/Manga02.png' },
    { id: 3, title: 'INNOCENT 1', releaseDate: '2024-09-01', imageUrl: '/images/Manga03.png' },
  ];

  const handleLogin = (username, password) => {
    // Dummy login logic
    if (username === 'admin') {
      setIsLoggedIn(true);
      setIsAdmin(true);
    } else if (username === 'user1') {
      setIsLoggedIn(true);
      setIsAdmin(false);
    }
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  const handleFavorite = (mangaId) => {
    setFavorites(favorites.includes(mangaId) ? favorites.filter(id => id !== mangaId) : [...favorites, mangaId]);
  };

  const handleDeleteUser = (username) => {
    setUsers(users.filter(user => user.username !== username));
  };

  return (
    <div>
      <CustomNavbar isAdmin={isAdmin} onLogin={() => setShowLoginModal(true)} onLogout={handleLogout} isLoggedIn={isLoggedIn} />
      
      {/* Carousel section */}
      <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true}>
        {mangas.map(manga => (
          <div key={manga.id}>
            <img src={manga.imageUrl} alt={manga.title} />
            <p className="legend">{manga.title}</p>
          </div>
        ))}
      </Carousel>
      
      {/* Renderiza la página de inicio o la página de administrador */}
      {isAdmin ? (
        <AdminPage users={users} onDeleteUser={handleDeleteUser} />
      ) : (
        <HomePage isAdmin={isAdmin} mangas={mangas} favorites={favorites} onFavorite={handleFavorite} />
      )}
      
      <Footer />
      {showLoginModal && <LoginModal onLogin={handleLogin} onClose={() => setShowLoginModal(false)} />}
    </div>
  );
};

export default App;
