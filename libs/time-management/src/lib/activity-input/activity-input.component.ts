import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Activity} from "../../model/Activity";

@Component({
  selector: 'simple-tracker-activity-input',
  templateUrl: './activity-input.component.html',
  styleUrls: ['./activity-input.component.scss']
})
export class ActivityInputComponent implements OnInit {

  constructor() { }

  @Output() activityCompletedEvent = new EventEmitter<Activity>();
  name: string = "";

  timeTracked(duration: number){
    this.activityCompletedEvent.emit({
      name: this.name,
      duration
    })
  }

  ngOnInit(): void {
  }

}
