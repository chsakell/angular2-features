"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var typeahead_container_component_1 = require('./typeahead-container.component');
var typeahead_directive_1 = require('./typeahead.directive');
var components_helper_service_1 = require('../utils/components-helper.service');
var TypeaheadModule = (function () {
    function TypeaheadModule() {
    }
    TypeaheadModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, forms_1.FormsModule],
                    declarations: [typeahead_container_component_1.TypeaheadContainerComponent, typeahead_directive_1.TypeaheadDirective],
                    exports: [forms_1.FormsModule, typeahead_container_component_1.TypeaheadContainerComponent, typeahead_directive_1.TypeaheadDirective],
                    providers: [components_helper_service_1.ComponentsHelper],
                    entryComponents: [typeahead_container_component_1.TypeaheadContainerComponent]
                },] },
    ];
    /** @nocollapse */
    TypeaheadModule.ctorParameters = [];
    return TypeaheadModule;
}());
exports.TypeaheadModule = TypeaheadModule;
