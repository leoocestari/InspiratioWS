import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent {
  isExpanded: boolean = false; // Variável de controle
  registerPacientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicialização do formulário
    this.registerPacientForm = this.fb.group({
      name: [''],
      lastname: [''],
      birthDate: [''],
      email: [''],
      rg: [''],
      cpf: [''],
      phone: [''],
      cell:  [''],
      address: [''],
      // Adicione mais campos conforme necessário
    });
  }

  // Função para alternar entre expandido/retraído
  toggleForm() {
    this.isExpanded = !this.isExpanded;
  }

  // Lógica ao submeter o formulário
  onSubmit() {
    if (this.registerPacientForm.valid) {
      console.log('Paciente registrado:', this.registerPacientForm.value);
    }
  }
}
