import { useRef, useState } from 'react';

import Navbar from './components/Navbar';
import Events from './components/Events';
import SignUpForm from './components/SignUpForm';
import './App.css';

function App() {
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
      {/*<SignUpForm  />*/}
    </>
  );
}

export default App;
