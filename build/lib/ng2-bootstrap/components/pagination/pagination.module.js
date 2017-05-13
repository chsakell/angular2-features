"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var pager_component_1 = require('./pager.component');
var pagination_component_1 = require('./pagination.component');
var PaginationModule = (function () {
    function PaginationModule() {
    }
    PaginationModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, forms_1.FormsModule],
                    declarations: [pager_component_1.PagerComponent, pagination_component_1.PaginationComponent],
                    exports: [forms_1.FormsModule, pager_component_1.PagerComponent, pagination_component_1.PaginationComponent]
                },] },
    ];
    /** @nocollapse */
    PaginationModule.ctorParameters = [];
    return PaginationModule;
}());
exports.PaginationModule = PaginationModule;
