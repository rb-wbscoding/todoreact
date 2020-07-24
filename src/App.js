import React, { useState } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

import './App.css';
import Header from './components/header/Header';
import AddButton from './components/addbutton/AddButton';
import ConfirmOverlay from './components/confirmoverlay/ConfirmOverlay';
import ClearListButton from './components/clearlistbutton/ClearListButton';
import TodoList from './components/todolist';
import InputOverlay from './components/inputoverlay';
import { todosDefault, generateID } from './data/todosDefault';

function App() {
  const [todos, setTodos] = useState(todosDefault);

  const [isConfirmOverlayVisible, setIsConfirmOverlayVisible] = useState(false);

  const [isBottomOverlayVisible, setIsBottomOverlayVisible] = useState(false);
  const [bottomOverlayMode, setBottomOverlayMode] = useState('add');
  const [editTodoId, setEditTodoId] = useState(null);

  const getEditValue = () => {
    if (editTodoId) return todos.find((todo) => todo.id === editTodoId).title;
    return '';
  };

  const showInputOverlay = (mode, id) => {
    if (mode === 'add') {
      setIsBottomOverlayVisible(true);
      setBottomOverlayMode('add');
    } else {
      setEditTodoId(id);
      setIsBottomOverlayVisible(true);
      setBottomOverlayMode('edit');
    }
  };

  const hideInputOverlay = () => {
    setEditTodoId(null);
    setIsBottomOverlayVisible(false);
  };

  const addTodo = (title) => {
    const newTodo = {
      id: generateID(),
      title,
      isDone: false
    };
    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
  };

  const editTodo = (title) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === editTodoId);

    todo.title = title;

    setTodos(newTodos);
  };

  const toggleDone = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);

    todo.isDone = !todo.isDone;

    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const clearList = () => setTodos([]);

  const toggleConfirmOverlay = () =>
    setIsConfirmOverlayVisible(!isConfirmOverlayVisible);

  return (
    <div className="App">
      <Header />
      <AddButton showInputOverlay={showInputOverlay} />

      <AnimateSharedLayout>
        <TodoList
          todos={todos}
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
          showInputOverlay={showInputOverlay}
        />

        {todos.length > 0 && (
          <motion.div layout>
            <ClearListButton toggleConfirmOverlay={toggleConfirmOverlay} />
          </motion.div>
        )}
      </AnimateSharedLayout>

      <AnimatePresence>
        {isConfirmOverlayVisible && (
          <ConfirmOverlay
            toggleOverlay={toggleConfirmOverlay}
            clearList={clearList}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isBottomOverlayVisible && (
          <>
            <InputOverlay
              mode={bottomOverlayMode}
              initialValue={getEditValue()}
              addTodo={addTodo}
              editTodo={editTodo}
              hideInputOverlay={hideInputOverlay}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
