import { AfterViewInit, ChangeDetectorRef, ElementRef, TemplateRef } from '@angular/core';
import { TooltipOptions } from './tooltip-options.class';
export declare class TooltipContainerComponent implements AfterViewInit {
    classMap: any;
    top: string;
    left: string;
    display: string;
    content: string;
    htmlContent: string | TemplateRef<any>;
    private placement;
    private popupClass;
    private animation;
    private isOpen;
    private appendToBody;
    private hostEl;
    private context;
    private element;
    private cdr;
    constructor(element: ElementRef, cdr: ChangeDetectorRef, options: TooltipOptions);
    ngAfterViewInit(): void;
    readonly isTemplate: boolean;
}
