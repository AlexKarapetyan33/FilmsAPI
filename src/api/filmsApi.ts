import { ConfigAPI } from "./configApi";
import type { GetFilmsResponseType } from "../shared/types/Types";

class FimlsAPI extends ConfigAPI {
   public async getFilms(){
    return  this.createBaseUrl().get<GetFilmsResponseType>(`/discover/movie?api_key=${this.apiKey}&language=en-US&page=${3}`)
   }

   public async getOneFilm(id : any){
      return this.createBaseUrl().get(`/movie/${id}?api_key=${this.apiKey}&language=en-US`)
   }

}

const filmsAPI = new FimlsAPI()

export {filmsAPI}
