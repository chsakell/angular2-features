"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
// TODO: config: activeClass - Class to apply to the checked buttons.
var ButtonCheckboxDirective = (function () {
    function ButtonCheckboxDirective(cd) {
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.cd = cd;
        // hack !
        cd.valueAccessor = this;
    }
    // view -> model
    ButtonCheckboxDirective.prototype.onClick = function () {
        this.toggle(!this.state);
        this.cd.viewToModelUpdate(this.value);
    };
    ButtonCheckboxDirective.prototype.ngOnInit = function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        get: function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        get: function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    ButtonCheckboxDirective.prototype.toggle = function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    ButtonCheckboxDirective.prototype.writeValue = function (value) {
        this.state = this.trueValue === value;
        this.value = value;
    };
    ButtonCheckboxDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonCheckboxDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ButtonCheckboxDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[btnCheckbox][ngModel]' },] },
    ];
    /** @nocollapse */
    ButtonCheckboxDirective.ctorParameters = [
        { type: forms_1.NgModel, decorators: [{ type: core_1.Self },] },
    ];
    ButtonCheckboxDirective.propDecorators = {
        'btnCheckboxTrue': [{ type: core_1.Input },],
        'btnCheckboxFalse': [{ type: core_1.Input },],
        'state': [{ type: core_1.HostBinding, args: ['class.active',] },],
        'onClick': [{ type: core_1.HostListener, args: ['click',] },],
    };
    return ButtonCheckboxDirective;
}());
exports.ButtonCheckboxDirective = ButtonCheckboxDirective;
