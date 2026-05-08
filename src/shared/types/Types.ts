export type Genre = {
    id: number;
    name: string;
}

export type FilmList = {
    adult: boolean
    backdrop_path: string
    id: number
    title: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    softcore: boolean
    video: boolean
    vote_average: number
    vote_count: number
}

export type GetFilmsResponseType = {
    page: number
    results: FilmList[]
    total_pages: number
    total_count: number
}

type OneFilmGenres = {
    id: number
    name: string
}

type ProductionCompanies = {
    id: number
    logo_path: string
    name: string
    origin_country: string | null
}

type ProductionCountries = {
    iso_3166_1: string
    name: string
}

type SpokenLanuguages = {
    english_name: string
    iso_639_1: string
    name: string
}

export type GetOneFilmResponseType = {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: null
    budget: number
    genres: OneFilmGenres[]
    homepage: string
    id: number
    imdb_id: string
    origin_country: string[]
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: ProductionCompanies[],
    production_countries: ProductionCountries[],
    release_date: string
    revenue: number
    runtime: number
    softcore: false,
    spoken_languages: SpokenLanuguages[],
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}