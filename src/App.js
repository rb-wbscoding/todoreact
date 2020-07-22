import React from 'react';
import './App.css';

import Header from "./components/header/Header";
import AddButton from "./components/addbutton/AddButton";
import ConfirmOverlay from "./components/confirmoverlay/ConfirmOverlay";
import ClearListButton from "./components/clearlistbutton/ClearListButton";
import TodoList from './components/todolist';
import InputOverlay from './components/inputoverlay';

function App() {
  return (
    <div className="App">
      <Header />
      <ClearListButton />
      <ConfirmOverlay />
      <AddButton />
      <TodoList />
      {false && <InputOverlay />}
    </div>
  );
}

export default App;
