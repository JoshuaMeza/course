import { runQuery } from '../../db'
import { PokemonFamilyRepository } from '../repositories/PokemonFamilyRepository'

export class PokemonFamilyRequester implements PokemonFamilyRepository {
  public async getFamilies(id: number) {
    return await this.getPokemonFamilies(id)
  }

  private async getPokemonFamilies(id: number) {
    const query = `SELECT f.* FROM family f JOIN family_pokemon fp ON f.id = fp.family_id WHERE fp.pokemon_id = ${id};`
    const results = await runQuery(query).then(response => response.results)
    const families = results.map(result => result.name)
    return families
  }

  public async getFamilies_id(id: number) {

    const query = `SELECT family_id FROM pokedb.family_pokemon WHERE pokemon_id = ${id}`
    const results = await runQuery(query).then(response => response.results)
    const familyIds = results.map(result => result.family_id)
    return familyIds
  }
}
