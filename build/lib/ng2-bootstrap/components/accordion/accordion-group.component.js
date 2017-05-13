"use strict";
var core_1 = require('@angular/core');
var accordion_component_1 = require('./accordion.component');
/* tslint:disable-next-line */
var MouseEvent = global.MouseEvent;
/* tslint:disable:component-selector-name */
var AccordionPanelComponent = (function () {
    function AccordionPanelComponent(accordion) {
        this.accordion = accordion;
    }
    Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
        // Questionable, maybe .panel-open should be on child div.panel element?
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            this._isOpen = value;
            if (value) {
                this.accordion.closeOtherPanels(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionPanelComponent.prototype.ngOnInit = function () {
        this.panelClass = this.panelClass || 'panel-default';
        this.accordion.addGroup(this);
    };
    AccordionPanelComponent.prototype.ngOnDestroy = function () {
        this.accordion.removeGroup(this);
    };
    AccordionPanelComponent.prototype.toggleOpen = function (event) {
        event.preventDefault();
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    };
    AccordionPanelComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'accordion-group, accordion-panel',
                    template: "\n    <div class=\"panel\" [ngClass]=\"panelClass\">\n      <div class=\"panel-heading\" (click)=\"toggleOpen($event)\">\n        <h4 class=\"panel-title\">\n          <a href tabindex=\"0\" class=\"accordion-toggle\">\n            <span *ngIf=\"heading\" [ngClass]=\"{'text-muted': isDisabled}\">{{heading}}</span>\n            <ng-content select=\"[accordion-heading]\"></ng-content>\n          </a>\n        </h4>\n      </div>\n      <div class=\"panel-collapse collapse\" [collapse]=\"!isOpen\">\n        <div class=\"panel-body\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AccordionPanelComponent.ctorParameters = [
        { type: accordion_component_1.AccordionComponent, decorators: [{ type: core_1.Inject, args: [accordion_component_1.AccordionComponent,] },] },
    ];
    AccordionPanelComponent.propDecorators = {
        'heading': [{ type: core_1.Input },],
        'panelClass': [{ type: core_1.Input },],
        'isDisabled': [{ type: core_1.Input },],
        'isOpen': [{ type: core_1.HostBinding, args: ['class.panel-open',] }, { type: core_1.Input },],
    };
    return AccordionPanelComponent;
}());
exports.AccordionPanelComponent = AccordionPanelComponent;
