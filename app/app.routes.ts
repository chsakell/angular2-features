import { provideRouter  }          from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ScheduleRoutes } from './schedules/schedule.routes';

export const routes = [
    ...ScheduleRoutes,
    { path: 'users', component: UsersComponent },
    { path: '', component: HomeComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];