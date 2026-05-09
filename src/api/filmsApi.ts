import { ConfigAPI } from "./configApi";
import type { GetFilmsResponseType } from "../shared/types/Types";

class FimlsAPI extends ConfigAPI {
   public async getFilms(){
    return  this.createBaseUrl().get<GetFilmsResponseType>(`/discover/movie?api_key=${this.apiKey}&language=en-US&page=${3}`)
   }

   public async getOneFilm(id : string | undefined){
      return this.createBaseUrl().get(`/movie/${id}?api_key=${this.apiKey}&language=en-US`)
   }

   public async getSearchFilm(text : string){
      return this.createBaseUrl().get(`/search/movie?api_key=${this.apiKey}&query=${text}`)
   }

}

const filmsAPI = new FimlsAPI()

export {filmsAPI}
