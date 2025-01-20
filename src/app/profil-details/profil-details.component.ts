import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profil-details',
  imports: [RouterLink],
  // templateUrl: './profil-details.component.html',
  template: `
  <div class="container mx-auto mt-8">
  <h2 class="text-green-600 text-2xl font-bold mb-4">Détail du Profil</h2>
  <p class="text-gray-700 mb-4">
    <strong class="font-semibold">Profil ID :</strong> {{ profileDetailsId }}
  </p>
  <a
    routerLink="/app-profiles-manager"
    class="inline-block bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
  >
    Retour à la liste
  </a>
</div>

`,
  styleUrl: './profil-details.component.css'
})

export class ProfilDetailsComponent {
  profileDetailsId: string | null = '';

  // constructor(private route: ActivatedRoute) {
  //   // Récupération du paramètre "id" dans l'URL (allez voir paramMap)
  //   this.profileDetailsId = ?????;
  // }
}