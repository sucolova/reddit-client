import React from 'react';
import { Posts } from './features/posts/posts';
import { SubReddits } from './features/subReddits/subReddits';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {faRedditAlien} from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <FontAwesomeIcon icon={faRedditAlien} />
        <FontAwesomeIcon icon={faCoffee} />
        <h2>Reddit client</h2>
        <SubReddits />
      </header>
      <main>
        <Posts/>
      </main>
    </div>
  );
}

export default App;
