import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { User } from 'firebase/auth'; // Assurez-vous d'importer le type User

@Component({
  selector: 'app-profile-user',
  imports: [],
  templateUrl:'./profile-user.component.html',
  styleUrl: './profile-user.component.css'
})
export class ProfileUserComponent implements OnInit {
  private auth: Auth = inject(Auth);
  user: User | null = null; // Variable pour stocker l'utilisateur

  ngOnInit() {
    this.auth.onAuthStateChanged((user) => {
      this.user = user; // Récupération de l'utilisateur
      console.log(user);
      console.log(user?.displayName);
    });
  }
}