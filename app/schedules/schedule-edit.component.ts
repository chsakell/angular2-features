import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FORM_DIRECTIVES, NgForm } from '@angular/common';

import { DataService } from '../shared/services/data.service';
import { UtilsService } from '../shared/utils/utils.service';
import { ConfigService } from '../shared/utils/config.service';
import { MappingService } from '../shared/utils/mapping.service';
import { ISchedule, IScheduleDetails, IUser } from '../shared/interfaces';
import { DateFormatPipe } from '../shared/pipes/date-format.pipe';

import {SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';
import { NKDatetime } from 'ng2-datetime/ng2-datetime';

@Component({
    moduleId: module.id,
    selector: 'app-schedule-edit',
    templateUrl: 'schedule-edit.component.html',
    directives: [NKDatetime, FORM_DIRECTIVES],
    providers: [MappingService],
    pipes: [DateFormatPipe]
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
        private utilsService: UtilsService,
        private configService: ConfigService,
        private mappingService: MappingService,
        private slimLoader: SlimLoadingBarService) { }

    ngOnInit() {
        // (+) converts string 'id' to a number
	    this.id = +this.route.snapshot.params['id'];
        this.apiHost = this.configService.getApiHost();
        this.loadScheduleDetails();
    }

    loadScheduleDetails() {
        this.slimLoader.start();
        this.dataService.getScheduleDetails(this.id)
            .subscribe((schedule: IScheduleDetails) => {
                this.schedule = this.utilsService.getSerialized<IScheduleDetails>(schedule);
                this.scheduleLoaded = true;
                // Convert date times to readable format
                this.schedule.timeStart = new Date(this.schedule.timeStart.toString()); // new DateFormatPipe().transform(schedule.timeStart, ['local']);
                this.schedule.timeEnd = new Date(this.schedule.timeEnd.toString()); //new DateFormatPipe().transform(schedule.timeEnd, ['local']);
                this.statuses = this.schedule.statuses;
                this.types = this.schedule.types;

                this.slimLoader.complete();
            },
            error => {
                this.slimLoader.complete();
                this.utilsService.printErrorMessage('Failed to load schedule. ' + error);
            });
    }

    updateSchedule(editScheduleForm: NgForm) {
        console.log(editScheduleForm.value);

        var scheduleMapped = this.mappingService.mapScheduleDetailsToSchedule(this.schedule);

        this.slimLoader.start();
        this.dataService.updateSchedule(scheduleMapped)
            .subscribe(() => {
                this.utilsService.printSuccessMessage('Schedule has been updated');
                this.slimLoader.complete();
            },
            error => {
                this.slimLoader.complete();
                this.utilsService.printErrorMessage('Failed to update schedule. ' + error);
            });
    }

    removeAttendee(attendee: IUser) {
        this.utilsService.openConfirmationDialog('Are you sure you want to remove '
            + attendee.name + ' from this schedule?',
            () => {
                this.slimLoader.start();
                this.dataService.deleteScheduleAttendee(this.schedule.id, attendee.id)
                    .subscribe(() => {
                        this.utilsService.removeItemFromArray<IUser>(this.schedule.attendees, attendee);
                        this.utilsService.printSuccessMessage(attendee.name + ' will not attend the schedule.');
                        this.slimLoader.complete();
                    },
                    error => {
                        this.slimLoader.complete();
                        this.utilsService.printErrorMessage('Failed to remove ' + attendee.name + ' ' + error);
                    });
            });
    }

    back() {
        this.router.navigate(['/schedules']);
    }

}