import { Component, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-data',
  imports: [FormsModule],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {
user = { nom: '', age: '' };
@Output() userCreated = new EventEmitter<{nom: string, age: string}>();

onAddUser(){
  this.userCreated.emit(this.user);
  console.log(this.userCreated);
}
}
