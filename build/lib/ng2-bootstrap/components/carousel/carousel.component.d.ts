import { OnDestroy } from '@angular/core';
import { SlideComponent } from './slide.component';
export declare enum Direction {
    UNKNOWN = 0,
    NEXT = 1,
    PREV = 2,
}
/**
 * Problems:
 * 1) if we set an active slide via model changes, .active class remains on a current slide.
 * 2) if we have only one slide, we shouldn't show prev/next nav buttons
 * 3) if first or last slide is active and noWrap is true, there should be "disabled" class on the nav buttons.
 * 4) default interval should be equal 5000
 */
export declare class CarouselComponent implements OnDestroy {
    noWrap: boolean;
    noPause: boolean;
    noTransition: boolean;
    interval: number;
    slides: Array<SlideComponent>;
    private currentInterval;
    private isPlaying;
    private destroyed;
    private currentSlide;
    private _interval;
    readonly isBS4: boolean;
    ngOnDestroy(): void;
    select(nextSlide: SlideComponent, direction?: Direction): void;
    play(): void;
    pause(): void;
    next(): any;
    prev(): any;
    addSlide(slide: SlideComponent): void;
    removeSlide(slide: SlideComponent): void;
    private goNext(slide, direction);
    private getSlideByIndex(index);
    private getCurrentIndex();
    private restartTimer();
    private resetTimer();
}
