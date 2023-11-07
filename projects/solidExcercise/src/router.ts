import { Router } from 'express'
import { PokemonController } from './pokemonInfo/controllers/PokemonController'
import { PokemonInfoHandler } from './pokemonInfo/handlers/PokemonInfoHandler'
import { PokemonRequester } from './pokemonInfo/requesters/PokemonRequester'
import { PokemonFamilyRequester } from './pokemonInfo/requesters/PokemonFamilyRequester'
import { PokemonCountriesRequester } from './pokemonInfo/requesters/PokemonCountriesRequester'
import { PokemonCountryHandler } from './pokemonInfo/handlers/PokemonCountryHandler'
import { PokemonFamilyHandler } from './pokemonInfo/handlers/PokemonFamilyHandler'

const InfoRouter = Router()
const pokemonFamilyRequester = new PokemonFamilyRequester()

InfoRouter.get('/info/:id', (httpRequest, httpResponse) => {
  new PokemonController(
    new PokemonInfoHandler(new PokemonRequester()),
    new PokemonCountryHandler(pokemonFamilyRequester, new PokemonCountriesRequester()),
    new PokemonFamilyHandler(pokemonFamilyRequester)
  )
    .getInfo(httpRequest.params)
    .then(response => httpResponse.send(response))
    .catch(e => console.log(e))
})


InfoRouter.get('*', (_, res) => res.status(404).send('Not found'))

export default InfoRouter
