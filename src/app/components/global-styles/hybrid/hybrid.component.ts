import { Component } from '@angular/core';

@Component({
  selector: 'app-hybrid',
  templateUrl: './hybrid.component.html',
  styleUrls: ['./hybrid.component.scss']
})
export class HybridComponent {
  items = [
      {
        title: 'Component Themes',
        // tslint:disable-next-line:max-line-length
        message: 'Focus on creating components that have multiple themes and we explore some different ways that we can apply them. First we explicitly set the theme per instance by adding classes and properties to components and we explore what that this SCSS/CSS would look like. We then look at providing context aware themes for components that will...',
        image: 'knife.png'
      },
      {
        title: 'Styles in Angular',
        // tslint:disable-next-line:max-line-length
        message: 'A dive into how styles work in Angular 2.0+. We cover how the different view encapsulation modes work, what they mean as far as the compiled code and scope, and why we may want to use each of them. We then move into the different ways that we can add styles to components, how Angular handles them, and how their priority flows through. After...',
        image: 'beaker.png'
      }
  ];
}
