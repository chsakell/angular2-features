import { ElementRef, EventEmitter, OnInit, Renderer } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/forms';
import { KeyAttribute } from '../common';
export interface PaginationConfig extends KeyAttribute {
    maxSize: number;
    itemsPerPage: number;
    boundaryLinks: boolean;
    directionLinks: boolean;
    firstText: string;
    previousText: string;
    nextText: string;
    lastText: string;
    pageBtnClass: string;
    rotate: boolean;
}
export interface PageChangedEvent {
    itemsPerPage: number;
    page: number;
}
export declare class PaginationComponent implements ControlValueAccessor, OnInit, PaginationConfig, KeyAttribute {
    config: any;
    align: boolean;
    maxSize: number;
    boundaryLinks: boolean;
    directionLinks: boolean;
    firstText: string;
    previousText: string;
    nextText: string;
    lastText: string;
    rotate: boolean;
    pageBtnClass: string;
    disabled: boolean;
    numPages: EventEmitter<number>;
    pageChanged: EventEmitter<PageChangedEvent>;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
    page: number;
    onChange: any;
    onTouched: any;
    cd: NgModel;
    renderer: Renderer;
    elementRef: ElementRef;
    classMap: string;
    pages: Array<any>;
    private _itemsPerPage;
    private _totalItems;
    private _totalPages;
    private inited;
    private _page;
    constructor(cd: NgModel, renderer: Renderer, elementRef: ElementRef);
    ngOnInit(): void;
    writeValue(value: number): void;
    getText(key: string): string;
    noPrevious(): boolean;
    noNext(): boolean;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    selectPage(page: number, event?: MouseEvent): void;
    private makePage(num, text, isActive);
    private getPages(currentPage, totalPages);
    private calculateTotalPages();
}
