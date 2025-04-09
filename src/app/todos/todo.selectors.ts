import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from './todo.model';
import { TodoState } from './todo.reducer';

export const selectTodosFeature = createFeatureSelector<TodoState>('todoState');

// This selector retrieves the entire todos state
export const selectAllTodos = createSelector(
  selectTodosFeature,
  (state) => state.todos
);

// This selector retrieves the completed todos
export const selectCompletedTodos = createSelector(
  selectTodosFeature,
  (state) => state.todos.filter((todo) => todo.completed)
);
// This selector retrieves the pending todos
export const selectPendingTodos = createSelector(selectTodosFeature, (state) =>
  state.todos.filter((todo) => !todo.completed)
);
// This selector retrieves the total number of todos
export const selectTotalTodos = createSelector(
  selectTodosFeature,
  (state) => state.todos.length
);

export const selectLoading = createSelector(
  selectTodosFeature,
  (state) => state.loading
);

export const selectError = createSelector(
  selectTodosFeature,
  (state) => state.error
);
