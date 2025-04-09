import { createReducer, on } from '@ngrx/store';
import {
  addTodo,
  removeTodo,
  toggleTodo,
  loadTodosSuccess,
  loadTodos,
  loadTodosFailure,
  setFilter,
} from './todo.actions';
import { Filter, Todo } from './todo.model';

export interface TodoState {
  todos: Todo[];
  filter: Filter;
  error: string | null;
  loading: boolean;
}

const storedTodos = localStorage.getItem('todos');
// export const initialState: TodoState = storedTodos ? JSON.parse(storedTodos) : [];
export const initialState: TodoState = {
  todos: storedTodos ? JSON.parse(storedTodos) : [],
  error: null,
  filter: 'all',
  loading: false,
};

export const todoReducer = createReducer(
  initialState,
  on(loadTodos, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadTodosSuccess, (state, { todos }) => {
    const updatedState = { ...state, todos, loading: false, error: null };
    return updatedState;
  }),
  on(loadTodosFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(setFilter, (state, { filter }) => ({
    ...state,
    filter,
  })),
  on(addTodo, (state, { todo }) => {
    const updatedState = { ...state, todos: [...state.todos, todo] };
    localStorage.setItem('todos', JSON.stringify(updatedState.todos));
    return updatedState;
  }),
  on(removeTodo, (state, { id }) => {
    const updatedState = {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    };
    localStorage.setItem('todos', JSON.stringify(updatedState.todos));
    return updatedState;
  }),
  on(toggleTodo, (state, { id }) => {
    const updatedState = {
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    };
    localStorage.setItem('todos', JSON.stringify(updatedState.todos));
    return updatedState;
  })
);
