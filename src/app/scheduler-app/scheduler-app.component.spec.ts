import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerAppComponent } from './scheduler-app.component';

describe('SchedulerAppComponent', () => {
  let component: SchedulerAppComponent;
  let fixture: ComponentFixture<SchedulerAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
