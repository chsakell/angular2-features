import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES, 
         RouteSegment, OnActivate, RouteTree } from '@angular/router';

import { ScheduleEditComponent } from './schedule-edit.component';

@Component({
    moduleId: module.id,
    selector: 'app-schedule',
    templateUrl: 'schedule.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
  { path: '/', component: ScheduleEditComponent },
  { path:'/edit', component: ScheduleEditComponent }
])
export class ScheduleComponent implements OnActivate {

    displayMode: DisplayModeEnum;
    displayModeEnum = DisplayModeEnum;

    constructor(private router: Router) { 

    }

    routerOnActivate(current: RouteSegment, prev?: RouteSegment,
      currTree?: RouteTree, prevTree?: RouteTree) {
      var path = currTree.children(current)[0].stringifiedUrlSegments;
      switch (path) {
        case 'details':
          this.displayMode = DisplayModeEnum.Details;
          break;
        case 'orders':
          this.displayMode = DisplayModeEnum.Orders;
          break;
        case 'edit':
          this.displayMode = DisplayModeEnum.Edit;
          break;
      }
    }

}

enum DisplayModeEnum {
  Details=0,
  Orders=1,
  Edit=2
}