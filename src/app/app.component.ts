import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from './todos/todo.model';
import { Store } from '@ngrx/store';
import { addTodo, removeTodo, toggleTodo } from './todos/todo.actions';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngrx-todo-app';
  todos$!: Observable<Todo[]>; // ! non-null assertion operator, simply tells TypeScript that this property will be initialized later

  constructor(private store: Store<{ todos: Todo[] }>) {
    this.todos$ = this.store.select('todos');
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
}
