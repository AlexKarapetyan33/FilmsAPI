export type Genre = {
    id: number;
    name: string;
}

export type FilmList = {
    adult : boolean
    backdrop_path : string
    id : number
    title : string
    original_language : string
    original_title : string
    overview : string
    popularity : number
    poster_path: string
    release_date : string
    softcore : boolean
    video : boolean
    vote_average : number
    vote_count: number
}

export type GetFilmsResponseType = {
    page : number
    results : FilmList[]
    total_pages : number
    total_count : number
}