"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var collapse_module_1 = require('../collapse/collapse.module');
var accordion_group_component_1 = require('./accordion-group.component');
var accordion_component_1 = require('./accordion.component');
var AccordionModule = (function () {
    function AccordionModule() {
    }
    AccordionModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, collapse_module_1.CollapseModule],
                    declarations: [accordion_component_1.AccordionComponent, accordion_group_component_1.AccordionPanelComponent],
                    exports: [accordion_component_1.AccordionComponent, accordion_group_component_1.AccordionPanelComponent]
                },] },
    ];
    /** @nocollapse */
    AccordionModule.ctorParameters = [];
    return AccordionModule;
}());
exports.AccordionModule = AccordionModule;
