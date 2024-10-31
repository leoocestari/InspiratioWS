import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientScrollComponent } from './pacient-scroll.component';

describe('PacientScrollComponent', () => {
  let component: PacientScrollComponent;
  let fixture: ComponentFixture<PacientScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacientScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
