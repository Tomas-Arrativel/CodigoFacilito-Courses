import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import ReactPaginate from 'react-paginate';

import useEventsResults from '../../state/events-results';
import Navbar from '../../components/Navbar';
import Events from '../../components/Events';

import styles from './Home.module.css';

const Home = () => {
  const { data, isLoading, error, fetchEvents } = useEventsResults();
  const events = useMemo(
    () => data?._embedded?.events || [],
    [data?._embedded?.events],
  );
  const page = useMemo(() => data?.page || {}, [data?.page]);

  const [searchText, setSearchText] = useState('');
  const containerRef = useRef();

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleNavbarSearch = (term) => {
    setSearchText(term);
    fetchEvents(`&keyword=${term}`);
  };

  const handlePageClick = useCallback(
    ({ selected }) => {
      fetchEvents(`&keyword=${searchText}&page=${selected}`);
    },
    [searchText, fetchEvents],
  );

  const renderEvents = () => {
    if (isLoading) {
      return <div>Cargando resultados...</div>;
    }

    if (error) {
      return <div>Se ha producido un error</div>;
    }

    return (
      <div>
        <Events searchText={searchText} events={events} />
        <ReactPaginate
          className={styles.pagination}
          nextClassName={styles.next}
          previousClassName={styles.previous}
          pageClassName={styles.page}
          activeClassName={styles.active}
          disabledClassName={styles.disabledPage}
          breakLabel='...'
          nextLabel='>'
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={page.totalPages}
          previousLabel='<'
          renderOnZeroPageCount={null}
        />
      </div>
    );
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {renderEvents()}
    </>
  );
};

export default Home;
