import React, { useState } from 'react';
import CustomNavbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import CarouselComponent from './components/Carousel';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [users, setUsers] = useState([
    { username: 'admin', role: 'admin' },
    { username: 'user1', role: 'client' },
  ]);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const carouselImages = [
    { id: 1, imageUrl: `${process.env.PUBLIC_URL}/images/Carousel1.png`, legend: 'Texto 1' },
    { id: 2, imageUrl: `${process.env.PUBLIC_URL}/images/Carousel2.png`, legend: 'Texto 2' },
    { id: 3, imageUrl: `${process.env.PUBLIC_URL}/images/Carousel3.png`, legend: 'Texto 3' },
  ];

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

  const handleEditUserRole = (username, newRole) => {
    const updatedUsers = users.map(user =>
      user.username === username ? { ...user, role: newRole } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div>
      <CustomNavbar isAdmin={isAdmin} onLogin={() => setShowLoginModal(true)} onLogout={handleLogout} isLoggedIn={isLoggedIn} />
      
      {!isAdmin && <CarouselComponent carouselImages={carouselImages} />}
      
      {isLoggedIn ? (
        <HomePage isAdmin={isAdmin} mangas={mangas} favorites={favorites} onFavorite={handleFavorite} />
      ) : (
        <p>Debes iniciar sesión para ver los mangas.</p>
      )}
      
      {isAdmin && (
        <AdminPage users={users} onDeleteUser={handleDeleteUser} onEditUserRole={handleEditUserRole} />
      )}
      
      <Footer />
      {showLoginModal && <LoginModal onLogin={handleLogin} onClose={() => setShowLoginModal(false)} />}
    </div>
  );
};

export default App;
