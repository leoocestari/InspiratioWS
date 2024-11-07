import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss',
})
export class LeftSidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink: 'home',
      icon: 'fal fa-home',
      label: 'Inicio',
    },
    {
      routeLink: 'agendamentos',
      icon: 'fal fa-calendar',
      label: 'Agendamentos',
    },
    {
      routeLink: 'medical-report',
      icon: 'fal fa-analytics',
      label: 'Relatorio de Paciente',
    },
    {
      routeLink: 'pacient-report',
      icon: 'fal fa-analytics',
      label: 'Relatorio de Paciente',
    },
    {
      routeLink: 'register-pacients',
      icon: 'fal fa-user',
      label: 'Cadastros',
    },
    {
      routeLink: 'consultar',
      icon: 'fal fa-search',
      label: 'Consultas',
    },
    {
      routeLink: 'suport',
      icon: 'fal fa-cog',
      label: 'Suporte',
    },
    
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
