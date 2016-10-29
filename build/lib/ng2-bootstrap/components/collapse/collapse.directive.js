"use strict";
// FIX: in order to update to rc.1 had to disable animation, sorry
var core_1 = require('@angular/core');
// import {AnimationBuilder} from '@angular/platform-browser/src/animate/animation_builder';
// import {animate, animation, state, style, transition} from '@angular/core';
/*@Directive({
 selector: '[collapse]',
 // templateUrl: 'app/panel.html',
 // styleUrls: ['app/panel.css'],
 animations: [
 animation('active', [
 state('void', style({ height: 0 })),
 state('closed', style({ height: 0 })),
 state('open', style({ height: '*' })),
 transition('void => closed', [ animate(0) ]),
 transition('closed => open', [ animate('350ms ease-out') ]),
 transition('open => closed', [ animate('350ms ease-out') ])
 ])
 ]
 })*/
// fix: replace with // '@angular/animate';
// when https://github.com/angular/angular/issues/5984 will be fixed
// TODO: remove ElementRef
// TODO: add on change
// TODO: #576 add callbacks: expanding, collapsing after adding animation
var CollapseDirective = (function () {
    function CollapseDirective(/*_ab:AnimationBuilder, */ _el, _renderer) {
        // private animation:any;
        this.collapsed = new core_1.EventEmitter(false);
        this.expanded = new core_1.EventEmitter(false);
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
        // this._ab = _ab;
        this._el = _el;
        this._renderer = _renderer;
    }
    Object.defineProperty(CollapseDirective.prototype, "collapse", {
        get: function () {
            return this.isExpanded;
        },
        // @Input() private transitionDuration:number = 500; // Duration in ms
        set: function (value) {
            this.isExpanded = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    CollapseDirective.prototype.ngOnInit = function () {
        // this.animation = this._ab.css();
        // this.animation.setDuration(this.transitionDuration);
    };
    CollapseDirective.prototype.toggle = function () {
        // this.open = !this.open;
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    CollapseDirective.prototype.hide = function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapse = true;
        this.isCollapsing = false;
        this.display = 'none';
        this.collapsed.emit(this);
        /*  setTimeout(() => {
         // this.height = '0';
         // this.isCollapse = true;
         // this.isCollapsing = false;
         this.animation
         .setFromStyles({
         height: this._el.nativeElement.scrollHeight + 'px'
         })
         .setToStyles({
         height: '0',
         overflow: 'hidden'
         });
    
         this.animation.start(this._el.nativeElement)
         .onComplete(() => {
         if (this._el.nativeElement.offsetHeight === 0) {
         this.display = 'none';
         }
    
         this.isCollapse = true;
         this.isCollapsing = false;
         });
         }, 4);*/
    };
    CollapseDirective.prototype.show = function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.display = 'block';
        // this.height = 'auto';
        this.isCollapse = true;
        this.isCollapsing = false;
        this._renderer.setElementStyle(this._el.nativeElement, 'overflow', 'visible');
        this._renderer.setElementStyle(this._el.nativeElement, 'height', 'auto');
        this.expanded.emit(this);
        /*setTimeout(() => {
         // this.height = 'auto';
         // this.isCollapse = true;
         // this.isCollapsing = false;
         this.animation
         .setFromStyles({
         height: this._el.nativeElement.offsetHeight,
         overflow: 'hidden'
         })
         .setToStyles({
         height: this._el.nativeElement.scrollHeight + 'px'
         });
    
         this.animation.start(this._el.nativeElement)
         .onComplete(() => {
         this.isCollapse = true;
         this.isCollapsing = false;
         this._renderer.setElementStyle(this._el.nativeElement, 'overflow', 'visible');
         this._renderer.setElementStyle(this._el.nativeElement, 'height', 'auto');
         });
         }, 4);*/
    };
    CollapseDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[collapse]' },] },
    ];
    /** @nocollapse */
    CollapseDirective.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
    ];
    CollapseDirective.propDecorators = {
        'collapsed': [{ type: core_1.Output },],
        'expanded': [{ type: core_1.Output },],
        'display': [{ type: core_1.HostBinding, args: ['style.display',] },],
        'isExpanded': [{ type: core_1.HostBinding, args: ['class.in',] }, { type: core_1.HostBinding, args: ['attr.aria-expanded',] },],
        'isCollapsed': [{ type: core_1.HostBinding, args: ['attr.aria-hidden',] },],
        'isCollapse': [{ type: core_1.HostBinding, args: ['class.collapse',] },],
        'isCollapsing': [{ type: core_1.HostBinding, args: ['class.collapsing',] },],
        'collapse': [{ type: core_1.Input },],
    };
    return CollapseDirective;
}());
exports.CollapseDirective = CollapseDirective;
