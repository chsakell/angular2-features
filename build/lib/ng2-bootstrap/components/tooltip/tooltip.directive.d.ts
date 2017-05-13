import { ChangeDetectorRef, TemplateRef, ViewContainerRef, EventEmitter } from '@angular/core';
import { ComponentsHelper } from '../utils/components-helper.service';
export declare class TooltipDirective {
    content: string;
    htmlContent: string | TemplateRef<any>;
    placement: string;
    isOpen: boolean;
    enable: boolean;
    animation: boolean;
    appendToBody: boolean;
    popupClass: string;
    tooltipContext: any;
    delay: number;
    tooltipStateChanged: EventEmitter<boolean>;
    viewContainerRef: ViewContainerRef;
    componentsHelper: ComponentsHelper;
    private changeDetectorRef;
    private visible;
    private tooltip;
    private delayTimeoutId;
    constructor(viewContainerRef: ViewContainerRef, componentsHelper: ComponentsHelper, changeDetectorRef: ChangeDetectorRef);
    show(): void;
    hide(): void;
    private triggerStateChanged();
}
