"use strict";
var core_1 = require('@angular/core');
var datepicker_inner_component_1 = require('./datepicker-inner.component');
var forms_1 = require('@angular/forms');
/* tslint:disable:component-selector-name component-selector-type */
/* tslint:enable:component-selector-name component-selector-type */
var DatePickerComponent = (function () {
    function DatePickerComponent(cd) {
        this.selectionDone = new core_1.EventEmitter(undefined);
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this._now = new Date();
        this.cd = cd;
        // hack
        cd.valueAccessor = this;
    }
    Object.defineProperty(DatePickerComponent.prototype, "activeDate", {
        get: function () {
            return this._activeDate || this._now;
        },
        set: function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    DatePickerComponent.prototype.onUpdate = function (event) {
        this.cd.viewToModelUpdate(event);
    };
    DatePickerComponent.prototype.onSelectionDone = function (event) {
        this.selectionDone.emit(event);
    };
    // todo: support null value
    DatePickerComponent.prototype.writeValue = function (value) {
        if (this._datePicker.compare(value, this._activeDate) === 0) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            this._datePicker.select(value, false);
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    DatePickerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'datepicker[ngModel]',
                    template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      [monthColLimit]=\"monthColLimit\"\n                      [yearColLimit]=\"yearColLimit\"\n                      (selectionDone)=\"onSelectionDone($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
                    providers: [forms_1.NgModel]
                },] },
    ];
    /** @nocollapse */
    DatePickerComponent.ctorParameters = [
        { type: forms_1.NgModel, decorators: [{ type: core_1.Self },] },
    ];
    DatePickerComponent.propDecorators = {
        'datepickerMode': [{ type: core_1.Input },],
        'initDate': [{ type: core_1.Input },],
        'minDate': [{ type: core_1.Input },],
        'maxDate': [{ type: core_1.Input },],
        'minMode': [{ type: core_1.Input },],
        'maxMode': [{ type: core_1.Input },],
        'showWeeks': [{ type: core_1.Input },],
        'formatDay': [{ type: core_1.Input },],
        'formatMonth': [{ type: core_1.Input },],
        'formatYear': [{ type: core_1.Input },],
        'formatDayHeader': [{ type: core_1.Input },],
        'formatDayTitle': [{ type: core_1.Input },],
        'formatMonthTitle': [{ type: core_1.Input },],
        'startingDay': [{ type: core_1.Input },],
        'yearRange': [{ type: core_1.Input },],
        'onlyCurrentMonth': [{ type: core_1.Input },],
        'shortcutPropagation': [{ type: core_1.Input },],
        'customClass': [{ type: core_1.Input },],
        'monthColLimit': [{ type: core_1.Input },],
        'yearColLimit': [{ type: core_1.Input },],
        'dateDisabled': [{ type: core_1.Input },],
        'selectionDone': [{ type: core_1.Output },],
        '_datePicker': [{ type: core_1.ViewChild, args: [datepicker_inner_component_1.DatePickerInnerComponent,] },],
        'activeDate': [{ type: core_1.Input },],
    };
    return DatePickerComponent;
}());
exports.DatePickerComponent = DatePickerComponent;
