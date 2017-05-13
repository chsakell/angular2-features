"use strict";
var core_1 = require('@angular/core');
// todo: support template url
var AccordionComponent = (function () {
    function AccordionComponent() {
        /* tslint:disable:no-unused-variable */
        this.addClass = true;
        /* tslint:enable:no-unused-variable */
        this.groups = [];
    }
    AccordionComponent.prototype.closeOtherPanels = function (openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    AccordionComponent.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    AccordionComponent.prototype.removeGroup = function (group) {
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    AccordionComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'accordion',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    AccordionComponent.ctorParameters = [];
    AccordionComponent.propDecorators = {
        'closeOthers': [{ type: core_1.Input },],
        'addClass': [{ type: core_1.HostBinding, args: ['class.panel-group',] },],
    };
    return AccordionComponent;
}());
exports.AccordionComponent = AccordionComponent;
