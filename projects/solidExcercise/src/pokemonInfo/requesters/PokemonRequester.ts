import { runQuery } from '../../db'
import { PokemonRepository } from '../repositories/PokemonRepository'
import { fetchJson } from '../utils/fetchJson'

export class PokemonRequester implements PokemonRepository {
  public async getAll(id: number) {
    const { pokemonCount } = await this.getPokemonCount(id)

    if (pokemonCount > 0) {
      return await this.getPokemonFromApi(id)
    }
    return {}
  }

  private async getPokemonCount(id: number) {
    const query = `SELECT COUNT(*) AS pokemonCount FROM pokedb.pokemon WHERE id = ${id}`
    return await runQuery(query).then(response => response.results[0])
  }

  private async getPokemonFromApi(id: number) {
    const path = `https://pokeapi.co/api/v2/pokemon/${id}`
    return await fetchJson(path)
  }
}
