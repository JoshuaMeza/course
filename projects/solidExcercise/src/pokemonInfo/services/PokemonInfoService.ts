import { PokemonRepository } from '../repositories/PokemonRepository'

export abstract class PokemonInfoService {
  private readonly pokemonRepository: PokemonRepository

  constructor(pokemonRepository: PokemonRepository) {
    this.pokemonRepository = pokemonRepository
  }

  public getPokemonRepository() {
    return this.pokemonRepository
  }

  public abstract getInfo(id: number): any
}
