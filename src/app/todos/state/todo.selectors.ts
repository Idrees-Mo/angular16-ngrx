import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';
import { selectRouteParam } from '../../shared/router/router.selector';

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

export const selectFilter = createSelector(
  selectTodosFeature,
  (state) => state.filter
);
// This selector retrieves the filter value from the state
export const selectFilteredTodos = createSelector(
  selectAllTodos,
  selectFilter,
  (todos, filter) => {
    switch (filter) {
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'incomplete':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }
);

// This selector retrieves the todo ID from the route parameters
export const selectTodoIdParam = selectRouteParam('id');
