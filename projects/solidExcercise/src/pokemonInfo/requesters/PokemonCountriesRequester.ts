/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
import { runQuery } from '../../db'
import { PokemonCountriesRepository } from '../repositories/PokemonCountriesRepository'

export class PokemonCountriesRequester implements PokemonCountriesRepository {

  public async getCountries(id: number, families_id: any) {

    const query = `SELECT z.country_code
    FROM family_zone fz 
    JOIN zone z ON fz.zone_id = z.id 
    WHERE fz.family_id IN (${families_id}) 
    GROUP BY z.country_code
    ORDER BY MAX(fz.probability) DESC LIMIT 3`
    const results = await runQuery(query).then(response => response.results)
    const countryCodes = results.map(result => result.country_code)

    return countryCodes
  }


}
