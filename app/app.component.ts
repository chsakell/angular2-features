import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router, OnActivate } from '@angular/router';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

import { HomeComponent } from './home/home.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { ScheduleComponent } from './+schedule/schedule.component';
import { UsersComponent } from './users/users.component';
import { APP_PROVIDERS } from './app.providers';

import {SlimLoadingBar, SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';

@Component({
    selector: 'app-container',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, SlimLoadingBar],
    providers: [APP_PROVIDERS]
})
@Routes([
    { path: '/', component: HomeComponent },
    { path: '/schedules', component: SchedulesComponent },
    { path: '/schedule/:id', component: ScheduleComponent },
    { path: '/users', component: UsersComponent },
    { path: '*', component: HomeComponent }
])
export class AppComponent implements OnActivate {

    constructor() { }

    routerOnActivate() { }
}