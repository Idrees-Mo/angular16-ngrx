import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from './todo.model';

export const selectTodosFeature = createFeatureSelector<Todo[]>('todos');

// This selector retrieves the entire todos state
export const selectAllTodos = createSelector(
  selectTodosFeature,
  (todos) => todos
);

// This selector retrieves the completed todos
export const selectCompletedTodos = createSelector(
  selectTodosFeature,
  (todos) => todos.filter((todo) => todo.completed)
);
// This selector retrieves the pending todos
export const selectPendingTodos = createSelector(selectTodosFeature, (todos) =>
  todos.filter((todo) => !todo.completed)
);
// This selector retrieves the total number of todos
export const selectTotalTodos = createSelector(
  selectTodosFeature,
  (todos) => todos.length
);
