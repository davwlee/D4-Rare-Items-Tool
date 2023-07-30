import React from 'react';
import ItemSelector from './ItemSelector.js';

const App = () => {
  return (
    <div>
      <nav>
        <a href=""> Home </a>
        <a href="https://d4uniques.com"> Unique Finder </a> 
        <a href=""> Rare Finder </a> 
      </nav>
      <h1>Unique Selector</h1>
      <ItemSelector />
    </div>
  );
};

export default App;