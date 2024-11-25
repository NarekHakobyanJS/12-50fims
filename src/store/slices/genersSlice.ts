import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieAPI } from "../../api/api";
import { GenerType } from "../../types/types";

export const getGenersThunk = createAsyncThunk<Array<GenerType>>('getGenersThunk',
    async () => {
        const data = await MovieAPI.getGenres();
        return data.data.genres;
    }
)

type GenresStateType = {
    geners: Array<GenerType>
}
const initialState: GenresStateType = {
    geners: []
}

const genersSlice = createSlice({
    name: 'genersSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getGenersThunk.pending, (state, action) => {
            
        })
        builder.addCase(getGenersThunk.fulfilled, (state, action: PayloadAction<Array<GenerType>>) => {
            state.geners = action.payload
        })
    }
})


export default genersSlice.reducer;
