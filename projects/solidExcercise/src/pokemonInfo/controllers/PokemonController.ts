import { PokemonInfoService } from '../services/PokemonInfoService'

export class PokemonController {
  private readonly pokemonInfoService: PokemonInfoService

  constructor(pokemonInfoService: PokemonInfoService) {
    this.pokemonInfoService = pokemonInfoService
  }

  public async getInfo({ id }: any) {
    const pokemonId = parseInt(id)
    const pokemonInfo = await this.pokemonInfoService.getInfo(pokemonId)
    return pokemonInfo
  }
}
