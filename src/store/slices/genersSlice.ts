import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetGenreFilmsType, MovieAPI } from "../../api/api";
import { FilmType, GenerType } from "../../types/types";

export const getGenersThunk = createAsyncThunk<Array<GenerType>>('getGenersThunk',
    async () => {
        const data = await MovieAPI.getGenres();
        return data.data.genres;
    }
)

export const getGenreFilmsThunk = createAsyncThunk<GetGenreFilmsType, {id: string | undefined, page: number}>(
    'getGenreFilmsThunk',
    async ({id, page}) => {
        const data = await MovieAPI.getGenreFilms(id, page);
        return data.data
    }
)

type GenresStateType = {
    geners: Array<GenerType>,
    genreFilms: Array<FilmType>,
    page: number,
    total_pages: number,
    total_results: number
}
const initialState: GenresStateType = {
    geners: [],
    genreFilms: [],
    page: 1,
    total_pages: 1,
    total_results: 1


}

const genersSlice = createSlice({
    name: 'genersSlice',
    initialState,
    reducers: {
        changePage(state, action){
            state.page = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getGenersThunk.pending, (state, action) => {
            
        })
        builder.addCase(getGenersThunk.fulfilled, (state, action: PayloadAction<Array<GenerType>>) => {
            state.geners = action.payload
        })
        builder.addCase(getGenreFilmsThunk.fulfilled, (state, action: PayloadAction<GetGenreFilmsType>) => {
            state.genreFilms = action.payload.results
            state.page = action.payload.page
            state.total_pages = action.payload.total_pages
        })
    }
})


export const {changePage} = genersSlice.actions;
export default genersSlice.reducer;
