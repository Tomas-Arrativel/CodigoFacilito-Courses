import { useState } from 'react';
import eventsData from '../data/events.json';

const useEventData = () => {
  const [data] = useState(eventsData);
  // prettier-ignore
  const { _embedded: { events } } = data;

  return {
    events,
  };
};

export default useEventData;
