import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface navLink {
  id: number,
  name: string,
  href: string
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navLinks: navLink[] = [
    { id: 1, name: 'about', href: 'about' },
    { id: 2, name: 'portfolio', href: 'portfolio' },
    { id: 3, name: 'contact', href: 'contact' },
  ];
}
