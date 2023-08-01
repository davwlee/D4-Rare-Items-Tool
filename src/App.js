import React from 'react';
import ItemSelector from './ItemSelector.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div class="headero">
      <div class="navero">
        <a href="https://d4uniques.com"> Home </a>
        <a href="https://uni.d4uniques.com/"> Unique Finder </a>
        <a href="https://rares.d4uniques.com"> Rare Finder </a>
      </div>
      <h1>Rare Item Selector</h1>
      <ItemSelector />
    </div>
  );
};

export default App;
