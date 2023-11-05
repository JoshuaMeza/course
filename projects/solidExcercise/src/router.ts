import { Router } from 'express'
import { PokemonController } from './pokemonInfo/controllers/PokemonController'
import { PokemonInfoHandler } from './pokemonInfo/handlers/PokemonInfoHandler'
import { PokemonRequester } from './pokemonInfo/requesters/PokemonRequester'
import { PokemonCountriesRequester } from './pokemonInfo/requesters/PokemonCountriesRequester'

const InfoRouter = Router()

InfoRouter.get('/info/:id', (httpRequest, httpResponse) => {
  new PokemonController(new PokemonInfoHandler(new PokemonRequester(), new PokemonCountriesRequester()))
    .getInfo(httpRequest.params)
    .then(response => httpResponse.send(response))
    .catch(e => console.log(e))
})


InfoRouter.get('*', (_, res) => res.status(404).send('Not found'))

export default InfoRouter
