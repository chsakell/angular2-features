"use strict";
var core_1 = require('@angular/core');
var tabset_component_1 = require('./tabset.component');
/* tslint:disable */
/* tslint:enable */
var TabDirective = (function () {
    function TabDirective(tabset) {
        this.select = new core_1.EventEmitter(false);
        this.deselect = new core_1.EventEmitter(false);
        this.removed = new core_1.EventEmitter(false);
        this.addClass = true;
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    Object.defineProperty(TabDirective.prototype, "active", {
        /** tab active state toggle */
        get: function () {
            return this._active;
        },
        set: function (active) {
            var _this = this;
            if (this.disabled && active || !active) {
                if (!active) {
                    this._active = active;
                }
                this.deselect.emit(this);
                return;
            }
            this._active = active;
            this.select.emit(this);
            this.tabset.tabs.forEach(function (tab) {
                if (tab !== _this) {
                    tab.active = false;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    TabDirective.prototype.ngOnInit = function () {
        this.removable = !!this.removable;
    };
    TabDirective.prototype.ngOnDestroy = function () {
        this.tabset.removeTab(this);
    };
    TabDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: 'tab, [tab]' },] },
    ];
    /** @nocollapse */
    TabDirective.ctorParameters = [
        { type: tabset_component_1.TabsetComponent, },
    ];
    TabDirective.propDecorators = {
        'heading': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'removable': [{ type: core_1.Input },],
        'customClass': [{ type: core_1.Input },],
        'active': [{ type: core_1.HostBinding, args: ['class.active',] }, { type: core_1.Input },],
        'select': [{ type: core_1.Output },],
        'deselect': [{ type: core_1.Output },],
        'removed': [{ type: core_1.Output },],
        'addClass': [{ type: core_1.HostBinding, args: ['class.tab-pane',] },],
    };
    return TabDirective;
}());
exports.TabDirective = TabDirective;
