import React, { useState, useEffect } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

import Header from 'components/header';
import AddButton from 'components/addbutton';
import ConfirmOverlay from 'components/confirmoverlay';
import ClearListButton from 'components/clearlistbutton';
import TodoList from 'components/todolist';
import InputOverlay from 'components/inputoverlay';

import { todosDefault, generateID } from 'data';

function App() {
  const [todos, setTodos] = useState([]);

  const [isConfirmOverlayVisible, setIsConfirmOverlayVisible] = useState(false);
  const [isBottomOverlayVisible, setIsBottomOverlayVisible] = useState(false);
  const [bottomOverlayMode, setBottomOverlayMode] = useState('add');
  const [editTodoId, setEditTodoId] = useState(null);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) setTodos(savedTodos);
    else setTodos(todosDefault);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // CRUD METHODS
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

  const getEditValue = () => {
    if (editTodoId) return todos.find((todo) => todo.id === editTodoId).title;
    return '';
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

  // OVERLAY METHODS
  const toggleConfirmOverlay = () =>
    setIsConfirmOverlayVisible(!isConfirmOverlayVisible);

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

  return (
    <div>
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
