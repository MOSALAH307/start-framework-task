import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';
import { FormsModule } from '@angular/forms';
import { FormRowComponent } from '../form-row/form-row.component';

interface field {
  id: number;
  name: string;
  type: string;
  data: string;
}
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StarComponent, FormsModule, FormRowComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  userName: string = '';
  userAge: string = '';
  userEmail: string = '';
  userPassword: string = '';

  fields: field[] = [
    {
      id: 1,
      name: 'userName',
      type: 'string',
      data: this.userName,
    },
    {
      id: 2,
      name: 'userAge',
      type: 'number',
      data: this.userAge,
    },
    {
      id: 3,
      name: 'userEmail',
      type: 'email',
      data: this.userEmail,
    },
    {
      id: 4,
      name: 'userPassword',
      type: 'password',
      data: this.userPassword,
    },
  ];
}
