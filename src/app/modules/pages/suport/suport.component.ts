import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-suport',
  standalone: true,
  imports: [],
  templateUrl: './suport.component.html',
  styleUrl: './suport.component.scss'
})
export class SuportComponent {
  supportForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.supportForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      department: ['', Validators.required],
      description: ['', Validators.required],
      errorText: ['']
    });
  }

  onSubmit() {
    if (this.supportForm.valid) {
      console.log('Formulário enviado com sucesso:', this.supportForm.value);
      // Adicione a lógica de envio aqui, como integração com uma API ou serviço.
    } else {
      console.log('Formulário inválido.');
    }
  }
}
