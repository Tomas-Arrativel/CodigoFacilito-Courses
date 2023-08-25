import React from 'react';
import styles from './EventItem.module.css';

const EventItem = ({ info, name, image, onEventClick, id }) => {
  const handleSeeMoreClick = (e) => {
    e.stopPropagation();
    onEventClick(id);
  };

  return (
    <div
      onClick={() => console.log('Padre Clickeado')}
      className={styles.eventItemContainer}
    >
      <img src={image} alt={name} width={400} height={250} />
      <div className={styles.eventInfoContainer}>
        <h4>{name}</h4>
        <p>{info}</p>
        <button onClick={handleSeeMoreClick}>Ver más</button>
      </div>
    </div>
  );
};

export default EventItem;
