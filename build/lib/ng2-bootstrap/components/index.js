"use strict";
var core_1 = require('@angular/core');
var accordion_module_1 = require('./accordion/accordion.module');
var alert_module_1 = require('./alert/alert.module');
var buttons_module_1 = require('./buttons/buttons.module');
var carousel_module_1 = require('./carousel/carousel.module');
var collapse_module_1 = require('./collapse/collapse.module');
var datepicker_module_1 = require('./datepicker/datepicker.module');
var dropdown_module_1 = require('./dropdown/dropdown.module');
var modal_module_1 = require('./modal/modal.module');
var pagination_module_1 = require('./pagination/pagination.module');
var progressbar_module_1 = require('./progressbar/progressbar.module');
var rating_module_1 = require('./rating/rating.module');
var tabs_module_1 = require('./tabs/tabs.module');
var timepicker_module_1 = require('./timepicker/timepicker.module');
var tooltip_module_1 = require('./tooltip/tooltip.module');
var typeahead_module_1 = require('./typeahead/typeahead.module');
var components_helper_service_1 = require('./utils/components-helper.service');
var Ng2BootstrapModule = (function () {
    function Ng2BootstrapModule() {
    }
    Ng2BootstrapModule.decorators = [
        { type: core_1.NgModule, args: [{
                    exports: [
                        accordion_module_1.AccordionModule, alert_module_1.AlertModule, buttons_module_1.ButtonsModule, carousel_module_1.CarouselModule, collapse_module_1.CollapseModule, datepicker_module_1.DatepickerModule, dropdown_module_1.DropdownModule,
                        modal_module_1.ModalModule, pagination_module_1.PaginationModule, progressbar_module_1.ProgressbarModule, rating_module_1.RatingModule, tabs_module_1.TabsModule, timepicker_module_1.TimepickerModule, tooltip_module_1.TooltipModule,
                        typeahead_module_1.TypeaheadModule
                    ],
                    providers: [
                        { provide: components_helper_service_1.ComponentsHelper, useClass: components_helper_service_1.ComponentsHelper }
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2BootstrapModule.ctorParameters = [];
    return Ng2BootstrapModule;
}());
exports.Ng2BootstrapModule = Ng2BootstrapModule;
