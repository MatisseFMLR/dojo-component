import React from 'react';
import './App.css';
import Article from './Article';

function Main() {
    return(
    <main class="container">
      <div class="cards">
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </main>
    )
}

export default Main