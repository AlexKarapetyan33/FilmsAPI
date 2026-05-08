import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "../store/slices/genresSlice"
import fimlsSlice from "../store/slices/filmsSlice"


const store = configureStore({
    reducer : {
        genresData : genresSlice,
        filmsData : fimlsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export default store