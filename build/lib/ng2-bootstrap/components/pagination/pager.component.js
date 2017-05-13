"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var pagination_component_1 = require('./pagination.component');
var pagerConfig = {
    itemsPerPage: 10,
    previousText: '« Previous',
    nextText: 'Next »',
    pageBtnClass: '',
    align: true
};
var PAGER_TEMPLATE = "\n    <ul class=\"pager\">\n      <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\" [ngClass]=\"{'pull-right': align}\" class=\"{{ pageBtnClass }}\">\n        <a href (click)=\"selectPage(page - 1, $event)\">{{getText('previous')}}</a>\n      </li>\n      <li [class.disabled]=\"noNext()\" [class.next]=\"align\" [ngClass]=\"{'pull-right': align}\" class=\"{{ pageBtnClass }}\">\n        <a href (click)=\"selectPage(page + 1, $event)\">{{getText('next')}}</a>\n      </li>\n  </ul>\n";
/* tslint:disable */
/* tslint:enable */
var PagerComponent = (function (_super) {
    __extends(PagerComponent, _super);
    function PagerComponent(cd, renderer, elementRef) {
        _super.call(this, cd, renderer, elementRef);
        this.config = pagerConfig;
    }
    PagerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'pager[ngModel]',
                    template: PAGER_TEMPLATE,
                    providers: [forms_1.NgModel]
                },] },
    ];
    /** @nocollapse */
    PagerComponent.ctorParameters = [
        { type: forms_1.NgModel, decorators: [{ type: core_1.Self },] },
        { type: core_1.Renderer, },
        { type: core_1.ElementRef, },
    ];
    return PagerComponent;
}(pagination_component_1.PaginationComponent));
exports.PagerComponent = PagerComponent;
