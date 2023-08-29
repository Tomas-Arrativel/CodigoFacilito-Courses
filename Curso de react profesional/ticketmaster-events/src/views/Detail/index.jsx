import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Detail.module.css';

const Detail = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${
            import.meta.env.VITE_TICKETMASTER_API_KEY
          }`,
        );

        const data = await response.json();

        setEventData(data);
        setIsLoading(false);
      } catch (error) {
        setEventData({});
        setError(error);
        setIsLoading(false);
      }
    };

    fetchEventData();
  }, []);

  if (isLoading && Object.keys(eventData) === 0) {
    return <div>Cargando contenido...</div>;
  }
  if (Object.keys(error) > 0) {
    return <div>Ha ocurrido un error</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainInfoContainer}>
        <img
          className={styles.eventImage}
          src={eventData.images?.[0].url}
          alt={eventData.name}
        />
        <h3 className={styles.eventTitle}>{eventData.name}</h3>
        <p className={styles.eventInfo}>{eventData.info}</p>
        {eventData.dates?.start?.localDate &&
        eventData.dates?.start?.localTime ? (
          <p className={styles.startDate}>
            El evento comenzara el{' '}
            <span>{eventData.dates?.start?.localDate}</span> a las{' '}
            <span>{eventData.dates?.start?.localTime}</span>
          </p>
        ) : null}
      </div>

      <div className={styles.seatInfoContainer}>
        <h4>Mapa del evento</h4>
        <img src={eventData.seatmap?.staticUrl} alt='Seat map' />
        <p>{eventData.pleaseNote}</p>
        <p>
          Rango de precios: {eventData.priceRanges?.[0].min}-
          {eventData.priceRanges?.[0].max} {eventData.priceRanges?.[0].currency}
        </p>
      </div>
      <a href={eventData.url} className={styles.goForTicketsBtn}>
        Ir a por tus boletos
      </a>
    </div>
  );
};

export default Detail;
