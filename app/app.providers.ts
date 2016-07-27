import { bind } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { DataService } from './shared/services/data.service';
import { ConfigService } from './shared/utils/config.service';
import { ItemsService } from './shared/utils/items.service';
import { NotificationService } from './shared/utils/notification.service';

import {SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';

export const APP_PROVIDERS = [
    ConfigService,
    DataService,
    ItemsService,
    NotificationService,
    HTTP_PROVIDERS,
    SlimLoadingBarService
];