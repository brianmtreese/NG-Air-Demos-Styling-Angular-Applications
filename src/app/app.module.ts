import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomPropertiesComponent } from './components/component-themes/custom-properties/custom-properties.component';
import { HostClassComponent } from './components/component-themes/host-class/host-class.component';
import { HostContextComponent } from './components/component-themes/host-context/host-context.component';
import { EncapsulatedBemComponent } from './components/global-styles/encapsulated-bem/encapsulated-bem.component';
import { EncapsulatedElementComponent } from './components/global-styles/encapsulated-element/encapsulated-element.component';
import { HybridComponent } from './components/global-styles/hybrid/hybrid.component';
import { TraditionalComponent } from './components/global-styles/traditional/traditional.component';
import { HostClassParent01Component } from './components/component-themes/composite-components/host-class/host-class-parent-01/host-class-parent-01.component';
import { HostClassParent02Component } from './components/component-themes/composite-components/host-class/host-class-parent-02/host-class-parent-02.component';
import { HostContextParent01Component } from './components/component-themes/composite-components/host-context/host-context-parent-01/host-context-parent-01.component';
import { HostContextParent02Component } from './components/component-themes/composite-components/host-context/host-context-parent-02/host-context-parent-02.component';
import { CustomPropertiesParent01Component } from './components/component-themes/composite-components/custom-properties/custom-properties-parent-01/custom-properties-parent-01.component';
import { CustomPropertiesParent02Component } from './components/component-themes/composite-components/custom-properties/custom-properties-parent-02/custom-properties-parent-02.component';
import { GenericComponent } from './components/generic/generic.component';
import { EmbeddedStylesComponent } from './components/including-styles/embedded-styles/embedded-styles.component';
import { LinkedStylesComponent } from './components/including-styles/linked-styles/linked-styles.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPropertiesComponent,
    HostClassComponent,
    HostContextComponent,
    EncapsulatedBemComponent,
    EncapsulatedElementComponent,
    HybridComponent,
    TraditionalComponent,
    HostClassParent01Component,
    HostClassParent02Component,
    HostContextParent01Component,
    HostContextParent02Component,
    CustomPropertiesParent01Component,
    CustomPropertiesParent02Component,
    GenericComponent,
    EmbeddedStylesComponent,
    LinkedStylesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
