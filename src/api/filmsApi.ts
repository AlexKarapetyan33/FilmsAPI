import { ConfigAPI } from "./configApi";
import type { GetFilmsResponseType } from "../shared/types/Types";

class FimlsAPI extends ConfigAPI {
   public async getFilms(lang : string){
    return  this.createBaseUrl().get<GetFilmsResponseType>(`/discover/movie?api_key=${this.apiKey}&language=${lang}&page=${1}`)
   }

   public async getOneFilm(id : string | undefined){
      return this.createBaseUrl().get(`/movie/${id}?api_key=${this.apiKey}&language=en-US`)
   }

   public async getSearchFilm(text : string){
      return this.createBaseUrl().get(`/search/movie?api_key=${this.apiKey}&query=${text}`)
   }

   public async getGenresFilm(genreId : any){
      return this.createBaseUrl().get(`/discover/movie?api_key=${this.apiKey}&language=en-US&with_genres=${genreId}&page=${1}`)
   }

}

const filmsAPI = new FimlsAPI()

export {filmsAPI}
