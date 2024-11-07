import { Component } from '@angular/core';
import { AppAppointmentListComponent } from '../../components/app-appointment-list/app-appointment-list.component';

@Component({
  selector: 'app-medical-report',
  standalone: true,
  imports: [AppAppointmentListComponent],
  templateUrl: './medical-report.component.html',
  styleUrl: './medical-report.component.scss'
})
export class MedicalReportComponent {

}
