import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavLinksComponent } from "../nav-links/nav-links.component";
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NavLinksComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuOpen: boolean = false

  toggleMenu: () => void = () => {
    this.isMenuOpen = !this.isMenuOpen
  }

  closeMenu: () => void = () => {
    this.isMenuOpen = false
  }
}
