import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-row',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-row.component.html',
  styleUrl: './form-row.component.css',
})
export class FormRowComponent {
  @Input() labelString: string = '';
  @Input() data: string = '';
  @Input() type: string = 'text';
}
