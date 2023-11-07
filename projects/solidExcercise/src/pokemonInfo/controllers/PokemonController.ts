import { PokemonCountryService } from '../services/PokemonCountryService'
import { PokemonInfoService } from '../services/PokemonInfoService'

export class PokemonController {
  private readonly pokemonInfoService: PokemonInfoService
  private readonly pokemonCountryService: PokemonCountryService


  constructor(pokemonInfoService: PokemonInfoService, pokemonCountryService: PokemonCountryService) {
    this.pokemonInfoService = pokemonInfoService
    this.pokemonCountryService = pokemonCountryService
  }

  public async getInfo({ id }: any) {
    const pokemonId = parseInt(id)
    const baseInformation = await this.pokemonInfoService.getInfo(pokemonId)
    const countries = await this.pokemonCountryService.getCountries(pokemonId)
    return { countries, baseInformation }
  }
}
