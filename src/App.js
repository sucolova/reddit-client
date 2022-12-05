import React from 'react';
import { Posts } from './features/posts/posts';
import { SubReddits } from './features/subReddits/subReddits';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Reddit client</h2>
      </header>
      <SubReddits />
      <Posts/>
    </div>
  );
}

export default App;
