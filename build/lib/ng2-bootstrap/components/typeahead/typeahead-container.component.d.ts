import { ElementRef, TemplateRef } from '@angular/core';
import { TypeaheadOptions } from './typeahead-options.class';
import { TypeaheadDirective } from './typeahead.directive';
import { TypeaheadMatch } from './typeahead-match.class';
export declare class TypeaheadContainerComponent {
    parent: TypeaheadDirective;
    query: any;
    element: ElementRef;
    isFocused: boolean;
    top: string;
    left: string;
    display: string;
    private _active;
    private _matches;
    private placement;
    constructor(element: ElementRef, options: TypeaheadOptions);
    matches: Array<TypeaheadMatch>;
    readonly itemTemplate: TemplateRef<any>;
    position(hostEl: ElementRef): void;
    selectActiveMatch(): void;
    prevActiveMatch(): void;
    nextActiveMatch(): void;
    protected selectActive(value: TypeaheadMatch): void;
    protected hightlight(match: TypeaheadMatch, query: any): string;
    focusLost(): void;
    isActive(value: TypeaheadMatch): boolean;
    private selectMatch(value, e?);
}
