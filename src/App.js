import React from 'react';

import Todo from './components/Todo.js';

const App = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn react' />
      <Todo text='Learn advanced react' />
      <Todo text='Master react' />
      <Todo text='Build projects in react' />
    </div>
  );
};

export default App;
