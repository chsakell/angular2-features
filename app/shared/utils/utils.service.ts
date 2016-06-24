import { Injectable } from '@angular/core';
import { Predicate } from '../interfaces'


import * as _ from 'lodash';

declare var alertify: any;

@Injectable()
export class UtilsService {
    private _notifier: any = alertify;

    constructor() { }

    /*
    Util method to serialize a string to a specific Type
    */
    getSerialized<T>(arg: any): T {
        return <T>JSON.parse(JSON.stringify(arg));
    }

    /*
    Opens a confirmation dialog using the alertify.js lib
    */
    openConfirmationDialog(message: string, okCallback: () => any) {
        this._notifier.confirm(message, function (e) {
            if (e) {
                okCallback();
            } else {
            }
        });
    }

    /*
    Prints a success message using the alertify.js lib
    */
    printSuccessMessage(message: string) {

        this._notifier.success(message);
    }

    /*
    Prints an error message using the alertify.js lib
    */
    printErrorMessage(message: string) {
        this._notifier.error(message);
    }

    /*
    Removes an item from an array using the lodash library
    */
    removeItemFromArray<T>(array: Array<T>, item: any) {
        _.remove(array, function (current) {
            //console.log(current);
            return JSON.stringify(current) === JSON.stringify(item);
        });
    }

    removeItems<T>(array: Array<T>, predicate: Predicate<T>) {
        _.remove(array, predicate);
    }

    /*
    Adds an item to zero index
    */
    addItemToStart<T>(array: Array<T>, item: any) {
        array.splice(0, 0, item);
    }

    /*
    From an array of type T, select all values of type R for property
    */
    getPropertyValues<T, R>(array: Array<T>, property : string) : R
    {
        var result = _.map(array, property);
        return <R><any>result;
    }
}
