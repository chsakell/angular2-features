import { Injectable } from '@angular/core';

import { ISchedule, IScheduleDetails, IUser } from '../interfaces';
import  { UtilsService } from './utils.service'

@Injectable()
export class MappingService {

    constructor(private utilsService : UtilsService) { }

    mapScheduleDetailsToSchedule(scheduleDetails: IScheduleDetails): ISchedule {
        var schedule: ISchedule = {
            id: scheduleDetails.id,
            title: scheduleDetails.title,
            description: scheduleDetails.description,
            timeStart: scheduleDetails.timeStart,
            timeEnd: scheduleDetails.timeEnd,
            location: scheduleDetails.location,
            type: scheduleDetails.type,
            status: scheduleDetails.status,
            dateCreated: scheduleDetails.dateCreated,
            dateUpdated: scheduleDetails.dateUpdated,
            creator: scheduleDetails.creator,
            creatorId: scheduleDetails.creatorId,
            attendees: this.utilsService.getPropertyValues<IUser, number[]>(scheduleDetails.attendees, 'id')
        }

        return schedule;
    }

}