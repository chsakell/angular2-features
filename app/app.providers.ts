import { bind } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router';

import { DataService } from './shared/services/data.service';
import { UtilsService } from './shared/utils/utils.service';
import { ConfigService } from './shared/utils/config.service';

import {SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';


export const APP_PROVIDERS = [
    DataService,
    UtilsService,
    ConfigService,
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    SlimLoadingBarService
];