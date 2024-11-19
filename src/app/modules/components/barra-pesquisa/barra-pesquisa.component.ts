import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-pesquisa',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './barra-pesquisa.component.html',
  styleUrl: './barra-pesquisa.component.scss'
})
export class BarraPesquisaComponent {
  searchTerm: string = '';

  onSearch() {
    // Lógica para pesquisar por nome ou CPF
    console.log('Procurando por:', this.searchTerm);
  }
}
