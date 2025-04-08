import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { todoReducer } from './todos/todo.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { TodoEffects } from './todos/todo.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      todos: todoReducer,
    }),
    provideEffects([TodoEffects]), // Register the TodoEffects
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
