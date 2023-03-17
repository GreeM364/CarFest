import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpaModule } from "../spa/spa.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SpaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
