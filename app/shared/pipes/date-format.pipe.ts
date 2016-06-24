import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateFormat'
})

export class DateFormatPipe implements PipeTransform {
    transform(value: any, args: any[]): any {

        if (args && args[0] === 'local') {
            return new Date(value).toLocaleString();
        }
        else if (value) {
            return new Date(value);
        }
        return value;
    }
}