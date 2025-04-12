import { Routes } from '@angular/router';
import { TodoListContainerComponent } from './containers/todo-list-container/todo-list-container.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';

export const todosRoutes: Routes = [
  { path: '', component: TodoListContainerComponent },
  { path: ':id', component: TodoDetailComponent },
];
