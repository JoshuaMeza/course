import { PokemonCountriesRepository } from '../repositories/PokemonCountriesRepository'
import { PokemonRepository } from '../repositories/PokemonRepository'

export abstract class PokemonInfoService {
  private readonly pokemonRepository: PokemonRepository
  private readonly pokemonCountriesRepository: PokemonCountriesRepository

  constructor(pokemonRepository: PokemonRepository, pokemonCountriesRepository: PokemonCountriesRepository) {
    this.pokemonRepository = pokemonRepository
    this.pokemonCountriesRepository = pokemonCountriesRepository
  }

  public getPokemonRepository() {
    return this.pokemonRepository
  }

  public getPokemonCountriesRepository() {
    return this.pokemonCountriesRepository
  }

  public abstract getInfo(id: number): any
  public abstract getCountries(id: number): any
}
