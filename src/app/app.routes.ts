import { Routes } from '@angular/router';
import { todosRoutes } from './todos/todos.routes';

export const routes: Routes = [
  { path: 'todos', children: todosRoutes },
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full',
  },
];
