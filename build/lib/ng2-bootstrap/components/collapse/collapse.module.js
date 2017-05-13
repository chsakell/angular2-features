"use strict";
var core_1 = require('@angular/core');
var collapse_directive_1 = require('./collapse.directive');
var CollapseModule = (function () {
    function CollapseModule() {
    }
    CollapseModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [collapse_directive_1.CollapseDirective],
                    exports: [collapse_directive_1.CollapseDirective]
                },] },
    ];
    /** @nocollapse */
    CollapseModule.ctorParameters = [];
    return CollapseModule;
}());
exports.CollapseModule = CollapseModule;
