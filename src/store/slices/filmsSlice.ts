import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieAPI } from "../../api/api";
import { FilmType } from "../../types/types";
import { stat } from "fs";

export const getFilmsByPageThunk = createAsyncThunk<Array<FilmType>, number>('getFilmsByPageThunk',
    async (page: number) => {
        const res = await MovieAPI.getFilmsByPage(page);
        return res.data.results
    }
)

export const getFilmByIdThunk = createAsyncThunk<FilmType, undefined | string>('getFilmByIdThunk',
    async (id) => {
        const res = await MovieAPI.getFimlById(id);
      
        return res.data
    }
)

type initState = {
    films: Array<FilmType>,
    page: number,
    film: FilmType | null
}
const initialState: initState = {
    films: [],
    page: 1,
    film: null
}

const filmsSlice = createSlice({
    name: 'filmsSlice',
    initialState,
    reducers: {
        changePage(state) {
            state.page = state.page + 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getFilmsByPageThunk.fulfilled, (state, action: PayloadAction<Array<FilmType>>) => {
            state.films = [...state.films, ...action.payload]
        })
        builder.addCase(getFilmByIdThunk.fulfilled, (state, action: PayloadAction<FilmType>) => {
            state.film = action.payload
        })
    }
})

export const { changePage } = filmsSlice.actions
export default filmsSlice.reducer



