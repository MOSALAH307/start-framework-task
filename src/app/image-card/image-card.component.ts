import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css',
})
export class ImageCardComponent {
  openImg: boolean = false;

  @Input() src: string = '';
  @Input() alt: string = '';

  toggleImgModal: () => void = () => {
    this.openImg = !this.openImg
  }
}
