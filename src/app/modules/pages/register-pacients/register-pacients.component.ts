import { Component } from '@angular/core';
import { FormRegisterComponent } from "../../components/form-register/form-register.component";

@Component({
  selector: 'app-register-pacients',
  standalone: true,
  imports: [
    RegisterPacientsComponent,
    FormRegisterComponent
],
  templateUrl: './register-pacients.component.html',
  styleUrl: './register-pacients.component.scss'
})
export class RegisterPacientsComponent {

}
