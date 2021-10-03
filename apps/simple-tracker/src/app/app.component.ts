import { Component } from '@angular/core';
import {Activity} from "@simple-tracker/time-management";


@Component({
  selector: 'simple-tracker-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'simple-tracker';
  activityAdded(activity: Activity) {
    console.log(activity);
  }
}
