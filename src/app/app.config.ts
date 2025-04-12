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
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from './todos/state/todo.reducer';
import { TodoEffects } from './todos/state/todo.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      todoState: todoReducer,
      router: routerReducer,
    }),
    provideRouterStore(),
    provideEffects([TodoEffects]), // Register the TodoEffects
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
