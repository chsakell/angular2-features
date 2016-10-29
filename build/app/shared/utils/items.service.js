"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var _ = require('lodash');
var ItemsService = (function () {
    function ItemsService() {
    }
    /*
    Removes an item from an array using the lodash library
    */
    ItemsService.prototype.removeItemFromArray = function (array, item) {
        _.remove(array, function (current) {
            //console.log(current);
            return JSON.stringify(current) === JSON.stringify(item);
        });
    };
    ItemsService.prototype.removeItems = function (array, predicate) {
        _.remove(array, predicate);
    };
    /*
    Finds a specific item in an array using a predicate and repsaces it
    */
    ItemsService.prototype.setItem = function (array, predicate, item) {
        var _oldItem = _.find(array, predicate);
        if (_oldItem) {
            var index = _.indexOf(array, _oldItem);
            array.splice(index, 1, item);
        }
        else {
            array.push(item);
        }
    };
    /*
    Adds an item to zero index
    */
    ItemsService.prototype.addItemToStart = function (array, item) {
        array.splice(0, 0, item);
    };
    /*
    From an array of type T, select all values of type R for property
    */
    ItemsService.prototype.getPropertyValues = function (array, property) {
        var result = _.map(array, property);
        return result;
    };
    /*
    Util method to serialize a string to a specific Type
    */
    ItemsService.prototype.getSerialized = function (arg) {
        return JSON.parse(JSON.stringify(arg));
    };
    ItemsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ItemsService);
    return ItemsService;
}());
exports.ItemsService = ItemsService;
//# sourceMappingURL=items.service.js.map