import { createReducer, on } from '@ngrx/store';
import {
  addTodo,
  removeTodo,
  toggleTodo,
  loadTodosSuccess,
} from './todo.actions';
import { Todo } from './todo.model';

const storedTodos = localStorage.getItem('todos');
export const initialState: Todo[] = storedTodos ? JSON.parse(storedTodos) : [];

export const todoReducer = createReducer(
  initialState,
  on(loadTodosSuccess, (state, { todos }) => [...state, ...todos]),
  on(addTodo, (state, { todo }) => {
    const updatedState = [...state, todo];
    localStorage.setItem('todos', JSON.stringify(updatedState));
    return updatedState;
  }),
  on(removeTodo, (state, { id }) => {
    const updatedState = state.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(updatedState));
    return updatedState;
  }),
  on(toggleTodo, (state, { id }) => {
    const updatedState = state.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    localStorage.setItem('todos', JSON.stringify(updatedState));
    return updatedState;
  })
);
