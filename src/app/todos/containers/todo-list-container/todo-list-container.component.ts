import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { loadTodos } from '../../state/todo.actions';
import { selectAllTodos } from '../../state/todo.selectors';
import { AsyncPipe } from '@angular/common';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';

@Component({
  selector: 'app-todo-list-container',
  standalone: true,
  imports: [AsyncPipe, TodoListComponent],
  templateUrl: './todo-list-container.component.html',
  styleUrl: './todo-list-container.component.scss',
})
export class TodoListContainerComponent {
  todos$!: Observable<Todo[]>;

  constructor(private store: Store, private router: Router) {
    this.todos$ = this.store.select(selectAllTodos);

    this.store.dispatch(loadTodos());
  }

  onView(id: number): void {
    this.router.navigate(['/todos', id]);
  }
}
