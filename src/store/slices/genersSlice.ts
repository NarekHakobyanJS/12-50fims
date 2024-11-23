import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieAPI } from "../../api/api";

export const getGenersThunk = createAsyncThunk('getGenersThunk',
    async () => {
       const data = await MovieAPI.getGenres();
       return data.data.genres;
    }
)

const genersSlice = createSlice({
    name: 'genersSlice',
    initialState: {
        geners: []
    },
    reducers: {

    },
    extraReducers: (builder) =>{
        builder.addCase(getGenersThunk.fulfilled, (state, action) => {
            console.log(action.payload)
            state.geners = action.payload;
        })
    }
})


export default genersSlice.reducer;
