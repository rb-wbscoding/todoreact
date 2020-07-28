import React, { useReducer, useEffect } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

import Header from 'components/header';
import AddButton from 'components/addbutton';
import ConfirmOverlay from 'components/confirmoverlay';
import ConfirmOverlayDone from 'components/confirmoverlaydone';
import ConfirmOverlayItemDelete from 'components/confirmoverlayitemdelete/ConfirmOverlayItemDelete';
import ButtonHolder from 'components/buttonholder';
import Quotes from 'components/quotes/Quotes';
import TodoList from 'components/todolist';
import InputOverlay from 'components/inputoverlay';

import { todosDefault, generateID } from 'data';

const initialState = {
  todos: [],
  showOverlay: null,
  editId: null,
  editValue: '',
  deleteId: null
};

const todoReducer = (state, action) => {
  switch (action.type) {
    // Initialization
    case 'SET_TODOS':
      return { ...state, todos: [...action.value] };

    // CRUD Operations
    case 'ADD_TODO':
      if (action.value.trim() === '') {
        alert('Please enter text.');
        return { ...state };
      }

      const newTodo = {
        id: generateID(),
        title: action.value,
        isDone: false,
        dateAdded: new Date(),
        dateDone: null
      };

      return { ...state, todos: [...state.todos, newTodo], showOverlay: null };

    case 'EDIT_TODO':
      if (action.value.trim() === '') {
        alert('Please enter text.');
        return { ...state };
      }

      const editTodos = [...state.todos];
      const editTodo = editTodos.find((todo) => todo.id === action.id);
      editTodo.title = action.value;

      return {
        ...state,
        todos: [...editTodos],
        showOverlay: null,
        editValue: null,
        editId: null
      };

    case 'TOGGLE_DONE':
      const toggleTodos = [...state.todos];
      const toggleTodo = toggleTodos.find((todo) => todo.id === action.id);

      toggleTodo.isDone = action.value;
      if (toggleTodo.isDone) toggleTodo.dateDone = new Date();
      else toggleTodo.dateDone = null;

      return { ...state, todos: [...toggleTodos] };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.id)],
        showOverlay: null,
        deleteId: null
      };

    case 'CLEAR_ALL':
      return { ...state, todos: [], showOverlay: null };

    case 'CLEAR_DONE':
      return {
        ...state,
        todos: [...state.todos.filter((todo) => !todo.isDone)],
        showOverlay: null
      };

    // UI state
    case 'SHOW_CONFIRM_CLEARALL':
      return { ...state, showOverlay: 'clear-all' };

    case 'SHOW_CONFIRM_CLEARDONE':
      return { ...state, showOverlay: 'clear-done' };

    case 'SHOW_CONFIRM_DELITEM':
      return { ...state, showOverlay: 'delete-item', deleteId: action.id };

    case 'SHOW_INPUT_ADD':
      return { ...state, showOverlay: 'add-item' };

    case 'SHOW_INPUT_EDIT':
      return {
        ...state,
        showOverlay: 'edit-item',
        editValue: state.todos.find((todo) => todo.id === action.id).title,
        editId: action.id
      };

    case 'CANCEL_OVERLAY':
      return {
        ...state,
        showOverlay: null,
        editValue: null,
        editId: null,
        deleteId: null
      };

    // Fallback
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { todos, showOverlay, editId, editValue, deleteId } = state;

  // Read todos from localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));

    if (savedTodos) {
      const newTodos = savedTodos.map((todo) => ({
        ...todo,
        dateAdded: new Date(todo.dateAdded),
        dateDone: todo.dateDone !== null ? new Date(todo.dateDone) : null
      }));

      dispatch({ type: 'SET_TODOS', value: newTodos });
    } else dispatch({ type: 'SET_TODOS', value: todosDefault });
  }, []);

  // Write todos to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      {/* UI */}
      <Header />

      <AnimateSharedLayout>
        <AnimatePresence>
          {todos.length > 0 && (
            <motion.div key="clearlist" layout>
              <ButtonHolder dispatch={dispatch} />
            </motion.div>
          )}

          <TodoList key="todolist" todos={todos} dispatch={dispatch} />

          <motion.div key="quotescomponent" layout>
            <Quotes />
          </motion.div>
        </AnimatePresence>
      </AnimateSharedLayout>

      <AddButton dispatch={dispatch} />

      {/* OVERLAYS */}
      <AnimatePresence>
        {showOverlay === 'clear-all' && <ConfirmOverlay dispatch={dispatch} />}
      </AnimatePresence>

      <AnimatePresence>
        {showOverlay === 'clear-done' && (
          <ConfirmOverlayDone dispatch={dispatch} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showOverlay === 'delete-item' && (
          <ConfirmOverlayItemDelete todoIdDel={deleteId} dispatch={dispatch} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showOverlay === 'add-item' && (
          <InputOverlay mode="add" dispatch={dispatch} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showOverlay === 'edit-item' && (
          <InputOverlay
            mode="edit"
            editId={editId}
            initialValue={editValue}
            dispatch={dispatch}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
