import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieAPI } from "../../api/api";
import { FilmType } from "../../types/types";

export const getFilmsByPageThunk = createAsyncThunk('getFilmsByPageThunk', 
    async() => {
    const res = await MovieAPI.getFilmsByPage();
    return res.data.results
    }
)

type initState = {
    films: Array<FilmType>
}
const initialState : initState = {
    films: []
}

const filmsSlice = createSlice({
    name: 'filmsSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder)=> {
        builder.addCase(getFilmsByPageThunk.fulfilled, (state, action) => {
            state.films = action.payload
        })
    }
})

export default filmsSlice.reducer


    // page(pin):1
    // total_pages(pin):47312
    // total_results(pin):946237