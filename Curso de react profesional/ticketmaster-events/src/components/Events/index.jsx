import EventItem from './components/EventItem';
import { useNavigate } from 'react-router-dom';

const Events = ({ searchText, events }) => {
  const navigate = useNavigate();

  const handleEventItemClick = (id) => {
    navigate(`/detail/${id}`);
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

  return (
    <div>
      <p>Eventos</p>
      {renderEvents()}
    </div>
  );
};

export default Events;
