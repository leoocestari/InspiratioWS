import { Component } from '@angular/core';
import { ConsultComponent } from "../../components/consult/consult.component";

@Component({
  selector: 'app-consultar',
  standalone: true,
  imports: [ConsultComponent],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.scss'
})
export class ConsultarComponent {

}
