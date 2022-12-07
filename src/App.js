import React from 'react';
import { Posts } from './features/posts/posts';
import { SubReddits } from './features/subReddits/subReddits';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRedditAlien} from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div id='logo'>
          <FontAwesomeIcon icon={faRedditAlien} />
          <h2>minimal</h2>
        </div>
      </header>
      <nav>
        <SubReddits />
      </nav>
      <main>
        <Posts/>
      </main>
    </div>
  );
}

export default App;
