import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({ 
    selector: '[highlight]'
 })
export class HighlightDirective {
    private _defaultColor = 'beige';
    private el: HTMLElement;

    constructor(el: ElementRef) { 
        this.el = el.nativeElement; 
    }

    @Input('highlight') highlightColor: string;
    
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this._defaultColor);
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }
    
    private highlight(color: string) {
        this.el.style.backgroundColor = color;
    }
}
