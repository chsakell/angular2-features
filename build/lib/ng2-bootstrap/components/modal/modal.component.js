// todo: should we support enforce focus in?
// todo: in original bs there are was a way to prevent modal from showing
// todo: original modal had resize events
"use strict";
var core_1 = require('@angular/core');
var components_helper_service_1 = require('../utils/components-helper.service');
var utils_class_1 = require('../utils/utils.class');
var modal_backdrop_component_1 = require('./modal-backdrop.component');
var modal_options_class_1 = require('./modal-options.class');
var browser_1 = require('../utils/facade/browser');
var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;
var ModalDirective = (function () {
    function ModalDirective(element, renderer, componentsHelper) {
        this.element = element;
        this.renderer = renderer;
        this.componentsHelper = componentsHelper;
        this.onShow = new core_1.EventEmitter();
        this.onShown = new core_1.EventEmitter();
        this.onHide = new core_1.EventEmitter();
        this.onHidden = new core_1.EventEmitter();
        // seems like an Options
        this.isAnimated = true;
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "document", {
        get: function () {
            return this.componentsHelper.getDocument();
        },
        enumerable: true,
        configurable: true
    });
    ;
    /** Host element manipulations */
    // @HostBinding(`class.${ClassName.IN}`) private _addClassIn:boolean;
    ModalDirective.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this.element.nativeElement) {
            return;
        }
        this.hide(event);
    };
    // todo: consider preventing default and stopping propagation
    ModalDirective.prototype.onEsc = function () {
        if (this.config.keyboard) {
            this.hide();
        }
    };
    ModalDirective.prototype.ngOnDestroy = function () {
        this.config = void 0;
        // this._element             = null
        // this._dialog              = null
        // this._backdrop            = null
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
        }
        this._isShown = void 0;
        this.isBodyOverflowing = void 0;
        this.originalBodyPadding = void 0;
        this.scrollbarWidth = void 0;
        this.timerHideModal = void 0;
        this.timerRmBackDrop = void 0;
    };
    ModalDirective.prototype.ngAfterViewInit = function () {
        this._config = this._config || this.getConfig();
    };
    /** Public methods */
    ModalDirective.prototype.toggle = function () {
        return this._isShown ? this.hide() : this.show();
    };
    ModalDirective.prototype.show = function () {
        var _this = this;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (this.document && this.document.body) {
            this.renderer.setElementClass(this.document.body, modal_options_class_1.ClassName.OPEN, true);
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    ModalDirective.prototype.hide = function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this.renderer.setElementClass(this.element.nativeElement, modal_options_class_1.ClassName.IN, false);
        // this._addClassIn = false;
        if (this.isAnimated) {
            this.timerHideModal = setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /** Private methods */
    ModalDirective.prototype.getConfig = function (config) {
        return Object.assign({}, modal_options_class_1.modalConfigDefaults, config);
    };
    /**
     *  Show dialog
     */
    ModalDirective.prototype.showElement = function () {
        var _this = this;
        // todo: replace this with component helper usage `add to root`
        if (!this.element.nativeElement.parentNode ||
            (this.element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE)) {
            // don't move modals dom position
            if (this.document && this.document.body) {
                this.document.body.appendChild(this.element.nativeElement);
            }
        }
        this.renderer.setElementAttribute(this.element.nativeElement, 'aria-hidden', 'false');
        this.renderer.setElementStyle(this.element.nativeElement, 'display', 'block');
        this.renderer.setElementProperty(this.element.nativeElement, 'scrollTop', 0);
        if (this.isAnimated) {
            utils_class_1.Utils.reflow(this.element.nativeElement);
        }
        // this._addClassIn = true;
        this.renderer.setElementClass(this.element.nativeElement, modal_options_class_1.ClassName.IN, true);
        var transitionComplete = function () {
            if (_this._config.focus) {
                _this.element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this.isAnimated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    ModalDirective.prototype.hideModal = function () {
        var _this = this;
        this.renderer.setElementAttribute(this.element.nativeElement, 'aria-hidden', 'true');
        this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (_this.document && _this.document.body) {
                _this.renderer.setElementClass(_this.document.body, modal_options_class_1.ClassName.OPEN, false);
            }
            _this.resetAdjustments();
            _this.resetScrollbar();
            _this.onHidden.emit(_this);
        });
    };
    // todo: original show was calling a callback when done, but we can use promise
    ModalDirective.prototype.showBackdrop = function (callback) {
        var _this = this;
        if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this.backdrop = this.componentsHelper
                .appendNextToRoot(modal_backdrop_component_1.ModalBackdropComponent, modal_backdrop_component_1.ModalBackdropOptions, new modal_backdrop_component_1.ModalBackdropOptions({ animate: false }));
            if (this.isAnimated) {
                this.backdrop.instance.isAnimated = this.isAnimated;
                utils_class_1.Utils.reflow(this.backdrop.instance.element.nativeElement);
            }
            this.backdrop.instance.isShown = true;
            if (!callback) {
                return;
            }
            if (!this.isAnimated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    ModalDirective.prototype.removeBackdrop = function () {
        if (this.backdrop) {
            this.backdrop.destroy();
            this.backdrop = void 0;
        }
    };
    /** Events tricks */
    // no need for it
    // private setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // private setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    ModalDirective.prototype.resetAdjustments = function () {
        this.renderer.setElementStyle(this.element.nativeElement, 'paddingLeft', '');
        this.renderer.setElementStyle(this.element.nativeElement, 'paddingRight', '');
    };
    /** Scroll bar tricks */
    ModalDirective.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = this.document.body.clientWidth < browser_1.window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    ModalDirective.prototype.setScrollbar = function () {
        if (!this.document) {
            return;
        }
        var fixedEl = this.document.querySelector(modal_options_class_1.Selector.FIXED_CONTENT);
        if (!fixedEl) {
            return;
        }
        var bodyPadding = parseInt(utils_class_1.Utils.getStyles(fixedEl).paddingRight || 0, 10);
        this.originalBodyPadding = parseInt(this.document.body.style.paddingRight || 0, 10);
        if (this.isBodyOverflowing) {
            this.document.body.style.paddingRight = (bodyPadding + this.scrollbarWidth) + "px";
        }
    };
    ModalDirective.prototype.resetScrollbar = function () {
        this.document.body.style.paddingRight = this.originalBodyPadding;
    };
    // thx d.walsh
    ModalDirective.prototype.getScrollbarWidth = function () {
        var scrollDiv = this.renderer.createElement(this.document.body, 'div', void 0);
        scrollDiv.className = modal_options_class_1.ClassName.SCROLLBAR_MEASURER;
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    ModalDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[bsModal]',
                    exportAs: 'bs-modal'
                },] },
    ];
    /** @nocollapse */
    ModalDirective.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: components_helper_service_1.ComponentsHelper, },
    ];
    ModalDirective.propDecorators = {
        'config': [{ type: core_1.Input },],
        'onShow': [{ type: core_1.Output },],
        'onShown': [{ type: core_1.Output },],
        'onHide': [{ type: core_1.Output },],
        'onHidden': [{ type: core_1.Output },],
        'onClick': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
        'onEsc': [{ type: core_1.HostListener, args: ['keydown.esc',] },],
    };
    return ModalDirective;
}());
exports.ModalDirective = ModalDirective;
