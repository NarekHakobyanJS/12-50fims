import { configureStore } from "@reduxjs/toolkit";
import genersSlice from "./slices/genersSlice";
import filmsSlice from "./slices/filmsSlice";

const store = configureStore({
    reducer : {
        genersPage: genersSlice,
        filmsPage: filmsSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store