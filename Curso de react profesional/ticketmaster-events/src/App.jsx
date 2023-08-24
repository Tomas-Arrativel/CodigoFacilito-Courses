import { useState } from 'react';

import Navbar from './components/Navbar';
import Events from './components/Events';
import SignUpForm from './components/SignUpForm';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState('');

  const handleNavbarSearch = (term) => {
    setSearchText(term);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />
      <Events searchText={searchText} />
      {/*<SignUpForm  />*/}
    </>
  );
}

export default App;
