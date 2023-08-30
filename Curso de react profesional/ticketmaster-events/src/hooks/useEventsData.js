import useEventResults from '../state/events-results';

// Llamar a la api y guardar valores de manera local
const useEventData = () => {
  const { data, isLoading, error, fetchEvents } = useEventResults();

  return {
    events: data?._embedded?.events || [],
    page: data?.page || {},
    isLoading,
    error,
    fetchEvents,
  };
};

export default useEventData;
