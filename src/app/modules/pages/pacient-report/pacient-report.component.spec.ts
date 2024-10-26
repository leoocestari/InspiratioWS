import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientReportComponent } from './pacient-report.component';

describe('PacientReportComponent', () => {
  let component: PacientReportComponent;
  let fixture: ComponentFixture<PacientReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacientReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
