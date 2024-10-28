import { Component } from '@angular/core';
import { FormRegisterComponent } from "../../components/form-register/form-register.component";
import { FormRegisterEmployeeComponent } from "../../components/form-register-employee/form-register-employee.component";

@Component({
  selector: 'app-register-pacients',
  standalone: true,
  imports: [
    RegisterPacientsComponent,
    FormRegisterComponent,
    FormRegisterEmployeeComponent
],
  templateUrl: './register-pacients.component.html',
  styleUrl: './register-pacients.component.scss'
})
export class RegisterPacientsComponent {

}
