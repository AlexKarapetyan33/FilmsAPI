import { createSlice, createAsyncThunk, type PayloadAction} from "@reduxjs/toolkit";
import { filmsAPI } from "../../api/filmsApi";
import type { FilmList, GetFilmsResponseType } from "../../shared/types/Types";

type FilmsSliceStateType = {
    page : number
    results : FilmList[]
    total_pages : number
    total_results : number
}

const initialState : FilmsSliceStateType = {
    page : 1,
    results : [],
    total_pages : 0,
    total_results : 0
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
    },
})

const getFilmsThunk = createAsyncThunk<GetFilmsResponseType>("getFilmsThunk", 
    async () => {
        const response = await filmsAPI.getFilms()
        return response.data
    }
)

export {getFilmsThunk}
export default filmsSlice.reducer