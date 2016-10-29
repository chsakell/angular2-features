"use strict";
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/platform-browser-dynamic/testing');
var slim_loading_bar_service_1 = require('../src/slim-loading-bar.service');
testing_1.TestBed.resetTestEnvironment();
testing_1.TestBed.initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting());
function main() {
    describe('SlimLoadingBarService', function () {
        var service;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                providers: [slim_loading_bar_service_1.SlimLoadingBarService]
            });
        });
        beforeEach(testing_1.inject([slim_loading_bar_service_1.SlimLoadingBarService], function (slbs) {
            service = slbs;
        }));
        it('is defined', function () {
            expect(slim_loading_bar_service_1.SlimLoadingBarService).toBeDefined();
            expect(service instanceof slim_loading_bar_service_1.SlimLoadingBarService).toBeTruthy();
        });
        it('starts at zero when just being injected', function () {
            expect(service.progress).toBe(0);
        });
        it('can change the progress to 30 if you call set progress', function () {
            service.progress = 30;
            expect(service.progress).toBe(30);
        });
        it('increaments over time after calling start()', testing_1.fakeAsync(function () {
            // var value, flag;
            expect(service.progress).toBe(0);
            service.start();
            testing_1.tick(500);
            expect(service.progress).toBe(1);
            service.stop();
        }));
        it('have 100 returned from progress after complete()', function () {
            service.start();
            service.complete();
            expect(service.progress).toBe(100);
        });
        it('resets to zero when calling reset() after start() or set()', function () {
            service.progress = 30;
            service.reset();
            expect(service.progress).toBe(0);
        });
        it('will return 100 after calling complete', function () {
            service.progress = 30;
            service.complete();
            expect(service.progress).toBe(100);
        });
        it('return current height when calling height() without parameters', function () {
            expect(service.height).toBe('2px');
        });
        it('set the height when calling height() with parameter', function () {
            service.height = '5px';
            expect(service.height).toBe('5px');
        });
        it('return current color ', function () {
            expect(service.color).toBe('firebrick');
        });
        it('set the color', function () {
            service.color = 'green';
            expect(service.color).toBe('green');
        });
    });
}
exports.main = main;
//# sourceMappingURL=service.spec.js.map