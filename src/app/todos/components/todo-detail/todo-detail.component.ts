import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map } from 'rxjs';
import { selectAllTodos, selectTodoIdParam } from '../../state/todo.selectors';
import { Todo } from '../../models/todo.model';
import { Router } from '@angular/router';

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

  constructor(private store: Store, private router: Router) {
    this.todo$ = combineLatest([
      this.store.select(selectAllTodos),
      this.store.select(selectTodoIdParam),
    ]).pipe(map(([todos, id]) => todos.find((todo) => todo.id === +id!)));
  }

  goBack(): void {
    this.router.navigate(['/']);

    // Alternative way to navigate back using the location service
    // this.location.back();
  }
}
