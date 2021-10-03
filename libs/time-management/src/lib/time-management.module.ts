import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeButtonComponent } from './time-button/time-button.component';
import { ActivityInputComponent } from './activity-input/activity-input.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [TimeButtonComponent, ActivityInputComponent],
  declarations: [
    TimeButtonComponent,
    ActivityInputComponent
  ],
})
export class TimeManagementModule {}
