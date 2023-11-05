/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { runQuery } from '../../db'
import { PokemonCountriesRepository } from '../repositories/PokemonCountriesRepository'

export class PokemonCountriesRequester implements PokemonCountriesRepository {

  public async getCountries(id: number) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const families_id = await this.getFamilies_id(id)
    const query = `SELECT z.country_code
    FROM family_zone fz 
    JOIN zone z ON fz.zone_id = z.id 
    WHERE fz.family_id IN (${families_id}) 
    GROUP BY z.country_code
    ORDER BY MAX(fz.probability) DESC LIMIT 3`
    /*  */

    const results = await runQuery(query).then(response => response.results)


    const countryCodes = results.map(result => result.country_code)

    return countryCodes
  }


  public async getFamilies_id(id: number) {
    const query = `SELECT family_id FROM pokedb.family_pokemon WHERE pokemon_id = ${id}`
    const results = await runQuery(query).then(response => response.results)

    // Utilizar map para extraer los valores de family_id
    const familyIds = results.map(result => result.family_id)

    return familyIds

  }


}
