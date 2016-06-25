import { ConfigService } from '../../shared/utils/config.service';
import { DataService } from '../../shared/services/data.service';
import { ItemsService } from '../../shared/utils/items.service';
import { NotificationService } from '../../shared/utils/notification.service';

export class BaseComponent {

    constructor(
        private dataService: DataService,
        private itemsService: ItemsService,
        private notificationService: NotificationService,
        private configService: ConfigService
    ) { }
}