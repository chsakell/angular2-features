import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

import { APP_PROVIDERS } from './app.providers';

import {SlimLoadingBar, SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';

@Component({
    selector: 'app-container',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, SlimLoadingBar],
    providers: [APP_PROVIDERS]
})
export class AppComponent {

    constructor() { }
}