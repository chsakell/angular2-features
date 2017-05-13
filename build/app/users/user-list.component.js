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
var data_service_1 = require('../shared/services/data.service');
var items_service_1 = require('../shared/utils/items.service');
var notification_service_1 = require('../shared/utils/notification.service');
var UserListComponent = (function () {
    function UserListComponent(dataService, itemsService, notificationService) {
        this.dataService = dataService;
        this.itemsService = itemsService;
        this.notificationService = notificationService;
        this.addingUser = false;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        }, function (error) {
            _this.notificationService.printErrorMessage('Failed to load users. ' + error);
        });
    };
    UserListComponent.prototype.removeUser = function (user) {
        var _user = this.itemsService.getSerialized(user.value);
        this.itemsService.removeItemFromArray(this.users, _user);
        // inform user
        this.notificationService.printSuccessMessage(_user.name + ' has been removed');
    };
    UserListComponent.prototype.userCreated = function (user) {
        var _user = this.itemsService.getSerialized(user.value);
        this.addingUser = false;
        // inform user
        this.notificationService.printSuccessMessage(_user.name + ' has been created');
        console.log(_user.id);
        this.itemsService.setItem(this.users, function (u) { return u.id == -1; }, _user);
        // todo fix user with id:-1
    };
    UserListComponent.prototype.addUser = function () {
        this.addingUser = true;
        var newUser = { id: -1, name: '', avatar: 'avatar_05.png', profession: '', schedulesCreated: 0 };
        this.itemsService.addItemToStart(this.users, newUser);
        //this.users.splice(0, 0, newUser);
    };
    UserListComponent.prototype.cancelAddUser = function () {
        this.addingUser = false;
        this.itemsService.removeItems(this.users, function (x) { return x.id < 0; });
    };
    UserListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'users',
            templateUrl: 'user-list.component.html'
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, items_service_1.ItemsService, notification_service_1.NotificationService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map