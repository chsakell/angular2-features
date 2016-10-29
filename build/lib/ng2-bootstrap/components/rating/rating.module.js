"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var rating_component_1 = require('./rating.component');
var RatingModule = (function () {
    function RatingModule() {
    }
    RatingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, forms_1.FormsModule],
                    declarations: [rating_component_1.RatingComponent],
                    exports: [forms_1.FormsModule, rating_component_1.RatingComponent]
                },] },
    ];
    /** @nocollapse */
    RatingModule.ctorParameters = [];
    return RatingModule;
}());
exports.RatingModule = RatingModule;
