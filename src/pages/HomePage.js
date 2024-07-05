import React from 'react';
import { Button } from 'react-bootstrap';
import MangaList from '../components/MangaList';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = ({ isAdmin, mangas, favorites, onFavorite }) => {
  
  const tileContent = ({ date }) => {
    const matchingManga = mangas.find(manga => new Date(manga.releaseDate).toDateString() === date.toDateString());
    return matchingManga ? <div>{matchingManga.title}</div> : null;
  };

  return (

    <div className="mb-5 mx-5">

      <MangaList mangas={mangas} favorites={favorites} onFavorite={onFavorite} />

      <div className="d-flex justify-content-center">

        <Calendar className=""
          locale="en-US"
          tileContent={tileContent}
        />

      </div>

    </div>

  );

};

export default HomePage;
