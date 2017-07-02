import { DefaultUrlSerializer, UrlTree } from '@angular/router';
// /ref: https://stackoverflow.com/questions/42065409/angular-2-routes-3-0-case-sensitive

export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
    parse(url: string): UrlTree {
        return super.parse(url.toLowerCase());
    }
}