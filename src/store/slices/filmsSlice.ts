import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieAPI } from "../../api/api";
import { FilmType } from "../../types/types";


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

export const getSearchFilmsThunk = createAsyncThunk<Array<FilmType>, string>('getSearchFilms',
    async (text) => {
        const data = await MovieAPI.getSearchFilms(text)
    
        return data.data.results
    }
)

type initState = {
    films: Array<FilmType>,
    page: number,
    film: FilmType | null,
    searchText : string,
    searchFilms : Array<FilmType>
}

const initialState: initState = {
    films: [],
    page: 1,
    film: null,
    searchText : "",
    searchFilms : []
}

const filmsSlice = createSlice({
    name: 'filmsSlice',
    initialState,
    reducers: {
        changePage(state) {
            state.page = state.page + 1
        },
        changeSearchText(state, action) {
            state.searchText = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getFilmsByPageThunk.fulfilled, (state, action: PayloadAction<Array<FilmType>>) => {
            state.films = [...state.films, ...action.payload]
        })
        builder.addCase(getFilmByIdThunk.fulfilled, (state, action: PayloadAction<FilmType>) => {
            state.film = action.payload
        })
        builder.addCase(getSearchFilmsThunk.fulfilled, (state, action : PayloadAction<Array<FilmType>>) => {
            state.searchFilms = action.payload
        })
    }
})

export const { changePage, changeSearchText } = filmsSlice.actions
export default filmsSlice.reducer



