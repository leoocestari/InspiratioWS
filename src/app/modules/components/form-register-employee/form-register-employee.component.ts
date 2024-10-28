import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-register-employee',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form-register-employee.component.html',
  styleUrls: ['./form-register-employee.component.scss']
})
export class FormRegisterEmployeeComponent {
  isExpanded: boolean = false; // Variável de controle
  registerEmployeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicialização do formulário
    this.registerEmployeeForm = this.fb.group({
      name: [''],
      position: [''],
      employeeId: [''],
      department: [''],
      address: [''],
    });
  }

  // Função para alternar entre expandido/retraído
  toggleForm() {
    this.isExpanded = !this.isExpanded;
  }

  // Lógica ao submeter o formulário
  onSubmit() {
    if (this.registerEmployeeForm.valid) {
      console.log('Funcionário registrado:', this.registerEmployeeForm.value);
    }
  }
}
