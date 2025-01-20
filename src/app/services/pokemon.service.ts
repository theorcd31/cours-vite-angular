import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
    async fetchPokemonList(): Promise<any> {
        try {
            const response = await fetch('https://tyradex.vercel.app/api/v1/gen/1');
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data;
          } catch (error) {
            console.error('Failed to fetch Pokémon data:', error);
            throw error;
          }
    }

  constructor() { }
}
