"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var common_2 = require('../common');
var tab_heading_directive_1 = require('./tab-heading.directive');
var tab_directive_1 = require('./tab.directive');
var tabset_component_1 = require('./tabset.component');
var TabsModule = (function () {
    function TabsModule() {
    }
    TabsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [common_2.NgTranscludeDirective, tab_directive_1.TabDirective, tabset_component_1.TabsetComponent, tab_heading_directive_1.TabHeadingDirective],
                    exports: [tab_directive_1.TabDirective, tabset_component_1.TabsetComponent, tab_heading_directive_1.TabHeadingDirective]
                },] },
    ];
    /** @nocollapse */
    TabsModule.ctorParameters = [];
    return TabsModule;
}());
exports.TabsModule = TabsModule;
