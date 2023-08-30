import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { Link } from 'react-router-dom';

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

  useImperativeHandle(ref, () => ({
    search,
    setSearch,
  }));

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(search);
    }
  };

  return (
    <div
      ref={ref}
      style={{
        marginBottom: 14,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <div style={{ flex: 1, display: 'flex' }}>
        <p style={{ fontSize: 24, fontWeight: 900 }}>Boletera</p>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <input
          type='text'
          placeholder='Busca tu evento favorito'
          onChange={handleInputChange}
          value={search}
          onKeyDown={handleInputKeyDown}
          style={{
            fontSize: 16,
            padding: '6px 12px',
            borderRadius: 5,
            border: '1px solid #777',
            outline: 'none',
            width: 200,
          }}
        />
        <Link
          to='/profile/my-info'
          style={{
            marginLeft: 25,
            color: '#fff',
            fontWeight: 500,
            textDecoration: 'none',
            backgroundColor: '#000',
            borderRadius: 10,
            padding: '5px 15px',
          }}
        >
          Mi Perfil
        </Link>
      </div>
    </div>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
