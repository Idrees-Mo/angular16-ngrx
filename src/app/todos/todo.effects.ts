import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, of } from 'rxjs';
import { loadTodos, loadTodosSuccess, loadTodosFailure } from './todo.actions';
import { Todo } from './todo.model';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

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
