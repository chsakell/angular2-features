import { EventEmitter, OnInit } from '@angular/core';
export declare class AlertComponent implements OnInit {
    type: string;
    dismissible: boolean;
    dismissOnTimeout: number;
    close: EventEmitter<AlertComponent>;
    closed: boolean;
    private classes;
    ngOnInit(): any;
    onClose(): void;
}
