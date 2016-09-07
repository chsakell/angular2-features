import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { DataService } from '../shared/services/data.service';
import { ItemsService } from '../shared/utils/items.service';
import { NotificationService } from '../shared/utils/notification.service';
import { ConfigService } from '../shared/utils/config.service';
import { MappingService } from '../shared/utils/mapping.service';
import { ISchedule, IScheduleDetails, IUser } from '../shared/interfaces';
import { DateFormatPipe } from '../shared/pipes/date-format.pipe';

@Component({
    moduleId: module.id,
    selector: 'app-schedule-edit',
    templateUrl: 'schedule-edit.component.html'
})
export class ScheduleEditComponent implements OnInit {
    apiHost: string;
    id: number;
    schedule: IScheduleDetails;
    scheduleLoaded: boolean = false;
    statuses: string[];
    types: string[];
    private sub: any;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private dataService: DataService,
        private itemsService: ItemsService,
        private notificationService: NotificationService,
        private configService: ConfigService,
        private mappingService: MappingService,
        private loadingBarService:SlimLoadingBarService) { }

    ngOnInit() {
        // (+) converts string 'id' to a number
	    this.id = +this.route.snapshot.params['id'];
        this.apiHost = this.configService.getApiHost();
        this.loadScheduleDetails();
    }

    loadScheduleDetails() {
        this.loadingBarService.start();
        this.dataService.getScheduleDetails(this.id)
            .subscribe((schedule: IScheduleDetails) => {
                this.schedule = this.itemsService.getSerialized<IScheduleDetails>(schedule);
                this.scheduleLoaded = true;
                // Convert date times to readable format
                this.schedule.timeStart = new Date(this.schedule.timeStart.toString()); // new DateFormatPipe().transform(schedule.timeStart, ['local']);
                this.schedule.timeEnd = new Date(this.schedule.timeEnd.toString()); //new DateFormatPipe().transform(schedule.timeEnd, ['local']);
                this.statuses = this.schedule.statuses;
                this.types = this.schedule.types;

                this.loadingBarService.complete();
            },
            error => {
                this.loadingBarService.complete();
                this.notificationService.printErrorMessage('Failed to load schedule. ' + error);
            });
    }

    updateSchedule(editScheduleForm: NgForm) {
        console.log(editScheduleForm.value);

        var scheduleMapped = this.mappingService.mapScheduleDetailsToSchedule(this.schedule);

        this.loadingBarService.start();
        this.dataService.updateSchedule(scheduleMapped)
            .subscribe(() => {
                this.notificationService.printSuccessMessage('Schedule has been updated');
                this.loadingBarService.complete();
            },
            error => {
                this.loadingBarService.complete();
                this.notificationService.printErrorMessage('Failed to update schedule. ' + error);
            });
    }

    removeAttendee(attendee: IUser) {
        this.notificationService.openConfirmationDialog('Are you sure you want to remove '
            + attendee.name + ' from this schedule?',
            () => {
                this.loadingBarService.start();
                this.dataService.deleteScheduleAttendee(this.schedule.id, attendee.id)
                    .subscribe(() => {
                        this.itemsService.removeItemFromArray<IUser>(this.schedule.attendees, attendee);
                        this.notificationService.printSuccessMessage(attendee.name + ' will not attend the schedule.');
                        this.loadingBarService.complete();
                    },
                    error => {
                        this.loadingBarService.complete();
                        this.notificationService.printErrorMessage('Failed to remove ' + attendee.name + ' ' + error);
                    });
            });
    }

    back() {
        this.router.navigate(['/schedules']);
    }

}