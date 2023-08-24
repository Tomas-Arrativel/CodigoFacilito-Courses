import React from 'react';
import useEventData from '../../hooks/useEventsData';
import EventItem from './components/EventItem';

const Events = ({ searchText }) => {
  const { events, isLoading, error } = useEventData();

  const handleEventItemClick = (id) => {
    console.log('Evento clickeado: ', id);
  };

  const renderEvents = () => {
    let eventsFiltered = events;

    if (searchText.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLowerCase().includes(searchText),
      );
    }
    return eventsFiltered.map((event) => (
      <EventItem
        key={`event-item-${event.id}`}
        name={event.name}
        info={event.info}
        image={event.images[0].url}
        onEventClick={handleEventItemClick}
        id={event.id}
      />
    ));
  };

  if (error) {
    return <div>Se ha producido un error</div>;
  }

  if (isLoading) {
    return <div>Cargando resultados...</div>;
  }

  return (
    <div>
      <p>Eventos</p>
      {renderEvents()}
    </div>
  );
};

export default Events;
