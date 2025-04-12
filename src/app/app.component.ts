import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // title = 'ngrx-todo-app';
  // todos$!: Observable<Todo[]>; // ! non-null assertion operator, simply tells TypeScript that this property will be initialized later
  // filteredTodos$!: Observable<Todo[]>;
  // completedTodos$!: Observable<Todo[]>;
  // pendingTodos$!: Observable<Todo[]>;
  // totalTodos$!: Observable<number>;
  // loading$!: Observable<boolean>;
  // error$!: Observable<string | null>;
  // filter$!: Observable<string>;

  constructor() {
    // this.todos$ = this.store.select(selectAllTodos);
    // this.filteredTodos$ = this.store.select(selectFilteredTodos);
    // this.filter$ = this.store.select(selectFilter);
    // this.completedTodos$ = this.store.select(selectCompletedTodos);
    // this.pendingTodos$ = this.store.select(selectPendingTodos);
    // this.totalTodos$ = this.store.select(selectTotalTodos);
    // this.loading$ = this.store.select(selectLoading);
    // this.error$ = this.store.select(selectError);
  }

  // ngOnInit(): void {
  //   this.store.dispatch(loadTodos());
  // }

  // addTodo(todoTitle: string) {
  //   const newTodo: Todo = {
  //     id: Date.now(),
  //     title: todoTitle,
  //     completed: false,
  //   };
  //   this.store.dispatch(addTodo({ todo: newTodo }));
  // }

  // removeTodo(id: number) {
  //   this.store.dispatch(removeTodo({ id }));
  // }

  // toggleTodo(id: number) {
  //   this.store.dispatch(toggleTodo({ id }));
  // }

  // setFilter(filter: Filter) {
  //   this.store.dispatch(setFilter({ filter }));
  // }
}
