import { AccordionPanelComponent } from './accordion-group.component';
export declare class AccordionComponent {
    closeOthers: boolean;
    addClass: boolean;
    private groups;
    closeOtherPanels(openGroup: AccordionPanelComponent): void;
    addGroup(group: AccordionPanelComponent): void;
    removeGroup(group: AccordionPanelComponent): void;
}
