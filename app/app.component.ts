import { Component, OnInit, ViewContainerRef } from '@angular/core';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
    selector: 'scheduler',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {

    constructor(private viewContainerRef: ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
}