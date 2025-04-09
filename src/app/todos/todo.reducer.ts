import { createReducer, on } from '@ngrx/store';
import {
  addTodo,
  removeTodo,
  toggleTodo,
  loadTodosSuccess,
} from './todo.actions';
import { Todo } from './todo.model';

export interface TodoState {
  todos: Todo[];
  error: string | null;
}

const storedTodos = localStorage.getItem('todos');
// export const initialState: TodoState = storedTodos ? JSON.parse(storedTodos) : [];
export const initialState: TodoState = {
  todos: storedTodos ? JSON.parse(storedTodos) : [],
  error: null,
};

export const todoReducer = createReducer(
  initialState,
  on(loadTodosSuccess, (state, { todos }) => {
    const updatedState = { ...state, todos };
    return updatedState;
  }),
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
