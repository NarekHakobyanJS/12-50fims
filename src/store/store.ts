import { configureStore } from "@reduxjs/toolkit";
import genersSlice from "./slices/genersSlice";

const store = configureStore({
    reducer : {
        genersPage: genersSlice
    }
})

export default store