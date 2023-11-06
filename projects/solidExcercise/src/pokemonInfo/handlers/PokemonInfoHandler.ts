import { PokemonInfoService } from '../services/PokemonInfoService'
import { mapToPokemonDto } from '../utils/mapToPokemonDataDto'
import any = jasmine.any;

export class PokemonInfoHandler extends PokemonInfoService {

  public async getFamily(id: number) {
    return this.getPokemonFamilyRepository().getFamilies(id)
  }

  public async getInfo(id: number) {
    const getAllResponse = await this.getPokemonRepository().getAll(id)
    const filterMovesInformation = this.filterMoves(getAllResponse)
    const baseInformation = this.getBaseInformation(filterMovesInformation)
    const families = await this.getFamily(id)

    return {
      families, baseInformation
    }
  }

  private filterMoves(pokemon: any) {
    const moves = pokemon.moves

    moves.sort((a: any, b: any) => b.version_group_details[0].level_learned_at - a.version_group_details[0].level_learned_at)

    const topMoves = moves.slice(0, 4)

    pokemon.moves = topMoves

    return pokemon
  }

  private getBaseInformation(pokemon: any) {
    return pokemon ? mapToPokemonDto(pokemon) : {}
  }
}
