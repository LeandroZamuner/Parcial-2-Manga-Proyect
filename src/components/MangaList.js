import React from 'react';
import MangaItem from './MangaItem';
import { Container } from 'react-bootstrap';

const MangaList = ({ mangas, onFavorite, favorites }) => {

  return (

    <Container className="d-flex flex-wrap justify-content-center gap-5 mt-4 mb-5">

      {mangas.map((manga) => (

        <MangaItem
          key={manga.id}
          manga={manga}
          onFavorite={onFavorite}
          isFavorite={favorites.includes(manga.id)}
        />

      ))}

    </Container>

  );

};

export default MangaList;
