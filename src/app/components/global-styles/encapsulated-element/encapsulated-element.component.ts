import { Component } from '@angular/core';

@Component({
  selector: 'app-encapsulated-element',
  templateUrl: './encapsulated-element.component.html',
  styleUrls: ['./encapsulated-element.component.scss']
})
export class EncapsulatedElementComponent {
    items = [
        {
          title: 'Component Themes',
          message: 'Focus on creating components that have multiple themes and we explore some different ways that we can apply them. First we explicitly set the theme per instance by adding classes and properties to components and we explore what that this SCSS/CSS would look like. We then look at providing context aware themes for components that will...',
          image: 'knife.png'
        },
        {
          title: 'Styles in Angular',
          message: 'A dive into how styles work in Angular 2.0+. We cover how the different view encapsulation modes work, what they mean as far as the compiled code and scope, and why we may want to use each of them. We then move into the different ways that we can add styles to components, how Angular handles them, and how their priority flows through. After...',
          image: 'beaker.png'
        }
    ];
}