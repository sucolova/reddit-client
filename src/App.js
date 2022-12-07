import React from 'react';
import { Posts } from './features/posts/posts';
import { SubReddits } from './features/subReddits/subReddits';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRedditAlien} from '@fortawesome/free-brands-svg-icons';
import './App.css';
import 'dracula-ui/styles/dracula-ui.css';
import {Heading, Card} from 'dracula-ui';

function App() {
  return (
    <div className="App">
      <header>
        <Card color='animated' id='logo'>
          <FontAwesomeIcon icon={faRedditAlien} />
          <Heading color='black'>minimal</Heading>
        </Card>
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
