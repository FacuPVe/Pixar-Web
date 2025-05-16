import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  toggleMenu() {
    const headerNav = document.querySelector('.header-nav') as HTMLElement;
    headerNav.classList.toggle('open');
  }

  closeMenu() {
    const headerNav = document.querySelector('.header-nav') as HTMLElement;
    headerNav.classList.remove('open');
  }
}
