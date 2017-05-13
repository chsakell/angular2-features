import { EventEmitter, OnDestroy, TemplateRef } from '@angular/core';
import { TabsetComponent } from './tabset.component';
export declare class TabDirective implements OnDestroy {
    heading: string;
    disabled: boolean;
    removable: boolean;
    customClass: string;
    /** tab active state toggle */
    active: boolean;
    select: EventEmitter<TabDirective>;
    deselect: EventEmitter<TabDirective>;
    removed: EventEmitter<TabDirective>;
    addClass: boolean;
    headingRef: TemplateRef<any>;
    tabset: TabsetComponent;
    private _active;
    constructor(tabset: TabsetComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
