import { PokemonInfoService } from '../services/PokemonInfoService'
import { mapToPokemonDto } from '../utils/mapToPokemonDataDto'

export class PokemonInfoHandler extends PokemonInfoService {
  public async getInfo(id: number) {
    const getAllResponse = await this.getPokemonRepository().getAll(id)
    const baseInformation = this.getBaseInformation(getAllResponse)

    return {
      baseInformation
    }
  }

  private getBaseInformation(pokemon: any) {
    return pokemon ? mapToPokemonDto(pokemon) : {}
  }
}
