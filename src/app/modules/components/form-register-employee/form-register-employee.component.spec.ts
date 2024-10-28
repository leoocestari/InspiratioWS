import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterEmployeeComponent } from './form-register-employee.component';

describe('FormRegisterEmployeeComponent', () => {
  let component: FormRegisterEmployeeComponent;
  let fixture: ComponentFixture<FormRegisterEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegisterEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegisterEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
