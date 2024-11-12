import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAppointmentListComponent } from './app-appointment-list.component';

describe('AppAppointmentListComponent', () => {
  let component: AppAppointmentListComponent;
  let fixture: ComponentFixture<AppAppointmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAppointmentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAppointmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
