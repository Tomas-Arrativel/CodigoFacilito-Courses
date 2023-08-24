import React, { useState, useEffect } from 'react';

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  // useEffect(() => {
  //   console.log('onSearch cambio');
  // }, [onSearch]);

  // useEffect(() => {
  //   console.log('Componente listo');
  // }, []);

  // useEffect(() => {
  //   console.log('search cambio');
  // }, [search]);

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
