import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {
@Input() colorString: string = 'white'
}
