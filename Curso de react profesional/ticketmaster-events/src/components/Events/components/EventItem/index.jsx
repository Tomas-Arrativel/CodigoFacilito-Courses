import React from 'react';

const EventItem = ({ info, name, image, onEventClick, id }) => {
  const handleSeeMoreClick = (e) => {
    e.stopPropagation();
    onEventClick(id);
  };

  return (
    <div onClick={() => console.log('Padre Clickeado')}>
      <img src={image} alt={name} width={400} height={250} />
      <h4>{name}</h4>
      <p>{info}</p>
      <button onClick={handleSeeMoreClick}>Ver más</button>
    </div>
  );
};

export default EventItem;
