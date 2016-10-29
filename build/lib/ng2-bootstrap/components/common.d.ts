import { TemplateRef, ViewContainerRef } from '@angular/core';
export interface KeyAttribute {
    [key: string]: any;
}
export declare class NgTranscludeDirective {
    private _viewRef;
    viewRef: ViewContainerRef;
    private _ngTransclude;
    ngTransclude: TemplateRef<any>;
    constructor(_viewRef: ViewContainerRef);
}
