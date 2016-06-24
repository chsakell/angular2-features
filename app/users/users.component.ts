import { Component, OnInit } from '@angular/core';

import {SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';

import { DataService } from '../shared/services/data.service';
import { UtilsService } from '../shared/utils/utils.service';
import { IUser } from '../shared/interfaces';
import { UserCardComponent } from './userCard.component';

@Component({
    moduleId: module.id,
    selector: 'users',
    templateUrl: 'users.component.html',
    directives: [UserCardComponent],
    providers: [UtilsService]
})
export class UsersComponent implements OnInit {

    users: IUser[];
    addingUser: boolean = false;

    constructor(private dataService: DataService,
        private utilsService: UtilsService,
        private slimLoader: SlimLoadingBarService) { }

    ngOnInit() {
        this.slimLoader.start();
        this.dataService.getUsers()
            .subscribe((users: IUser[]) => {
                this.users = users;
                this.slimLoader.complete();
            },
            error => {
                this.slimLoader.complete();
                this.utilsService.printErrorMessage('Failed to load users. ' + error);
            });
    }

    removeUser(user: any) {
        var _user: IUser = this.utilsService.getSerialized<IUser>(user.value);
        this.utilsService.removeItemFromArray<IUser>(this.users, _user);
        // inform user
        this.utilsService.printSuccessMessage(_user.name + ' has been removed');
    }

    userCreated(user: any) {
        var _user: IUser = this.utilsService.getSerialized<IUser>(user.value);
        this.addingUser = false;
        // inform user
        this.utilsService.printSuccessMessage(_user.name + ' has been created');
    }

    addUser() {
        this.addingUser = true;
        var newUser = { id: -1, name: '', avatar: 'avatar_05.png', profession: '', schedulesCreated: 0 };
        this.utilsService.addItemToStart<IUser>(this.users, newUser);
        //this.users.splice(0, 0, newUser);
    }

    cancelAddUser() {
        this.addingUser = false;
        this.utilsService.removeItems<IUser>(this.users, x => x.id < 0);
    }
}