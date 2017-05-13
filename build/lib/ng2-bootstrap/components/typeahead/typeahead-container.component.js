"use strict";
var core_1 = require('@angular/core');
var ng2_bootstrap_config_1 = require('../ng2-bootstrap-config');
var position_1 = require('../position');
var typeahead_options_class_1 = require('./typeahead-options.class');
var typeahead_utils_1 = require('./typeahead-utils');
var bs4 = "\n  <div class=\"dropdown-menu\"\n       [ngStyle]=\"{top: top, left: left, display: 'block'}\"\n       (mouseleave)=\"focusLost()\">\n    <template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n       <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{match}}</h6>\n       <div *ngIf=\"!match.isHeader() && !itemTemplate\">\n          <a href=\"#\"\n            class=\"dropdown-item\"\n            (click)=\"selectMatch(match, $event)\"\n            (mouseenter)=\"selectActive(match)\"\n            [class.active]=\"isActive(match)\"\n            [innerHtml]=\"hightlight(match, query)\"></a>\n      </div>\n      <div *ngIf=\"!match.isHeader() && itemTemplate\">\n        <a href=\"#\"\n         class=\"dropdown-item\"\n         (click)=\"selectMatch(match, $event)\"\n         (mouseenter)=\"selectActive(match)\"\n         [class.active]=\"isActive(match)\">\n          <template [ngTemplateOutlet]=\"itemTemplate\"\n                    [ngOutletContext]=\"{item: match.item, index: i}\">\n          </template>\n         </a>\n      </div>\n    </template>\n  </div>\n";
var bs3 = "\n  <ul class=\"dropdown-menu\"\n      [ngStyle]=\"{top: top, left: left, display: 'block'}\"\n      (mouseleave)=\"focusLost()\">\n    <template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n      <li *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{match}}</li>\n      <li *ngIf=\"!match.isHeader()\"\n        [class.active]=\"isActive(match)\"\n        (mouseenter)=\"selectActive(match)\">\n        <a href=\"#\"\n           *ngIf=\"!itemTemplate\"\n           (click)=\"selectMatch(match, $event)\"\n           tabindex=\"-1\"\n           [innerHtml]=\"hightlight(match, query)\"></a>\n        <a href=\"#\"\n           *ngIf=\"itemTemplate\"\n           (click)=\"selectMatch(match, $event)\"\n           tabindex=\"-1\">\n            <template [ngTemplateOutlet]=\"itemTemplate\"\n                      [ngOutletContext]=\"{item: match.item, index: i}\">\n            </template>\n        </a>\n      </li>\n    </template>\n  </ul>\n";
var isBS4 = ng2_bootstrap_config_1.Ng2BootstrapConfig.theme === ng2_bootstrap_config_1.Ng2BootstrapTheme.BS4;
var TypeaheadContainerComponent = (function () {
    function TypeaheadContainerComponent(element, options) {
        this.isFocused = false;
        this._matches = [];
        this.element = element;
        Object.assign(this, options);
    }
    Object.defineProperty(TypeaheadContainerComponent.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        set: function (value) {
            this._matches = value;
            if (this._matches.length > 0) {
                this._active = this._matches[0];
                if (this._active.isHeader()) {
                    this.nextActiveMatch();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "itemTemplate", {
        get: function () {
            return this.parent ? this.parent.typeaheadItemTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    TypeaheadContainerComponent.prototype.position = function (hostEl) {
        this.top = '0px';
        this.left = '0px';
        var p = position_1.positionService
            .positionElements(hostEl.nativeElement, this.element.nativeElement.children[0], this.placement, false);
        this.top = p.top + 'px';
        this.left = p.left + 'px';
    };
    TypeaheadContainerComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this._active);
    };
    TypeaheadContainerComponent.prototype.prevActiveMatch = function () {
        var index = this.matches.indexOf(this._active);
        this._active = this.matches[index - 1 < 0
            ? this.matches.length - 1
            : index - 1];
        if (this._active.isHeader()) {
            this.prevActiveMatch();
        }
    };
    TypeaheadContainerComponent.prototype.nextActiveMatch = function () {
        var index = this.matches.indexOf(this._active);
        this._active = this.matches[index + 1 > this.matches.length - 1
            ? 0
            : index + 1];
        if (this._active.isHeader()) {
            this.nextActiveMatch();
        }
    };
    TypeaheadContainerComponent.prototype.selectActive = function (value) {
        this.isFocused = true;
        this._active = value;
    };
    TypeaheadContainerComponent.prototype.hightlight = function (match, query) {
        var itemStr = match.value;
        var itemStrHelper = (this.parent && this.parent.typeaheadLatinize
            ? typeahead_utils_1.TypeaheadUtils.latinize(itemStr)
            : itemStr).toLowerCase();
        var startIdx;
        var tokenLen;
        // Replaces the capture string with the same string inside of a "strong" tag
        if (typeof query === 'object') {
            var queryLen = query.length;
            for (var i = 0; i < queryLen; i += 1) {
                // query[i] is already latinized and lower case
                startIdx = itemStrHelper.indexOf(query[i]);
                tokenLen = query[i].length;
                if (startIdx >= 0 && tokenLen > 0) {
                    itemStr = itemStr.substring(0, startIdx) + '<strong>' + itemStr.substring(startIdx, startIdx + tokenLen) + '</strong>' + itemStr.substring(startIdx + tokenLen);
                    itemStrHelper = itemStrHelper.substring(0, startIdx) + '        ' + ' '.repeat(tokenLen) + '         ' + itemStrHelper.substring(startIdx + tokenLen);
                }
            }
        }
        else if (query) {
            // query is already latinized and lower case
            startIdx = itemStrHelper.indexOf(query);
            tokenLen = query.length;
            if (startIdx >= 0 && tokenLen > 0) {
                itemStr = itemStr.substring(0, startIdx) + '<strong>' + itemStr.substring(startIdx, startIdx + tokenLen) + '</strong>' + itemStr.substring(startIdx + tokenLen);
            }
        }
        return itemStr;
    };
    TypeaheadContainerComponent.prototype.focusLost = function () {
        this.isFocused = false;
    };
    TypeaheadContainerComponent.prototype.isActive = function (value) {
        return this._active === value;
    };
    TypeaheadContainerComponent.prototype.selectMatch = function (value, e) {
        var _this = this;
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.parent.changeModel(value);
        setTimeout(function () {
            return _this.parent.typeaheadOnSelect.emit(value);
        }, 0);
        return false;
    };
    TypeaheadContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'typeahead-container',
                    template: isBS4 ? bs4 : bs3,
                    encapsulation: core_1.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    TypeaheadContainerComponent.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: typeahead_options_class_1.TypeaheadOptions, },
    ];
    return TypeaheadContainerComponent;
}());
exports.TypeaheadContainerComponent = TypeaheadContainerComponent;
