import { ConfigAPI } from "./configApi";
import type { Genre } from "../shared/types/Types";

type getGenresResponseType = {
    genres: Genre[]
}

class GenresAPI extends ConfigAPI {

    public async getGenres() {
        return this.createBaseUrl().get<getGenresResponseType>(`/genre/movie/list?api_key=${this.apiKey}&language=en-US`)

    }
}

const genresAPI = new GenresAPI()

export { genresAPI }