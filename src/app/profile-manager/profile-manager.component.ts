import { Component } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-profile-manager',
  imports: [FormsModule],
  templateUrl: './profile-manager.component.html',
  styleUrl: './profile-manager.component.css',
  providers: [ProfilesService]
})
export class ProfileManagerComponent {
  newName: string = '';
  newStatus: string = '';
  profile: any;

  constructor(private profilesService: ProfilesService) {}

  onAddProfile(): void {
    if (this.newName.trim() && this.newStatus.trim()) {
      this.profilesService.addProfile(this.newName, this.newStatus);
      console.log(`Profil ajouté : ${this.newName} - ${this.newStatus}`);
      this.newName = ''; // Réinitialise le champ après ajout
      this.newStatus = '';
    } else {
      console.error('Name and Status are required to add a profile.');
    }
  }

  onUpdateStatus(): void{

  }
}