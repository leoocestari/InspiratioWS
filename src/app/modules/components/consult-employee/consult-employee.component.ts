import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface que define a estrutura de um funcionario
interface Employee {
  name: string;
}

@Component({
  selector: 'app-consult-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consult-employee.component.html',
  styleUrl: './consult-employee.component.scss'
})
export class ConsultEmployeeComponent {
  // Lista de pacientes com dados de exemplo
  employee: Employee[] = [
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
  viewPatient(patient: Employee) {
    console.log('View patient:', patient.name);
  }

  // Função para editar o paciente
  editPatient(patient: Employee) {
    console.log('Edit patient:', patient.name);
  }

  // Função para deletar o paciente
  deletePatient(patient: Employee) {
    console.log('Delete patient:', patient.name);
  }
}
