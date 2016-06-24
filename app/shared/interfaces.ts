export interface IUser {
    id: number;
    name: string;
    avatar: string;
    profession: string;
    schedulesCreated: number;
}

export interface ISchedule {
     id: number;
     title: string;
     description: string;
     timeStart: Date;
     timeEnd: Date;
     location: string;
     type: string;
     status: string;
     dateCreated: Date;
     dateUpdated: Date;
     creator: string;
     creatorId: number;
     attendees: number[];
}

export interface IScheduleDetails {
     id: number;
     title: string;
     description: string;
     timeStart: Date;
     timeEnd: Date;
     location: string;
     type: string;
     status: string;
     dateCreated: Date;
     dateUpdated: Date;
     creator: string;
     creatorId: number;
     attendees: IUser[];
     statuses: string[];
     types: string[];
}

export interface Pagination {
    CurrentPage : number;
    ItemsPerPage : number;
    TotalItems : number;
    TotalPages: number;
}

export class PaginatedResult<T> {
    result :  T;
    pagination : Pagination;
}

export interface Predicate<T> {
    (item: T): boolean
}