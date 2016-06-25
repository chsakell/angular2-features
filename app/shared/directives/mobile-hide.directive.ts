import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({ 
    selector: '[mobileHide]',
    host: {
        '(window:resize)': 'onResize($event)'
    }
 })
export class MobileHideDirective {
    private _defaultMaxWidth: number = 768;
    private el: HTMLElement;

    constructor(el: ElementRef) { 
        this.el = el.nativeElement; 
    }

    @Input('mobileHide') mobileHide: number;

    onResize(event:Event) {
        var window : any = event.target;
        var currentWidth = window.innerWidth;
        if(currentWidth < (this.mobileHide || this._defaultMaxWidth))
        {
            this.el.style.display = 'none';
        }
        else
        {
            this.el.style.display = 'block';
        }
    }
}
