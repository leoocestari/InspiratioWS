import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-register-employee',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,  // Mudança aqui
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form-register-employee.component.html',
  styleUrls: ['./form-register-employee.component.scss']
})
export class FormRegisterEmployeeComponent implements OnInit {
  isExpanded: boolean = false; // Variável de controle
  registerEmployeeForm: FormGroup;

  // Referência ao input de arquivo
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    // Inicialização do formulário
    this.registerEmployeeForm = this.fb.group({
      name: [''],
      position: [''],
      birthDate: [''],
      email: [''],
      rg: [''],
      cpf: [''],
      phone: [''],
      cell: [''],
      address: [''],
    });
  }

  ngOnInit() {
    console.log('Estado inicial de isExpanded em FormRegisterEmployee:', this.isExpanded);
  }

  // Função para alternar entre expandido/retraído
  toggleForm() {
    this.isExpanded = !this.isExpanded;
    console.log('isExpanded após clique:', this.isExpanded);
    this.cdr.markForCheck(); // Marca para detecção de mudanças
  }

  // Lógica ao submeter o formulário
  onSubmit() {
    if (this.registerEmployeeForm.valid) {
      console.log('Funcionário registrado:', this.registerEmployeeForm.value);
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
