import { Component, HostListener, signal } from '@angular/core';
import { LeftSidebarComponent } from '../../modules/components/left-sidebar/left-sidebar.component';
import { MainComponent } from '../../main/main.component';

@Component({
  selector: 'app-authenticated-layout',
  standalone: true,
  imports: [
    LeftSidebarComponent,
    MainComponent,
  ],
  templateUrl: './authenticated-layout.component.html',
})
export class AuthenticatedLayoutComponent {

  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }

  ngOnInit(): void {
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }

}
