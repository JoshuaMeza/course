import { PokemonCountriesRepository } from '../repositories/PokemonCountriesRepository'
import { PokemonFamilyRepository } from '../repositories/PokemonFamilyRepository'
export abstract class PokemonCountryService {
  private readonly pokemonCountriesRepository: PokemonCountriesRepository
  private readonly pokemonFamilyRepository: PokemonFamilyRepository

  constructor(pokemonFamilyRepository: PokemonFamilyRepository,
    pokemonCountriesRepository: PokemonCountriesRepository) {
    this.pokemonFamilyRepository = pokemonFamilyRepository
    this.pokemonCountriesRepository = pokemonCountriesRepository
  }

  public getPokemonFamilyRepository() {
    return this.pokemonFamilyRepository
  }

  public getPokemonCountriesRepository() {
    return this.pokemonCountriesRepository
  }

  public abstract getCountries(id: number): any
  public abstract getFamily(id: number): any
}
