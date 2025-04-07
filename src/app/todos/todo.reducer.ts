import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo, toggleTodo } from './todo.actions';
import { Todo } from './todo.model';

// Load todos from localStorage (if available)
const storedTodos = localStorage.getItem('todos');
export const initialState: Todo[] = storedTodos ? JSON.parse(storedTodos) : [];

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => {
    const updatedState = [...state, todo];
    localStorage.setItem('todos', JSON.stringify(updatedState)); // Save to localStorage
    return updatedState;
  }),
  on(removeTodo, (state, { id }) => {
    const updatedState = state.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(updatedState)); // Save to localStorage
    return updatedState;
  }),
  on(toggleTodo, (state, { id }) => {
    const updatedState = state.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    localStorage.setItem('todos', JSON.stringify(updatedState)); // Save to localStorage
    return updatedState;
  })
);
