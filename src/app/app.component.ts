import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Filter, Todo } from './todos/models/todo.model';
import { Store } from '@ngrx/store';
import {
  addTodo,
  loadTodos,
  removeTodo,
  setFilter,
  toggleTodo,
} from './todos/state/todo.actions';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import {
  selectAllTodos,
  selectCompletedTodos,
  selectError,
  selectFilter,
  selectFilteredTodos,
  selectLoading,
  selectPendingTodos,
  selectTotalTodos,
} from './todos/state/todo.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ngrx-todo-app';
  todos$!: Observable<Todo[]>; // ! non-null assertion operator, simply tells TypeScript that this property will be initialized later
  filteredTodos$!: Observable<Todo[]>;
  completedTodos$!: Observable<Todo[]>;
  pendingTodos$!: Observable<Todo[]>;
  totalTodos$!: Observable<number>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  filter$!: Observable<string>;

  constructor(private store: Store<{ todos: Todo[] }>) {
    this.todos$ = this.store.select(selectAllTodos);
    this.filteredTodos$ = this.store.select(selectFilteredTodos);
    this.filter$ = this.store.select(selectFilter);
    this.completedTodos$ = this.store.select(selectCompletedTodos);
    this.pendingTodos$ = this.store.select(selectPendingTodos);
    this.totalTodos$ = this.store.select(selectTotalTodos);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }

  addTodo(todoTitle: string) {
    const newTodo: Todo = {
      id: Date.now(),
      title: todoTitle,
      completed: false,
    };
    this.store.dispatch(addTodo({ todo: newTodo }));
  }

  removeTodo(id: number) {
    this.store.dispatch(removeTodo({ id }));
  }

  toggleTodo(id: number) {
    this.store.dispatch(toggleTodo({ id }));
  }

  setFilter(filter: Filter) {
    this.store.dispatch(setFilter({ filter }));
  }
}
