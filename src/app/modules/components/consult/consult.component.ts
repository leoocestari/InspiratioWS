import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface que define a estrutura de um paciente
interface Patient {
  name: string;
}

@Component({
  selector: 'app-consult',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent {
  // Lista de pacientes com dados de exemplo
  patients: Patient[] = [
    { name: 'Fernando Ricardo Ferdinando' },
    { name: 'Paulo Henrique' },
    { name: 'Maria das Dores Silva' }
  ];

  // Propriedade para controlar a visibilidade da lista
  isListExpanded: boolean = false;

  // Função para alternar a visibilidade da lista
  toggleList() {
    this.isListExpanded = !this.isListExpanded;
  }

  // Função para visualizar detalhes do paciente
  viewPatient(patient: Patient) {
    console.log('View patient:', patient.name);
  }

  // Função para editar o paciente
  editPatient(patient: Patient) {
    console.log('Edit patient:', patient.name);
  }

  // Função para deletar o paciente
  deletePatient(patient: Patient) {
    console.log('Delete patient:', patient.name);
  }
}
