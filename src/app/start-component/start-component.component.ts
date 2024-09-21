import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-start-component',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './start-component.component.html',
  styleUrl: './start-component.component.css'
})
export class StartComponent {

}
