import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.model';

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
