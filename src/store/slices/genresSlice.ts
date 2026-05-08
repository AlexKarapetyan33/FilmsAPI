import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { genresAPI } from "../../api/generesApi";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Genre = {
    id: number;
    name: string;
}

type GenresSliceStateType = {
    genres: Genre[];
}

const initialState: GenresSliceStateType = {
    genres: []
}


const genresSlice = createSlice({
    name: "genresSlice",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getGenresThunk.fulfilled, (state, action: PayloadAction<Genre[]>) => {
            state.genres = action.payload
        })
    }
})

const getGenresThunk = createAsyncThunk<Genre[]>('getGenres', async () => {
    const response = await genresAPI.getGenres()
    return response.data.genres
})


export { getGenresThunk }
export default genresSlice.reducer