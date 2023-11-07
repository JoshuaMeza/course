import { PokemonFamilyService } from "../services/PokemonFamilyService";

export class PokemonFamilyHandler extends PokemonFamilyService {

    public async getFamily(id: number) {
        return this.getPokemonFamilyRepository().getFamilies(id)
    }
}