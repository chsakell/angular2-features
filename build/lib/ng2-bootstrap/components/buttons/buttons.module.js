"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var button_checkbox_directive_1 = require('./button-checkbox.directive');
var button_radio_directive_1 = require('./button-radio.directive');
var ButtonsModule = (function () {
    function ButtonsModule() {
    }
    ButtonsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [forms_1.FormsModule],
                    declarations: [button_checkbox_directive_1.ButtonCheckboxDirective, button_radio_directive_1.ButtonRadioDirective],
                    exports: [button_checkbox_directive_1.ButtonCheckboxDirective, button_radio_directive_1.ButtonRadioDirective, forms_1.FormsModule]
                },] },
    ];
    /** @nocollapse */
    ButtonsModule.ctorParameters = [];
    return ButtonsModule;
}());
exports.ButtonsModule = ButtonsModule;
