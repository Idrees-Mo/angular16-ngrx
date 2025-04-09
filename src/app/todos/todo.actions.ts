import { createAction, props } from '@ngrx/store';
import { Filter, Todo } from './todo.model';

//Add Todo Action
export const addTodo = createAction('[Todo] Add', props<{ todo: Todo }>());

//Remove Todos Action
export const removeTodo = createAction(
  '[Todo] Remove',
  props<{ id: number }>()
);

//Toggle Todo Action
export const toggleTodo = createAction(
  '[Todo] Toggle',
  props<{ id: number }>()
);

// loading todos asynchronously

export const loadTodos = createAction('[Todo] Load');
export const loadTodosSuccess = createAction(
  '[Todo] Load Success',
  props<{ todos: Todo[] }>()
);
export const loadTodosFailure = createAction(
  '[Todo] Load Failure',
  props<{ error: string }>()
);

// Filter todos Action
export const setFilter = createAction(
  '[Todo] Set Filter',
  props<{ filter: Filter }>()
);
