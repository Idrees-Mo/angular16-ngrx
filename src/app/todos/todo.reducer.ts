import { createReducer, on } from '@ngrx/store';
import { Todo } from './todo.model';
import { addTodo, removeTodo, toggleTodo } from './todo.actions';

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => [...state, todo]),
  on(removeTodo, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(toggleTodo, (state, { id }) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  )
);
