import { PokemonCountryService } from '../services/PokemonCountryService'
import { PokemonInfoService } from '../services/PokemonInfoService'
import { PokemonFamilyService } from '../services/PokemonFamilyService'

export class PokemonController {
  private readonly pokemonInfoService: PokemonInfoService
  private readonly pokemonCountryService: PokemonCountryService
  private readonly pokemonFamilyService: PokemonFamilyService


  constructor(pokemonInfoService: PokemonInfoService, pokemonCountryService: PokemonCountryService, pokemonFamilyService: PokemonFamilyService) {
    this.pokemonInfoService = pokemonInfoService
    this.pokemonCountryService = pokemonCountryService
    this.pokemonFamilyService = pokemonFamilyService
  }

  public async getInfo({ id }: any) {
    const pokemonId = parseInt(id)
    const baseInformation = await this.pokemonInfoService.getInfo(pokemonId)
    const countries = await this.pokemonCountryService.getCountries(pokemonId)
    const families = await this.pokemonFamilyService.getFamily(pokemonId)
    return { families, countries, baseInformation }
  }
}
