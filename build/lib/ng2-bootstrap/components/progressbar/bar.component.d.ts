import { OnDestroy, OnInit } from '@angular/core';
import { ProgressDirective } from './progress.directive';
export declare class BarComponent implements OnInit, OnDestroy {
    type: string;
    max: number;
    value: number;
    percent: number;
    transition: string;
    progress: ProgressDirective;
    private _value;
    constructor(progress: ProgressDirective);
    ngOnInit(): void;
    ngOnDestroy(): void;
    recalculatePercentage(): void;
}
