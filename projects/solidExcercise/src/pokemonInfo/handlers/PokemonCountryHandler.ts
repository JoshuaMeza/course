import { PokemonCountryService } from '../services/PokemonCountryService'
export class PokemonCountryHandler extends PokemonCountryService {
  public async getCountries(id: number) {
    const families_id = await this.getFamily(id)

    return this.getPokemonCountriesRepository().getCountries(id, families_id)
  }

  public async getFamily(id: number) {
    return this.getPokemonFamilyRepository().getFamilies_id(id)
  }
}
