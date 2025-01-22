import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  dropdownOpen = false;
  isLoggedIn = false;
  currentUser: string | null = null;

  constructor(private router: Router, private auth: Auth) {
    // Vérifier si un utilisateur est connecté
    this.auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);

        this.currentUser = user.email; // Ou utilisez `user.displayName` si disponible
      } else {
        this.currentUser = null;
      }
    });
  }
  
  onNavigate(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    if (selectedValue) {
      this.router.navigateByUrl(selectedValue);
    }
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  async logOut(): Promise<void> {
    // console.log(this.currentUser);
    try {
      await signOut(this.auth);
      console.log('deconnexion reussie');
      this.currentUser = null; // Réinitialiser l'état utilisateur
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  }
}
