import { Component } from '@angular/core';

@Component({
  selector: 'app-one-friend',
  imports: [],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {
  oneFiendId:number =  Math.random();
  oneFriendName:string = 'Kylian Mbâclé';
  oneFriendAge:number = 26;
  oneFriendStatus:string = 'Offline';
  oneFriendBio:string = "Slt à tous les amis je suis un dictateur mais je me bave dessus quand je me rends dans des institutions comme le Real Madrid";
  oneFriendXss:string = "<script>alert('Hello, XSS')</script>";
  oneFriendImage:string = "https://picsum.photos/200"

  getOneFriendStatus() {
    return this.oneFriendStatus;
  }
}
