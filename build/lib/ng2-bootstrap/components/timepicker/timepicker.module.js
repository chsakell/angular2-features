"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var timepicker_component_1 = require('./timepicker.component');
var TimepickerModule = (function () {
    function TimepickerModule() {
    }
    TimepickerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, forms_1.FormsModule],
                    declarations: [timepicker_component_1.TimepickerComponent],
                    exports: [forms_1.FormsModule, timepicker_component_1.TimepickerComponent]
                },] },
    ];
    /** @nocollapse */
    TimepickerModule.ctorParameters = [];
    return TimepickerModule;
}());
exports.TimepickerModule = TimepickerModule;
