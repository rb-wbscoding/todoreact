import React from 'react';
import './App.css';
import Header from './components/header/Header';
import AddButton from './components/addbutton/AddButton';
import TodoList from './components/todolist/TodoList';
import InputOverlay from './components/inputoverlay/InputOverlay';

function App() {
  return (
    <div className="App">
      <Header />
      <AddButton />
      <TodoList />
      {false && <InputOverlay />}
    </div>
  );
}

export default App;
