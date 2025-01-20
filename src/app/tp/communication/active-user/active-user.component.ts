import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-active-user',
  imports: [],
  templateUrl: './active-user.component.html',
  styleUrl: './active-user.component.css'
})
export class ActiveUserComponent {
@Input('user') user: {nom: string, age: string} | undefined;
}