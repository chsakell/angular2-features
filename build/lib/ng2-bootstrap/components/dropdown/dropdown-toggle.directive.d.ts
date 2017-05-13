import { ElementRef, OnInit } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
export declare class DropdownToggleDirective implements OnInit {
    isDisabled: boolean;
    addToggleClass: boolean;
    addClass: boolean;
    dropdown: DropdownDirective;
    el: ElementRef;
    constructor(dropdown: DropdownDirective, el: ElementRef);
    ngOnInit(): void;
    readonly isOpen: boolean;
    toggleDropdown(event: MouseEvent): boolean;
}
