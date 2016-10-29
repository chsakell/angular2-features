"use strict";
var core_1 = require('@angular/core');
var position_1 = require('../position');
var tooltip_options_class_1 = require('./tooltip-options.class');
var TooltipContainerComponent = (function () {
    function TooltipContainerComponent(element, cdr, options) {
        this.top = '-1000px';
        this.left = '-1000px';
        this.display = 'block';
        this.element = element;
        this.cdr = cdr;
        Object.assign(this, options);
        this.classMap = { 'in': false, 'fade': false };
        this.classMap[options.placement] = true;
        this.classMap['tooltip-' + options.placement] = true;
    }
    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
        var p = position_1.positionService
            .positionElements(this.hostEl.nativeElement, this.element.nativeElement.children[0], this.placement, this.appendToBody);
        this.top = p.top + 'px';
        this.left = p.left + 'px';
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.popupClass) {
            this.classMap[this.popupClass] = true;
        }
        this.cdr.detectChanges();
    };
    Object.defineProperty(TooltipContainerComponent.prototype, "isTemplate", {
        get: function () {
            return this.htmlContent instanceof core_1.TemplateRef;
        },
        enumerable: true,
        configurable: true
    });
    TooltipContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'tooltip-container',
                    // changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<div class=\"tooltip\" role=\"tooltip\"\n     [ngStyle]=\"{top: top, left: left, display: display}\"\n     [ngClass]=\"classMap\">\n      <div class=\"tooltip-arrow\"></div>\n      <div class=\"tooltip-inner\"\n           *ngIf=\"htmlContent && !isTemplate\" \n           innerHtml=\"{{htmlContent}}\">\n      </div>\n      <div class=\"tooltip-inner\"\n           *ngIf=\"htmlContent && isTemplate\">\n        <template [ngTemplateOutlet]=\"htmlContent\"\n                  [ngOutletContext]=\"{model: context}\">\n        </template>\n      </div>\n      <div class=\"tooltip-inner\"\n           *ngIf=\"content\">\n        {{content}}\n      </div>\n    </div>"
                },] },
    ];
    /** @nocollapse */
    TooltipContainerComponent.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: core_1.ChangeDetectorRef, },
        { type: tooltip_options_class_1.TooltipOptions, decorators: [{ type: core_1.Inject, args: [tooltip_options_class_1.TooltipOptions,] },] },
    ];
    return TooltipContainerComponent;
}());
exports.TooltipContainerComponent = TooltipContainerComponent;
