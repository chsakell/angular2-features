import { OnInit } from '@angular/core';
import { DatePickerInnerComponent } from './datepicker-inner.component';
export declare class DayPickerComponent implements OnInit {
    labels: Array<any>;
    title: string;
    rows: Array<any>;
    weekNumbers: Array<number>;
    datePicker: DatePickerInnerComponent;
    CURRENT_THEME_TEMPLATE: any;
    constructor(datePicker: DatePickerInnerComponent);
    readonly isBS4: boolean;
    ngOnInit(): void;
    private getDates(startDate, n);
    private getISO8601WeekNumber(date);
}
