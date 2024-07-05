import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const CustomNavbar = ({ isAdmin, onLogin, onLogout, isLoggedIn }) => {

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="fixed-top custom-navbar">
      {/* Logo a la izquierda */}
      <BootstrapNavbar.Brand href="#home" style={{ paddingLeft: '20px' }}>
        <img
          src="/images/LogoRana.png"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
          style={{ marginRight: '10px' }}
        />
        Manga Tracker
      </BootstrapNavbar.Brand>

      {/* Botón de toggle para colapsar en móviles */}
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

      {/* Contenido del Navbar colapsable */}
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        {/* Links a la izquierda */}
        <Nav className="mr-auto">
          {isLoggedIn ? (
            <>
              <Nav.Link href="#calendar">Calendar</Nav.Link>
              {isAdmin && <Nav.Link href="#admin">User Management</Nav.Link>}
              <Nav.Link href="#favorites">Favorites</Nav.Link>
            </>
          ) : null}
        </Nav>
        
        {/* Botón de login/logout a la derecha */}
        <Nav className="ml-auto">
          {isLoggedIn ? (
            <Nav.Link onClick={onLogout}>Logout</Nav.Link>
          ) : (
            <Nav.Link onClick={onLogin}>Login</Nav.Link>
          )}
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
