import { createSlice } from "@reduxjs/toolkit";


type LangStateType = {
    lang : string
}

const initialState : LangStateType  = {
    lang : ""
}

const langChangeSlice = createSlice({
    name : "langChangeSlice",
    initialState,
    reducers : {
        setLang(state, action){
            state.lang = action.payload
        }
    }
    }
)

export default langChangeSlice.reducer
export const { setLang } = langChangeSlice.actions