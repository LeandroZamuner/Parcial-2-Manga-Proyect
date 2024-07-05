import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = ({ mangas }) => {

  const tilesContent = ({ date, view }) => {

    if (view === 'month') {

      const manga = mangas.find((manga) => new Date(manga.releaseDate).toDateString() === date.toDateString());
      
      if (manga) {
        return <p>{manga.title}</p>;
      }

    }

    return null;

  };
  
  return <Calendar locale="en-US" tileContent={tilesContent}/>;

};

export default CalendarComponent;
