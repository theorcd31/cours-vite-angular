import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one-friend',
  imports: [CommonModule],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {
  oneFiendId:number =  Math.random();
  oneFriendName:string = 'Kylian Mbâclé';
  oneFriendAge:number = 26;
  oneFriendStatus:string = 'Offline';
  oneFriendBio:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc";
  oneFriendXss:string = "<script>alert('Hello, XSS')</script>";
  oneFriendImage:string = "https://picsum.photos/200"

  getOneFriendStatus() {
    return this.oneFriendStatus;
  }
  constructor(){
    this.oneFriendStatus = Math.random() < 0.5 ? 'OFF' : 'ON';
  }

  getColor(){
    if (this.oneFriendStatus == 'OFF') {
      return 'red'
    } else {
      return 'purple'
    }
  }
}
