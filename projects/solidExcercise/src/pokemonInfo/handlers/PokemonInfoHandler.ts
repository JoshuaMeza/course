import { PokemonInfoService } from '../services/PokemonInfoService'
import { mapToPokemonDto } from '../utils/mapToPokemonDataDto'

export class PokemonInfoHandler extends PokemonInfoService {

  public async getFamily(id: number) {
    return this.getPokemonFamilyRepository().getFamilies(id)
  }

  public async getInfo(id: number) {
    const getAllResponse = await this.getPokemonRepository().getAll(id)
    const baseInformation = this.getBaseInformation(getAllResponse)
    const family = await this.getFamily(id)

    return {
      family, baseInformation
    }
  }

  private getBaseInformation(pokemon: any) {
    return pokemon ? mapToPokemonDto(pokemon) : {}
  }
}
