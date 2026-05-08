import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { filmsAPI } from "../../api/filmsApi";

const initialState : any = {
    films : []
}

const filmsSlice = createSlice({
    name : "filmsSlice",
    initialState,
    reducers : {

    },
    extraReducers(builder) {
        builder.addCase(getFilmsThunk.fulfilled, (state, action) => {
            state.results = action.payload
        })
    },
})

const getFilmsThunk = createAsyncThunk("getFilmsThunk", 
    async () => {
        const response = await filmsAPI.getFilms()
        return response.data.films
    }
)

export {getFilmsThunk}
export default filmsSlice.reducer