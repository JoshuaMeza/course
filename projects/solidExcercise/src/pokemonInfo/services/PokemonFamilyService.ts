import { PokemonFamilyRepository } from "../repositories/PokemonFamilyRepository";

export abstract class PokemonFamilyService {
    private readonly pokemonFamilyRepository: PokemonFamilyRepository

    constructor(pokemonFamilyRepository: PokemonFamilyRepository){
        this.pokemonFamilyRepository = pokemonFamilyRepository
    }

    public getPokemonFamilyRepository() {
        return this.pokemonFamilyRepository
    }

    public abstract getFamily(id: number): any
}