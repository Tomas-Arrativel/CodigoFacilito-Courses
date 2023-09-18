import { useState, useRef, useEffect } from 'react';
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
  const [newSubsNumber, setNewSubsNumber] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
  };

  return (
    <div className='App' ref={divRef}>
      <h1>Midu Subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
