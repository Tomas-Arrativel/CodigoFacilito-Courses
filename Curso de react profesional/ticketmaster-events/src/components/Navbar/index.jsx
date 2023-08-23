import React from 'react';
import { useState } from 'react';

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(search);
    }
  };

  return (
    <div>
      <p>Boletera</p>
      <input
        type='text'
        placeholder='Busca tu evento favorito'
        onChange={handleInputChange}
        value={search}
        onKeyDown={handleInputKeyDown}
      />
    </div>
  );
};

export default Navbar;
