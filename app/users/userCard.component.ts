import { Component, Input, Output, OnInit, ViewContainerRef, EventEmitter, ViewChild,
    trigger,
    state,
    style,
    animate,
    transition  } from '@angular/core';

import {SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { IUser, ISchedule } from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { UtilsService } from '../shared/utils/utils.service';
import { ConfigService } from '../shared/utils/config.service';
import { DateFormatPipe } from '../shared/pipes/date-format.pipe';

@Component({
    moduleId: module.id,
    selector: 'user-card',
    templateUrl: 'userCard.component.html',
    directives: [MODAL_DIRECTIVES],
    providers: [UtilsService],
    pipes: [DateFormatPipe],
    animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.5s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s 10 ease-out', style({
                    opacity: 0,
                    transform: 'translateX(100%)'
                }))
            ])
        ])
    ]
})
export class UserCardComponent implements OnInit {

    @Input() user: IUser;
    @Output() removeUser = new EventEmitter();
    @Output() userCreated = new EventEmitter();

    edittedUser: IUser;
    onEdit: boolean = false;
    apiHost: string;
    // Modal properties
    @ViewChild('modal')
    modal: ModalComponent;
    items: string[] = ['item1', 'item2', 'item3'];
    selected: string;
    output: string;
    userSchedules: ISchedule[];
    userSchedulesLoaded: boolean = false;
    index: number = 0;
    backdropOptions = [true, false, 'static'];
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;

    constructor(private utilsService: UtilsService,
        private slimLoader: SlimLoadingBarService,
        private dataService: DataService,
        private configService: ConfigService) { }

    ngOnInit() {
        this.apiHost = this.configService.getApiHost();
        this.edittedUser = this.utilsService.getSerialized<IUser>(this.user);
        if (this.user.id < 0)
            this.editUser();
    }

    editUser() {
        this.onEdit = !this.onEdit;
        this.edittedUser = this.utilsService.getSerialized<IUser>(this.user);
        // <IUser>JSON.parse(JSON.stringify(this.user)); // todo Utils..
    }

    createUser() {
        this.slimLoader.start();
        this.dataService.createUser(this.edittedUser)
            .subscribe((userCreated) => {
                this.user = this.utilsService.getSerialized<IUser>(userCreated);
                this.edittedUser = this.utilsService.getSerialized<IUser>(this.user);
                this.onEdit = false;

                this.userCreated.emit({ value: userCreated });
                this.slimLoader.complete();
            },
            error => {
                this.utilsService.printErrorMessage('Failed to created user');
                this.utilsService.printErrorMessage(error);
                this.slimLoader.complete();
            });
    }

    updateUser() {
        this.slimLoader.start();
        this.dataService.updateUser(this.edittedUser)
            .subscribe(() => {
                this.user = this.edittedUser;
                this.onEdit = !this.onEdit;
                this.utilsService.printSuccessMessage(this.user.name + ' has been updated');
                this.slimLoader.complete();
            },
            error => {
                this.utilsService.printErrorMessage('Failed to edit user');
                this.utilsService.printErrorMessage(error);
                this.slimLoader.complete();
            });
    }

    openRemoveModal() {
        this.utilsService.openConfirmationDialog('Are you sure you want to remove '
            + this.user.name + '?',
            () => {
                this.slimLoader.start();
                this.dataService.deleteUser(this.user.id)
                    .subscribe(
                    res => {
                        this.removeUser.emit({
                            value: this.user
                        });
                        this.slimLoader.complete();
                        this.slimLoader.complete();
                    }, error => {
                        this.utilsService.printErrorMessage(error);
                        this.slimLoader.complete();
                    })
            });
    }

    viewSchedules(user: IUser) {
        console.log(user);
        this.modal.open('lg');
    }

    closed() {
        this.output = '(closed) ' + this.selected;
    }

    dismissed() {
        this.output = '(dismissed)';
    }

    opened() {
        this.slimLoader.start();
        this.dataService.getUserSchedules(this.edittedUser.id)
            .subscribe((schedules: ISchedule[]) => {
                this.userSchedules = schedules;
                console.log(this.userSchedules);
                this.userSchedulesLoaded = true;
                this.slimLoader.complete();
            },
            error => {
                this.slimLoader.complete();
                this.utilsService.printErrorMessage('Failed to load users. ' + error);
            });
        this.output = '(opened)';
    }

    isUserValid(): boolean {
        return !(this.edittedUser.name.trim() === "")
            && !(this.edittedUser.profession.trim() === "");
    }

}