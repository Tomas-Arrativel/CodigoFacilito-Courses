import { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { Sub } from './types';

const INITIAL_STATE = [
  {
    nick: 'Dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador',
  },
  {
    nick: 'sergio_serrano',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano',
  },
];

function App() {
  const [subs, setSubs] = useState<Array<Sub>>([]);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  return (
    <div className='App'>
      <h1>Midu Subs</h1>
      <List subs={subs} />
      <Form />
    </div>
  );
}

export default App;
