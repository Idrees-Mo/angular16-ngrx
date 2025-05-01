import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadTodos, loadTodosSuccess, loadTodosFailure } from './todo.actions';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodoEffects {
  private actions$ = inject(Actions);
  private http = inject(HttpClient);

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      mergeMap(() =>
        this.http
          .get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
          .pipe(
            map((todos) => loadTodosSuccess({ todos })),
            catchError((error) =>
              of(loadTodosFailure({ error: error.message }))
            )
          )
      )
    )
  );
}
