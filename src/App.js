import React from 'react';
import { Posts } from './features/posts/posts';
import { SubReddits } from './features/subReddits/subReddits';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
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
