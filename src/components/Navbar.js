import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const CustomNavbar = ({ isAdmin, onLogin, onLogout, isLoggedIn }) => {

  return (

    <BootstrapNavbar bg="none" variant="dark" expand="lg">

      <BootstrapNavbar.Brand style={{ paddingLeft: '20px' }} href="#home"> Manga Tracker </BootstrapNavbar.Brand >

      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

      <BootstrapNavbar.Collapse id="basic-navbar-nav">

        <Nav className="mr-auto">

          {isLoggedIn ? (
            <>
              <Nav.Link href="#calendar">Calendar</Nav.Link>
              {isAdmin && <Nav.Link href="#admin">User Management</Nav.Link>}
              <Nav.Link href="#favorites">Favorites</Nav.Link>
              <Nav.Link onClick={onLogout}>Logout</Nav.Link>
            </>
          ) : (
            <Nav.Link onClick={onLogin}>Login</Nav.Link>
          )}

        </Nav>

      </BootstrapNavbar.Collapse>

    </BootstrapNavbar>
    
  );
};

export default CustomNavbar;
