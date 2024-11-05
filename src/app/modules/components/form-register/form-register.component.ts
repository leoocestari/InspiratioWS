import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
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

  // Referência ao input de arquivo
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

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
      cell: [''],
      address: [''],
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

  // Função para abrir o seletor de arquivo
  onPhotoButtonClick(): void {
    this.fileInput.nativeElement.click(); // Aciona o input de arquivo oculto
  }

  // Função chamada ao selecionar um arquivo
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      console.log('Foto selecionada:', file);
      // Aqui você pode processar o arquivo, exibir uma prévia ou enviá-lo para o servidor
    }
  }
}
