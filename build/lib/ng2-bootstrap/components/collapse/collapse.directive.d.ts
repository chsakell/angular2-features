import { ElementRef, EventEmitter, OnInit, Renderer } from '@angular/core';
export declare class CollapseDirective implements OnInit {
    collapsed: EventEmitter<any>;
    expanded: EventEmitter<any>;
    display: string;
    isExpanded: boolean;
    isCollapsed: boolean;
    isCollapse: boolean;
    isCollapsing: boolean;
    collapse: boolean;
    private _el;
    private _renderer;
    constructor(_el: ElementRef, _renderer: Renderer);
    ngOnInit(): void;
    toggle(): void;
    hide(): void;
    show(): void;
}
