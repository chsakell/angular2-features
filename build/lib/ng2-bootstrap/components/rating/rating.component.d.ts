import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/forms';
export declare class RatingComponent implements ControlValueAccessor, OnInit {
    max: number;
    stateOn: string;
    stateOff: string;
    readonly: boolean;
    titles: Array<string>;
    ratingStates: {
        stateOn: string;
        stateOff: string;
    }[];
    onHover: EventEmitter<number>;
    onLeave: EventEmitter<number>;
    onChange: any;
    onTouched: any;
    cd: NgModel;
    range: Array<any>;
    value: number;
    private preValue;
    onKeydown(event: KeyboardEvent): void;
    constructor(cd: NgModel);
    ngOnInit(): void;
    writeValue(value: number): void;
    protected enter(value: number): void;
    reset(): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    private buildTemplateObjects(ratingStates, max);
    private rate(value);
}
