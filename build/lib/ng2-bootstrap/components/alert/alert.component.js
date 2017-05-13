"use strict";
var core_1 = require('@angular/core');
var ALERT_TEMPLATE = "\n  <div class=\"alert\" role=\"alert\" [ngClass]=\"classes\" *ngIf=\"!closed\">\n    <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" (click)=\"onClose()\" (touch)=\"onClose()\">\n      <span aria-hidden=\"true\">&times;</span>\n      <span class=\"sr-only\">Close</span>\n    </button>\n    <ng-content></ng-content>\n  </div>\n  ";
// TODO: templateUrl
var AlertComponent = (function () {
    function AlertComponent() {
        this.type = 'warning';
        this.close = new core_1.EventEmitter(false);
        this.classes = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classes[0] = "alert-" + this.type;
        if (this.dismissible) {
            this.classes[1] = 'alert-dismissible';
        }
        else {
            this.classes.length = 1;
        }
        if (this.dismissOnTimeout) {
            setTimeout(function () { return _this.onClose(); }, this.dismissOnTimeout);
        }
    };
    // todo: mouse event + touch + pointer
    AlertComponent.prototype.onClose = function () {
        this.closed = true;
        this.close.emit(this);
    };
    AlertComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'alert',
                    template: ALERT_TEMPLATE
                },] },
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = [];
    AlertComponent.propDecorators = {
        'type': [{ type: core_1.Input },],
        'dismissible': [{ type: core_1.Input },],
        'dismissOnTimeout': [{ type: core_1.Input },],
        'close': [{ type: core_1.Output },],
    };
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;
