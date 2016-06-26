import { provideRouter  } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserListComponent } from './users/user-list.component';
import { ScheduleRoutes } from './schedules/schedule.routes';

export const routes = [
    ...ScheduleRoutes,
    { path: 'users', component: UserListComponent },
    { path: '', component: HomeComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];