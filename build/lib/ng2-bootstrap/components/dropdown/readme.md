### Usage
```typescript
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
// or
import { DropdownModule } from 'ng2-bootstrap/components/dropdown';
```

```html
<!-- dropdown directive marks a dropdown root element -->
<div dropdown>
  <!-- click on dropdown-toggle toggles dropdown state, optional -->
  <div dropdownToggle></div>
  <!-- dropdown-menu holds content which will be shown -->
  <div dropdownMenu>
    <!-- this content will be shown if dropdown opened -->
  </div>
</div>
```

### Annotations
```typescript
// directive Dropdown
@Directive({
  selector: '[dropdown]',
  exportAs: 'bs-dropdown'
})
export class Dropdown implements OnInit, OnDestroy {
  @HostBinding('class.open')
  @Input() public get isOpen():boolean {}
  @Input() public autoClose:string;
  @Input() public keyboardNav:boolean;
// enum string: ['nonInput', always', 'outsideClick', 'disabled']
  @Input() public appendToBody:boolean;
  @Output() public onToggle:EventEmitter<boolean>;
}

// directive DropdownToggle
@Directive({ 
  selector: '[dropdownToggle]',
  exportAs: 'bs-dropdown-toggle'
})
export class DropdownToggle implements OnInit {
  @HostBinding('class.disabled')
  @Input() public isDisabled:boolean = false;

  @HostBinding('class.dropdown-toggle')
  @Input() public addToggleClass:boolean = false;

  @HostBinding('attr.aria-expanded')
  public get isOpen() {}
  @HostListener('click', ['$event'])
  public toggleDropdown(event:MouseEvent) {}
}
```

### Dropdown properties
- `isOpen` (`?boolean=false`) - if `true` dropdown will be opened
- `autoClose` (`?string='nonInput'`) - behaviour vary:
    * `nonInput` - (default) automatically closes the dropdown when any of its elements is clicked — as long as the clicked element is not an `input` or a `textarea`.
    * `always` - automatically closes the dropdown when any of its elements is clicked
    * `outsideClick` - closes the dropdown automatically only when the user clicks any element outside the dropdown
    * `disabled` - disables the auto close. You can then control the open/close status of the dropdown manually, by using `is-open`. Please notice that the dropdown will still close if the toggle is clicked, the `esc` key is pressed or another dropdown is open
- `keyboardNav` (`?boolean=false`) - if `true` will enable navigation of dropdown list elements with the arrow keys
- `appendToBody` (*not yet tested*) (`?boolean=false`) - if `true` `dropdownMenu` content will be appended to the body. This is useful when the dropdown button is inside a div with `overflow: hidden`, and the menu would otherwise be hidden

### Dropdown events
- `onToggle` - fired when `dropdown` toggles, `$event:boolean` equals dropdown `isOpen` state

### Dropdown toggle properties
- `isDisabled` (`?boolean=false`) - if `true` dropdown toggle will be disabled
- `addToggleClass` (`?boolean=false`) - if `true` the `dropdown-toggle` class will be added to the element
