import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface navLink {
  id: number,
  name: string,
  href: string
}

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.css',
})
export class NavLinksComponent {
  navLinks: navLink[] = [
    { id: 1, name: 'about', href: 'about' },
    { id: 2, name: 'portfolio', href: 'portfolio' },
    { id: 3, name: 'contact', href: 'contact' },
  ];
}
