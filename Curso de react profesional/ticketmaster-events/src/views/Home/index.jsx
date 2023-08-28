import { useState, useRef } from 'react';

import Navbar from '../../components/Navbar';
import Events from '../../components/Events';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const containerRef = useRef();

  const handleNavbarSearch = (term) => {
    console.log(containerRef.current);
    setSearchText(term);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      <Events searchText={searchText} />
    </>
  );
};

export default Home;
