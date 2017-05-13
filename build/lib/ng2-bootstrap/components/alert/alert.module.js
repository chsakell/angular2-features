"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var alert_component_1 = require('./alert.component');
var AlertModule = (function () {
    function AlertModule() {
    }
    AlertModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [alert_component_1.AlertComponent],
                    exports: [alert_component_1.AlertComponent]
                },] },
    ];
    /** @nocollapse */
    AlertModule.ctorParameters = [];
    return AlertModule;
}());
exports.AlertModule = AlertModule;
