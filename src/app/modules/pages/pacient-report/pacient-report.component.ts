import { Component } from '@angular/core';
import { PacientScrollComponent } from '../../components/pacient-scroll/pacient-scroll.component';
import { EditorComponent } from '../../components/editor/editor.component';

@Component({
  selector: 'app-pacient-report',
  standalone: true,
  imports: [PacientScrollComponent, EditorComponent],
  templateUrl: './pacient-report.component.html',
  styleUrl: './pacient-report.component.scss'
})
export class PacientReportComponent {
  files: { name: string, content: string }[] = [];

  addFile(file: { name: string, content: string }) {
    this.files.push(file);
  }
}


