import { ConfigAPI } from "./configApi";


class FimlsAPI extends ConfigAPI {
   public async getFilms(){
    return  this.createBaseUrl().get(`/discover/movie?api_key=${this.apiKey}&language=en-US&page=${1}`)
   }
}

const filmsAPI = new FimlsAPI()

export {filmsAPI}
