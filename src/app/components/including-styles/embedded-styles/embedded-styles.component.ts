import { Component } from '@angular/core';

@Component({
  selector: 'app-embedded-styles',
  template: `
    <style></style>
    <div>
      These styles are embedded within in this component without an external stylesheet.
    </div>
  `,
  styles: [`
    :host {
      background: red;
      color: white;
      display: block;
      font-size: 2em;
      padding: 1em;
    }
  `]
})
export class EmbeddedStylesComponent {
}
