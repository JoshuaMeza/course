import { runQuery } from '../../db'
import { PokemonFamilyRepository } from '../repositories/PokemonFamilyRepository'

export class PokemonFamilyRequester implements PokemonFamilyRepository {
    public async getFamilies(id: number) {
        return await this.getPokemonFamilies(id)
    }

    private async getPokemonFamilies(id: number) {
        const query = `SELECT f.* FROM family f JOIN family_pokemon fp ON f.id = fp.family_id WHERE fp.pokemon_id = ${id};`
        return await runQuery(query).then(response => response.results)
    }
}