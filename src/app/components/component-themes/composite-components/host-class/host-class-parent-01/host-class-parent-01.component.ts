import { Component, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-host-class-parent-01',
  templateUrl: './host-class-parent-01.component.html',
  styleUrls: ['./host-class-parent-01.component.scss']
})
export class HostClassParent01Component implements AfterContentInit {
    themeClassNames;
    isColor01 = false;
    isColor02 = false;

    constructor(private hostRef: ElementRef) {}

    ngAfterContentInit() {
        this.themeClassNames = this.hostRef.nativeElement.className.split(' ');
        if (this.themeClassNames.indexOf('color--01') > -1) {
            this.isColor01 = true;
        } else if (this.themeClassNames.indexOf('color--02') > -1) {
            this.isColor02 = true;
        }
    }

}
