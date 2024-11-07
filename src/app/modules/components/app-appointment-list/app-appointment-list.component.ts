import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-appointment-list',
  standalone: true,
  imports: [
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './app-appointment-list.component.html',
  styleUrl: './app-appointment-list.component.scss'
})
export class AppAppointmentListComponent {

  agendados = [
    { name: 'Relatorio_Claudio_13-09-2024.pdf', date: new Date('2024-09-13') },
    { name: 'Relatorio_Claudio_16-07-2024.pdf', date: new Date('2024-07-16') }
  ];

  feitas = [
    { name: 'Relatorio_Claudio_11-05-2024.pdf', date: new Date('2024-05-11') }
  ];

  // Variáveis de estado
  listType: 'agendados' | 'feitas' = 'agendados';
  filteredAgendados = this.agendados;
  filteredFeitas = this.feitas;

  // Método para alternar entre as listas
  setListType(type: 'agendados' | 'feitas') {
    this.listType = type;
    this.filterByDate(); // Atualiza o filtro com base no tipo de lista ativo
  }

  // Método para filtro de data
  selectedDate: Date | null = null;

  onDateChange(event: any) {
    this.selectedDate = event.value;
    this.filterByDate();
  }

  filterByDate() {
    if (this.selectedDate) {
      this.filteredAgendados = this.agendados.filter(item =>
        item.date.toDateString() === this.selectedDate?.toDateString()
      );
      this.filteredFeitas = this.feitas.filter(item =>
        item.date.toDateString() === this.selectedDate?.toDateString()
      );
    } else {
      this.filteredAgendados = [...this.agendados];
      this.filteredFeitas = [...this.feitas];
    }
  }

  // Método para excluir item
  deleteItem(item: any) {
    if (this.listType === 'agendados') {
      this.filteredAgendados = this.filteredAgendados.filter(i => i !== item);
      this.agendados = this.agendados.filter(i => i !== item);
    } else {
      this.filteredFeitas = this.filteredFeitas.filter(i => i !== item);
      this.feitas = this.feitas.filter(i => i !== item);
    }
  }
}
