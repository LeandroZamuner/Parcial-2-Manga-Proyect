import React from 'react';
import { Button, Card } from 'react-bootstrap';

const MangaItem = ({ manga, onFavorite, isFavorite, isLoggedIn }) => {

  return (
    <Card style={{ width: '18rem', marginBottom: '1rem', backgroundColor: '#353435' }}>
      <Card.Img style={{ width: '100%', height: '400px', objectFit: 'cover' }} variant="top" src={manga.imageUrl} alt={manga.title} />
      <Card.Body>
        <Card.Title style={{ color: 'white' }}>{manga.title}</Card.Title>
        <Card.Text style={{ color: 'white' }}>Release Date: {manga.releaseDate}</Card.Text>
        {!isLoggedIn ? (  // Mostrar botón deshabilitado si el usuario no está logueado
          <Button variant="secondary" disabled>
            Inicie sesión
          </Button>
        ) : (
          <Button variant={isFavorite ? 'danger' : 'success'} onClick={() => onFavorite(manga.id)}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default MangaItem;
