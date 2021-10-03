import {ComponentFixture, TestBed} from '@angular/core/testing';

import { ActivityInputComponent } from './activity-input.component';
import {By} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {TimeButtonComponent} from "../time-button/time-button.component";

describe('ActivityInputComponent', () => {
  let component: ActivityInputComponent;
  let fixture: ComponentFixture<ActivityInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityInputComponent, TimeButtonComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit the activity when finished',() => {
    const input = fixture.debugElement.query(By.css("input"));
    jest.spyOn(component.activityCompletedEvent,"emit");
    input.nativeElement.focus()
    input.nativeElement.value="test";
    input.nativeElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    component.timeTracked(10);
    expect(component.activityCompletedEvent.emit).toHaveBeenCalledWith(expect.objectContaining({
      name: "test",
      duration: 10
    }))
  })
});
