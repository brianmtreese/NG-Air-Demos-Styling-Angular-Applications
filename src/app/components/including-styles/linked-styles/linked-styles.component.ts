import { Component } from '@angular/core';

@Component({
  selector: 'app-linked-styles',
  template: `
    <!--<link rel="stylesheet" href="src/app/components/including-styles/linked-styles/linked-styles.component.css" />-->
    <div>
      These styles are coming from an external stylesheet.
    </div>
  `,
  styleUrls: ['./linked-styles.component.css']
})
export class LinkedStylesComponent {
}
