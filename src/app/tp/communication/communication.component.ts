import { Component } from '@angular/core';
import { ActiveUserComponent } from "./active-user/active-user.component";
import { UserDataComponent } from "./user-data/user-data.component";

@Component({
  selector: 'app-communication',
  imports: [ActiveUserComponent, UserDataComponent],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.css'
})
export class CommunicationComponent {
handleUserUpdated(userEvent: { nom: string, age: string }){
  this.user = {nom: userEvent.nom, age: userEvent.age};
}
user = {nom: 'Jean', age: '30'};
}
