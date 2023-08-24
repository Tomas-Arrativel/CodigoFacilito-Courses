import React, { useState, useEffect, forwardRef } from 'react';

const Navbar = forwardRef(({ onSearch }, ref) => {
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
    <div ref={ref}>
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
});

Navbar.displayName = 'Navbar';

export default Navbar;
