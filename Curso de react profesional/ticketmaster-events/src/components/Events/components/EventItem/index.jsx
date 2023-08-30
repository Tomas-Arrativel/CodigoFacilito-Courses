import styles from './EventItem.module.css';

import useLikeEvents from '../../../../hooks/useLikeEvents';
import HearthFilled from '../../../../assets/hearth-filled.png';
import HearthUnfilled from '../../../../assets/hearth-unfilled.png';

const EventItem = ({ info, name, image, onEventClick, id }) => {
  const { isEventLiked } = useLikeEvents(id);

  const handleSeeMoreClick = (e) => {
    e.stopPropagation();
    onEventClick(id);
  };

  const handleHearthClick = () => {};

  return (
    <div
      onClick={() => console.log('Padre Clickeado')}
      className={styles.eventItemContainer}
    >
      <div className={styles.imagesContainer}>
        <img
          src={isEventLiked ? HearthFilled : HearthUnfilled}
          alt='Like button'
          className={styles.hearthImage}
          onClick={handleHearthClick}
        />
        <img src={image} alt={name} width={400} height={250} />
      </div>
      <div className={styles.eventInfoContainer}>
        <h4>{name}</h4>
        <p>{info}</p>
        <button onClick={handleSeeMoreClick}>
          {/* <Link to={`/detail/${id}`}>Ver más</Link> */}
          Ver más
        </button>
      </div>
    </div>
  );
};

export default EventItem;
