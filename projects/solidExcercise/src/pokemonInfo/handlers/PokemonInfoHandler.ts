import { PokemonInfoService } from '../services/PokemonInfoService'
import { mapToPokemonDto } from '../utils/mapToPokemonDataDto'

export class PokemonInfoHandler extends PokemonInfoService {
  public async getCountries(id: number) {
    return this.getPokemonCountriesRepository().getCountries(id)
  }

  public async getInfo(id: number) {
    const getAllResponse = await this.getPokemonRepository().getAll(id)
    const baseInformation = this.getBaseInformation(getAllResponse)
    const countries = await this.getCountries(id)

    return {
      countries, baseInformation
    }
  }

  private getBaseInformation(pokemon: any) {
    return pokemon ? mapToPokemonDto(pokemon) : {}
  }
}
