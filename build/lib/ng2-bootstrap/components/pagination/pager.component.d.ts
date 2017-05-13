import { ElementRef, OnInit, Renderer } from '@angular/core';
import { NgModel } from '@angular/forms';
import { PaginationComponent } from './pagination.component';
export declare class PagerComponent extends PaginationComponent implements OnInit {
    config: any;
    constructor(cd: NgModel, renderer: Renderer, elementRef: ElementRef);
}
