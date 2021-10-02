import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeButtonComponent } from './time-button/time-button.component';

@NgModule({
  imports: [CommonModule],
  exports: [TimeButtonComponent],
  declarations: [
    TimeButtonComponent
  ],
})
export class TimeManagementModule {}
