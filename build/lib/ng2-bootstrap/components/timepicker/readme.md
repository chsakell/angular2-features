### Usage
```typescript
import { TimepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
// or
import { TimepickerModule } from 'ng2-bootstrap/components/timepicker';
```

### Annotations
```typescript
// component Timepicker
@Component({
  selector: 'timepicker[ngModel]'
})
export class TimepickerComponent implements ControlValueAccessor, OnInit {
  // config
  @Input() public hourStep:number;
  @Input() public minuteStep:number;
  @Input() public readonlyInput:boolean;
  @Input() public mousewheel:boolean;
  @Input() public arrowkeys:boolean;
  @Input() public showSpinners:boolean;
  @Input() public min:Date;
  @Input() public max:Date;
  @Input() public meridians:Array<string> = ['AM', 'PM']; // ??

  @Input() public get showMeridian() {}
}
```

### Timepicker properties
  - `vertical` (`?boolean=false`) - if `true` tabs will be placed vertically
  - `justified` (`?boolean=false`) - if `true` tabs fill the container and have a consistent width
  - `type` (`?string='tabs'`) - navigation context class: 'tabs' or 'pills'

  - `ngModel` (`*Date`) - binds to Date object
  - `hourStep` (`?number=1`) - hours change step
  - `minuteStep` (`?number=1`) - minutes change step
  - `meridians` (`?Array<string> = ['AM', 'PM'];`) - meridian labels based on locale (*will be based later*)
  - `showMeridian` (`?boolean=true`) - if `true` works in 12H mode and displays AM/PM. If `false` works in 24H mode and hides AM/PM
  - `readonlyInput` (`?boolean=false`) - if `true` hours and minutes fields will be readonly
  - `mousewheel` (`?boolean=true`) - if `true` scroll inside hours and minutes inputs will change time
  - `arrowkeys` (`?boolean=true`) - if `true` up/down arrowkeys inside hours and minutes inputs will change time
  - `showSpinners` (`?boolean=true`) - if `true` spinner arrows above and below the inputs will be shown
  - `min` (`?Date:undefined`) - minimum time user can select
  - `max` (`?Date:undefined`) - maximum time user can select
