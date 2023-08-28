import { useState, useRef, useEffect } from 'react';
import useEventData from '../../hooks/useEventsData';
import Navbar from '../../components/Navbar';
import Events from '../../components/Events';

const Home = () => {
  const { events, isLoading, error, fetchEvents } = useEventData();
  const [searchText, setSearchText] = useState('');
  const containerRef = useRef();

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleNavbarSearch = (term) => {
    setSearchText(term);
    fetchEvents(`&keyword=${term}`);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {isLoading ? (
        <div>Cargando resultados...</div>
      ) : (
        <Events searchText={searchText} events={events} />
      )}
      {!!error && <div>Se ha producido un error</div>}
    </>
  );
};

export default Home;
