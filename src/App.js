import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import AddButton from './components/addbutton/AddButton';
import ConfirmOverlay from './components/confirmoverlay/ConfirmOverlay';
import ClearListButton from './components/clearlistbutton/ClearListButton';
import TodoList from './components/todolist';
import InputOverlay from './components/inputoverlay';
import todosDefault from './data/todosDefault';

function App() {
  const [todos, setTodos] = useState(todosDefault);
  const [isConfirmOverlayVisible, setIsConfirmOverlayVisible] = useState(false);
  const [isBottomOverlayVisible, setIsBottomOverlayVisible] = useState(false);

  const toggleDone = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.isDone = !todo.isDone;
    setTodos(newTodos);
  };

  // add todo
  // edit todo
  // check off todo
  // delete todo
  // clear the list

  const clearList = () => setTodos([]);

  const toggleConfirmOverlay = () =>
    setIsConfirmOverlayVisible(!isConfirmOverlayVisible);

  const toggleBottomOverlay = () =>
    setIsBottomOverlayVisible(!isBottomOverlayVisible);

  return (
    <div className="App">
      <Header />
      <AddButton action={toggleBottomOverlay} />
      <TodoList todos={todos} toggleDone={toggleDone} />
      <ClearListButton action={toggleConfirmOverlay} />
      {isConfirmOverlayVisible && (
        <ConfirmOverlay
          toggleOverlay={toggleConfirmOverlay}
          clearList={clearList}
        />
      )}
      {isBottomOverlayVisible && (
        <InputOverlay toggleOverlay={toggleBottomOverlay} />
      )}
    </div>
  );
}

export default App;
