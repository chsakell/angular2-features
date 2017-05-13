import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const RADIO_CONTROL_VALUE_ACCESSOR: any;
export declare class ButtonRadioDirective implements ControlValueAccessor, OnInit {
    private el;
    onChange: any;
    onTouched: any;
    btnRadio: any;
    uncheckable: boolean;
    value: any;
    readonly isActive: boolean;
    onClick(): void;
    constructor(el: ElementRef);
    ngOnInit(): void;
    onBlur(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
