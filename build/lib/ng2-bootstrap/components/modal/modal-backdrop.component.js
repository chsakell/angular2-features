"use strict";
var core_1 = require('@angular/core');
var modal_options_class_1 = require('./modal-options.class');
var ModalBackdropOptions = (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());
exports.ModalBackdropOptions = ModalBackdropOptions;
var ModalBackdropComponent = (function () {
    function ModalBackdropComponent(options, element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
        this.isAnimated = options.animate !== false;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: function () {
            return this._isAnimated;
        },
        set: function (value) {
            this._isAnimated = value;
            this.renderer.setElementClass(this.element.nativeElement, "" + modal_options_class_1.ClassName.FADE, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
            this.renderer.setElementClass(this.element.nativeElement, "" + modal_options_class_1.ClassName.IN, value);
        },
        enumerable: true,
        configurable: true
    });
    ModalBackdropComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'bs-modal-backdrop',
                    template: '',
                    host: { 'class': modal_options_class_1.ClassName.BACKDROP }
                },] },
    ];
    /** @nocollapse */
    ModalBackdropComponent.ctorParameters = [
        { type: ModalBackdropOptions, },
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
    ];
    return ModalBackdropComponent;
}());
exports.ModalBackdropComponent = ModalBackdropComponent;
