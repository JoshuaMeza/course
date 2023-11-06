import { PokemonCountriesRepository } from '../repositories/PokemonCountriesRepository'
import { PokemonRepository } from '../repositories/PokemonRepository'
import { PokemonFamilyRepository } from '../repositories/PokemonFamilyRepository'

export abstract class PokemonInfoService {
  private readonly pokemonRepository: PokemonRepository
  private readonly pokemonFamilyRepository: PokemonFamilyRepository
  private readonly pokemonCountriesRepository: PokemonCountriesRepository

  constructor(pokemonRepository: PokemonRepository, pokemonFamilyRepository: PokemonFamilyRepository, 
    pokemonCountriesRepository: PokemonCountriesRepository) {
    this.pokemonRepository = pokemonRepository
    this.pokemonFamilyRepository = pokemonFamilyRepository
    this.pokemonCountriesRepository = pokemonCountriesRepository
  }

  public getPokemonRepository() {
    return this.pokemonRepository
  }

  public getPokemonFamilyRepository() {
    return this.pokemonFamilyRepository
  }

  public getPokemonCountriesRepository() {
    return this.pokemonCountriesRepository
  }

  public abstract getInfo(id: number): any
  public abstract getFamily(id: number): any
  public abstract getCountries(id: number): any
}
