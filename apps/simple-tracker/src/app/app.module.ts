import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TimeManagementModule} from "@simple-tracker/time-management";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, TimeManagementModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
