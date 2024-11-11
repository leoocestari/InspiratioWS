import { Component } from '@angular/core';
import { ConsultComponent } from "../../components/consult/consult.component";
import { ConsultEmployeeComponent } from "../../components/consult-employee/consult-employee.component";

@Component({
  selector: 'app-consultar',
  standalone: true,
  imports: [ConsultComponent, ConsultEmployeeComponent],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.scss'
})
export class ConsultarComponent {

}
