import { Component } from '@angular/core';

@Component({
  selector: 'app-generic',
  template: 'How do Custom CSS Properties work?',
  styles: [`
      :host {
        background: var(--background, red);
        color: var(--color, white);
        display: block;
        font-size: 2em;
        padding: 1em;
      }
  `]
})
export class GenericComponent {
}
