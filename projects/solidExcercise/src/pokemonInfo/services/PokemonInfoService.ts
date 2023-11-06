import { PokemonRepository } from '../repositories/PokemonRepository'
import { PokemonFamilyRepository } from '../repositories/PokemonFamilyRepository'

export abstract class PokemonInfoService {
  private readonly pokemonRepository: PokemonRepository
  private readonly pokemonFamilyRepository: PokemonFamilyRepository

  constructor(pokemonRepository: PokemonRepository, pokemonFamilyRepository: PokemonFamilyRepository) {
    this.pokemonRepository = pokemonRepository
    this.pokemonFamilyRepository = pokemonFamilyRepository
  }

  public getPokemonRepository() {
    return this.pokemonRepository
  }

  public getPokemonFamilyRepository() {
    return this.pokemonFamilyRepository
  }

  public abstract getInfo(id: number): any
  public abstract getFamily(id: number): any
}
