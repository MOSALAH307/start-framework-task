import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";
import { ImageCardComponent } from "../image-card/image-card.component";

interface image {
  id: number,
  src: string,
  alt: string
}

@Component({
  selector: 'app-potfolio',
  standalone: true,
  imports: [StarComponent, ImageCardComponent],
  templateUrl: './potfolio.component.html',
  styleUrl: './potfolio.component.css',
})
export class PotfolioComponent {
  imgContainer: image[] = [
    {
      id: 1,
      src: 'https://routeegy.github.io/startFramework/assets/images/poert1.png',
      alt: 'house',
    },
    {
      id: 2,
      src: 'https://routeegy.github.io/startFramework/assets/images/port2.png',
      alt: 'cake',
    },
    {
      id: 3,
      src: 'https://routeegy.github.io/startFramework/assets/images/port3.png',
      alt: 'circus',
    },
  ];
}
