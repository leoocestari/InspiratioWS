import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPacientsComponent } from './register-pacients.component';

describe('RegisterPacientsComponent', () => {
  let component: RegisterPacientsComponent;
  let fixture: ComponentFixture<RegisterPacientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPacientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPacientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
