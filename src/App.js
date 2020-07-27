import React, { useState, useEffect } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

import Header from 'components/header';
import AddButton from 'components/addbutton';
import ConfirmOverlay from 'components/confirmoverlay';
import ConfirmOverlayItemDelete from 'components/confirmoverlayitemdelete/ConfirmOverlayItemDelete';
import ClearListButton from 'components/clearlistbutton';
import Quotes from 'components/quotes/Quotes';
import TodoList from 'components/todolist';
import InputOverlay from 'components/inputoverlay';

import { todosDefault, generateID } from 'data';

function App() {
  const [todos, setTodos] = useState([]);

  const [isConfirmOverlayVisible, setIsConfirmOverlayVisible] = useState(false);
  const [
    isConfirmOverlayItemDeleteVisible,
    setIsConfirmOverlayItemDeleteVisible
  ] = useState(false);
  const [isBottomOverlayVisible, setIsBottomOverlayVisible] = useState(false);
  const [bottomOverlayMode, setBottomOverlayMode] = useState('add');
  const [editTodoId, setEditTodoId] = useState(null);
  const [todoIdDel, setTodoIdDel] = useState(null);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));

    if (savedTodos) {
      const newTodos = savedTodos.map((todo) => ({
        ...todo,
        dateAdded: new Date(todo.dateAdded),
        dateDone: todo.dateDone !== null ? new Date(todo.dateDone) : null
      }));
      setTodos(newTodos);
      console.log(newTodos);
    } else setTodos(todosDefault);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // CRUD METHODS
  const addTodo = (title) => {
    const newTodo = {
      id: generateID(),
      title,
      isDone: false,
      dateAdded: new Date(),
      dateDone: null
    };
    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
    console.log(newTodos);
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

    if (todo.isDone) todo.dateDone = new Date();

    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleConfirmOverlayItemDelete = (id) => {
    setTodoIdDel(id);
    setIsConfirmOverlayItemDeleteVisible(!isConfirmOverlayItemDeleteVisible);
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
        {todos.length > 0 && (
          <motion.div layout>
            <ClearListButton toggleConfirmOverlay={toggleConfirmOverlay} />
          </motion.div>
        )}

        <TodoList
          todos={todos}
          toggleDone={toggleDone}
          showInputOverlay={showInputOverlay}
          toggleConfirmOverlayItemDelete={toggleConfirmOverlayItemDelete}
        />

        <motion.div layout>
          <Quotes />
        </motion.div>
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
        {isConfirmOverlayItemDeleteVisible && (
          <ConfirmOverlayItemDelete
            toggleOverlayItemDelete={toggleConfirmOverlayItemDelete}
            todoIdDel={todoIdDel}
            deleteTodo={deleteTodo}
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
