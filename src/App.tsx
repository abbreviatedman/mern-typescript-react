import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading';

const colors = ['blue', 'green', 'orange'];
const sizes = ['1em', '2em', '3em']

function App() {
  const [color, setColor] = useState('blue');
  const [size, setSize] = useState('2em');

  return (
    <div className="App">
      <Heading color={color} size={size} />
      <button onClick={() => setSize('3em')}>BIGGIFY</button>
    </div>
  );
}

export default App;
