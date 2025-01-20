import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { NgIf,NgFor } from '@angular/common';

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-pokemon-list',
  imports: [NgIf,NgFor],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
  providers: [PokemonService]
})
export class PokemonListComponent {
  pokemons: Pokemon[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private pokemonService: PokemonService) {}
    ngOnInit(): void {
      this.loadPokemons();
  }

  async loadPokemons(): Promise<void> {
    try {
      const data = await this.pokemonService.fetchPokemonList();
      // Remplir le tableau avec les données API
      this.pokemons = data.map((pokemon: any,) => ({
        id: pokemon.pokedex_id,
        name: pokemon.name.fr,
        image: pokemon.sprites.regular
      }));
    } catch (error) {
      this.errorMessage = 'Failed to load Pokémon data.';
    } finally {
      this.isLoading = false;
    }
  }
}
