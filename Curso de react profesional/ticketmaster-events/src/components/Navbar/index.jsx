import React from 'react';

const arrayOfItems = [1, 2, 3, 4, 5, 6, 7, 8];

const Navbar = () => {
  const items = arrayOfItems.map((item) => (
    <li key={`array-number-item-${item}`}>{item}</li>
  ));
  return (
    <div>
      <p>Eventos</p>
      <input type='text' placeholder='Busca tu evento favorito' />
      <ul>{items}</ul>
    </div>
  );
};

export default Navbar;
