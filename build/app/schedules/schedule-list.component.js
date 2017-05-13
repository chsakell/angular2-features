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
var ng2_bootstrap_1 = require('ng2-bootstrap');
var ng2_slim_loading_bar_1 = require('ng2-slim-loading-bar');
var data_service_1 = require('../shared/services/data.service');
var date_format_pipe_1 = require('../shared/pipes/date-format.pipe');
var items_service_1 = require('../shared/utils/items.service');
var notification_service_1 = require('../shared/utils/notification.service');
var config_service_1 = require('../shared/utils/config.service');
var ScheduleListComponent = (function () {
    function ScheduleListComponent(dataService, itemsService, notificationService, configService, loadingBarService) {
        this.dataService = dataService;
        this.itemsService = itemsService;
        this.notificationService = notificationService;
        this.configService = configService;
        this.loadingBarService = loadingBarService;
        this.itemsPerPage = 2;
        this.totalItems = 0;
        this.currentPage = 1;
        this.items = ['item1', 'item2', 'item3'];
        this.selectedScheduleLoaded = false;
        this.index = 0;
        this.backdropOptions = [true, false, 'static'];
        this.animation = true;
        this.keyboard = true;
        this.backdrop = true;
    }
    ScheduleListComponent.prototype.ngOnInit = function () {
        this.apiHost = this.configService.getApiHost();
        this.loadSchedules();
    };
    ScheduleListComponent.prototype.loadSchedules = function () {
        var _this = this;
        this.loadingBarService.start();
        this.dataService.getSchedules(this.currentPage, this.itemsPerPage)
            .subscribe(function (res) {
            _this.schedules = res.result; // schedules;
            _this.totalItems = res.pagination.TotalItems;
            _this.loadingBarService.complete();
        }, function (error) {
            _this.loadingBarService.complete();
            _this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
        });
    };
    ScheduleListComponent.prototype.pageChanged = function (event) {
        this.currentPage = event.page;
        this.loadSchedules();
        //console.log('Page changed to: ' + event.page);
        //console.log('Number items per page: ' + event.itemsPerPage);
    };
    ;
    ScheduleListComponent.prototype.removeSchedule = function (schedule) {
        var _this = this;
        this.notificationService.openConfirmationDialog('Are you sure you want to delete this schedule?', function () {
            _this.loadingBarService.start();
            _this.dataService.deleteSchedule(schedule.id)
                .subscribe(function () {
                _this.itemsService.removeItemFromArray(_this.schedules, schedule);
                _this.notificationService.printSuccessMessage(schedule.title + ' has been deleted.');
                _this.loadingBarService.complete();
            }, function (error) {
                _this.loadingBarService.complete();
                _this.notificationService.printErrorMessage('Failed to delete ' + schedule.title + ' ' + error);
            });
        });
    };
    ScheduleListComponent.prototype.viewScheduleDetails = function (id) {
        var _this = this;
        this.selectedScheduleId = id;
        this.dataService.getScheduleDetails(this.selectedScheduleId)
            .subscribe(function (schedule) {
            _this.scheduleDetails = _this.itemsService.getSerialized(schedule);
            // Convert date times to readable format
            _this.scheduleDetails.timeStart = new date_format_pipe_1.DateFormatPipe().transform(schedule.timeStart, ['local']);
            _this.scheduleDetails.timeEnd = new date_format_pipe_1.DateFormatPipe().transform(schedule.timeEnd, ['local']);
            _this.loadingBarService.complete();
            _this.selectedScheduleLoaded = true;
            _this.childModal.show(); //.open('lg');
        }, function (error) {
            _this.loadingBarService.complete();
            _this.notificationService.printErrorMessage('Failed to load schedule. ' + error);
        });
    };
    ScheduleListComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    __decorate([
        core_1.ViewChild('childModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], ScheduleListComponent.prototype, "childModal", void 0);
    __decorate([
        core_1.ViewChild('modal'), 
        __metadata('design:type', Object)
    ], ScheduleListComponent.prototype, "modal", void 0);
    ScheduleListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-schedules',
            templateUrl: 'schedule-list.component.html',
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ opacity: 1, transform: 'translateX(0)' })),
                    core_1.transition('void => *', [
                        core_1.style({
                            opacity: 0,
                            transform: 'translateX(-100%)'
                        }),
                        core_1.animate('0.5s ease-in')
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('0.2s 10 ease-out', core_1.style({
                            opacity: 0,
                            transform: 'translateX(100%)'
                        }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, items_service_1.ItemsService, notification_service_1.NotificationService, config_service_1.ConfigService, ng2_slim_loading_bar_1.SlimLoadingBarService])
    ], ScheduleListComponent);
    return ScheduleListComponent;
}());
exports.ScheduleListComponent = ScheduleListComponent;
//# sourceMappingURL=schedule-list.component.js.map