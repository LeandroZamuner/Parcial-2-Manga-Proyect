import React from 'react';
import { Button, Card } from 'react-bootstrap';

const MangaItem = ({ manga, onFavorite, isFavorite }) => {

  return (

    <Card style={{ width: '18rem', marginBottom: '1rem', backgroundColor: '#353435' }}>

      <Card.Img style={{ width: '100%', height: '400px', objectfit: 'cover',  }} variant="top" src={manga.imageUrl} alt={manga.title} />

      <Card.Body>

        <Card.Title style={{ color: 'white' }} >{manga.title}</Card.Title>
        <Card.Text style={{ color: 'white' }} >Release Date: {manga.releaseDate}</Card.Text>

        <Button variant={isFavorite ? 'danger' : 'success'} onClick={() => onFavorite(manga.id)}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>

      </Card.Body>

    </Card>

  );

};

export default MangaItem;
