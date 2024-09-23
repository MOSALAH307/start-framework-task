import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

interface icons {
  id: number,
  name: string,
  class: string
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgClass],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  icons: icons[] = [
    {
      id: 1,
      name: 'facebook',
      class: 'fa-brands fa-facebook',
    },
    {
      id: 2,
      name: 'twitter',
      class: 'fa-brands fa-twitter',
    },
    {
      id: 3,
      name: 'linkedIn',
      class: 'fa-brands fa-linkedin-in',
    },
    {
      id: 4,
      name: 'web',
      class: 'fa-solid fa-globe',
    },
  ];
}
