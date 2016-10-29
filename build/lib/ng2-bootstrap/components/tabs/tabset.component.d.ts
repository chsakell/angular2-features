import { OnDestroy, OnInit } from '@angular/core';
import { TabDirective } from './tab.directive';
export declare class TabsetComponent implements OnInit, OnDestroy {
    vertical: boolean;
    justified: boolean;
    type: string;
    clazz: boolean;
    tabs: Array<TabDirective>;
    classMap: any;
    private isDestroyed;
    private _vertical;
    private _justified;
    private _type;
    ngOnInit(): void;
    ngOnDestroy(): void;
    addTab(tab: TabDirective): void;
    removeTab(tab: TabDirective): void;
    private getClosestTabIndex(index);
    private hasAvailableTabs(index);
    private setClassMap();
}
