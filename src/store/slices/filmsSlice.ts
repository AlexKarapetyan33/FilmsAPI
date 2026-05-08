import { createSlice, createAsyncThunk, type PayloadAction} from "@reduxjs/toolkit";
import { filmsAPI } from "../../api/filmsApi";
import type { FilmList, GetFilmsResponseType, GetOneFilmResponseType } from "../../shared/types/Types";

type FilmsSliceStateType = {
    page : number
    results : FilmList[]
    total_pages : number
    total_results : number
    result : GetOneFilmResponseType | null
}

const initialState : FilmsSliceStateType = {
    page : 1,
    results : [],
    total_pages : 0,
    total_results : 0,
    result : null
}


const filmsSlice = createSlice({
    name : "filmsSlice",
    initialState,
    reducers : {

    },
    extraReducers(builder) {
        builder.addCase(getFilmsThunk.fulfilled, (state, action : PayloadAction<GetFilmsResponseType>) => {
            state.results = action.payload.results
        })
        builder.addCase(getOneFilmThunk.fulfilled, (state, action) => {
            state.result = action.payload
        })
    },
})

const getFilmsThunk = createAsyncThunk<GetFilmsResponseType>("getFilmsThunk", 
    async () => {
        const response = await filmsAPI.getFilms()
        return response.data
    }
)

const getOneFilmThunk = createAsyncThunk("getOneFilmThunk", 
    async (id : any) => {
        const response = await filmsAPI.getOneFilm(id)
        return response.data
    }
)

export {getFilmsThunk, getOneFilmThunk}
export default filmsSlice.reducer