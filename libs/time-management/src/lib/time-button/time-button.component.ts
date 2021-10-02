import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'simple-tracker-time-button',
  templateUrl: './time-button.component.html',
  styleUrls: ['./time-button.component.scss']
})
export class TimeButtonComponent implements OnInit, OnDestroy {

  constructor() { }

  @Output() timeTrackedEvent = new EventEmitter<number>();

  public startTime: Date = new Date();
  public now: Date = new Date();
  public running: boolean = false;
  public interval:number = 0;

  public getTime(): number {
    return Math.round((this.now.getTime() - this.startTime.getTime()) / 1000);
  }

  public onClick(): void {
    if(this.running){
      this.running = false;
      this.timeTrackedEvent.emit(this.getTime())
    } else {
      this.startTime = new Date();
      this.now = this.startTime;
      this.running = true;
    }
  }

  tick(){
    this.interval = setTimeout(() => {
      this.now = new Date();
      this.tick();
    }, 1000)
  }

  ngOnInit(): void {
    this.tick();
  }
  ngOnDestroy() {
    clearTimeout(this.interval);
  }

}
