import React from 'react';

import Todo from './components/Todo.js';
import Testing from './components/Testing.js';

const App = () => {
  return (
    <div>
      <h1>Testing Click Events</h1>
      <Testing />
      <h2>My Todos</h2>
      <Todo text='Learn react' />
      <Todo text='Learn advanced react' />
      <Todo text='Master react' />
      <Todo text='Build projects in react' />
    </div>
  );
};

export default App;
