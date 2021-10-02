import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeButtonComponent } from './time-button.component';
import {By} from "@angular/platform-browser";

describe('TimeButtonComponent', () => {
  let component: TimeButtonComponent;
  let fixture: ComponentFixture<TimeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2021-10-02 16:22:00"));
    fixture = TestBed.createComponent(TimeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.useRealTimers();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show tracked time', () => {
    const button = fixture.debugElement.query(By.css("button"));
    button.triggerEventHandler("click",null);
    jest.advanceTimersByTime(5000);
    fixture.detectChanges();
    expect(button.nativeElement.textContent).toBe("5")
  });
  it('should not show tracked time when not started', () => {
    const button = fixture.debugElement.query(By.css("button"));
    jest.advanceTimersByTime(5000);
    fixture.detectChanges();
    expect(button.nativeElement.textContent).toBe("START")
  });
  it('should stop when clicked again', () => {
    const button = fixture.debugElement.query(By.css("button"));
    button.triggerEventHandler("click",null);
    jest.advanceTimersByTime(5000);
    fixture.detectChanges();
    button.triggerEventHandler("click",null);
    fixture.detectChanges();
    expect(button.nativeElement.textContent).toBe("START")
  });
  it('should emit an event when stopped', () => {
    const button = fixture.debugElement.query(By.css("button"));
    jest.spyOn(component.timeTrackedEvent,"emit");
    button.triggerEventHandler("click",null);
    jest.advanceTimersByTime(5000);
    fixture.detectChanges();
    button.triggerEventHandler("click",null);
    fixture.detectChanges();
    expect(component.timeTrackedEvent.emit).toHaveBeenCalledWith(5);
  });
});
