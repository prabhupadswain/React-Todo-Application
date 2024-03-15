import React from 'react';

import Todo from './components/Todo.js';
import TestingEvents from './components/TestingEvents.js';

const App = () => {
  return (
    <div>
      <h1>Handling Click Events</h1>
      <TestingEvents />
      <h2>My Todos</h2>
      <Todo text='Learn react' />
      <Todo text='Master react' />
      <Todo text='Build projects in react' />
    </div>
  );
};

export default App;
