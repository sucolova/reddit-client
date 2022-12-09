import React from 'react';
import { Posts } from './features/posts/posts';
import { SubReddits } from './features/subReddits/subReddits';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRedditAlien} from '@fortawesome/free-brands-svg-icons';
import './App.css';
import 'dracula-ui/styles/dracula-ui.css';

function App() {
  return (
    <div className="App">
      <header>
        <div id='logo'>
          <FontAwesomeIcon icon={faRedditAlien} />
          <h1 color='black'>minimal</h1>
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
