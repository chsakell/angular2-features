import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/services/data.service';
import { ItemsService } from '../shared/utils/items.service';
import { NotificationService } from '../shared/utils/notification.service';
import { IUser } from '../shared/interfaces';
import { UserCardComponent } from './user-card.component';

@Component({
    moduleId: module.id,
    selector: 'users',
    templateUrl: 'user-list.component.html'
})
export class UserListComponent implements OnInit {

    users: IUser[];
    addingUser: boolean = false;

    constructor(private dataService: DataService,
        private itemsService: ItemsService,
        private notificationService: NotificationService) { }

    ngOnInit() {
        this.dataService.getUsers()
            .subscribe((users: IUser[]) => {
                this.users = users;
            },
            error => {
                this.notificationService.printErrorMessage('Failed to load users. ' + error);
            });
    }

    removeUser(user: any) {
        var _user: IUser = this.itemsService.getSerialized<IUser>(user.value);
        this.itemsService.removeItemFromArray<IUser>(this.users, _user);
        // inform user
        this.notificationService.printSuccessMessage(_user.name + ' has been removed');
    }

    userCreated(user: any) {
        var _user: IUser = this.itemsService.getSerialized<IUser>(user.value);
        this.addingUser = false;
        // inform user
        this.notificationService.printSuccessMessage(_user.name + ' has been created');
        console.log(_user.id);
        this.itemsService.setItem<IUser>(this.users, (u) => u.id == -1, _user);
        // todo fix user with id:-1
    }

    addUser() {
        this.addingUser = true;
        var newUser = { id: -1, name: '', avatar: 'avatar_05.png', profession: '', schedulesCreated: 0 };
        this.itemsService.addItemToStart<IUser>(this.users, newUser);
        //this.users.splice(0, 0, newUser);
    }

    cancelAddUser() {
        this.addingUser = false;
        this.itemsService.removeItems<IUser>(this.users, x => x.id < 0);
    }
}