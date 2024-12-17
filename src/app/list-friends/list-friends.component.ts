import { Component } from '@angular/core';
import { OneFriendComponent } from "./one-friend/one-friend.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent, FormsModule, CommonModule],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})
export class ListFriendsComponent {
  listFriendsAuth:boolean = false;
  listFriendsCreationStatus:string = 'Aucun ami...';
  listFriendsInputText:any = '';
  listFriendCreated:boolean = false;

  constructor(){
    setTimeout(() => {
      this.listFriendsAuth = true
    }, 3000);
  }

  onAddingFriends():void{
    this.listFriendsCreationStatus = "Ami ajouté !";
    this.listFriendCreated = true
    console.log(this.listFriendCreated)
  }

  onUpdateFriendsList(eventInput:Event):void{
    this.listFriendsInputText = (eventInput.target as HTMLInputElement).value;
  }
}
