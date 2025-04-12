import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, filter, map } from 'rxjs';
import { selectAllTodos, selectTodoIdParam } from '../../state/todo.selectors';
import { Todo } from '../../models/todo.model';
import {
  selectRouteParam,
  selectRouter,
} from '../../../shared/router/router.selector';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.scss',
})
export class TodoDetailComponent {
  todoId$: string | unknown;
  todo$: Observable<Todo | undefined>;

  constructor(private store: Store) {
    this.todo$ = combineLatest([
      this.store.select(selectAllTodos),
      this.store.select(selectTodoIdParam),
    ]).pipe(map(([todos, id]) => todos.find((todo) => todo.id === +id!)));

    this.store.select(selectRouter).subscribe(console.warn);
  }
}
