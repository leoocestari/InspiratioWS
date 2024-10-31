import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-pacient-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pacient-scroll.component.html',
  styleUrl: './pacient-scroll.component.scss'
})
export class PacientScrollComponent {

  @Input() files: { name: string, content: string }[] = [];

  downloadFile(file: { name: string, content: string }) {
    const blob = new Blob([file.content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}


