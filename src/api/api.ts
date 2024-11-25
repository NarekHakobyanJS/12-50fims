import axios from "axios";
import { GenerType } from "../types/types";

const instacne = axios.create({
    baseURL : process.env.REACT_APP_BASE_URL
})

type GetGenresType = {
    genres : Array<GenerType>
}
export const MovieAPI = {
    getGenres(){
        return instacne.get<GetGenresType>(`/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    },
    getFilmsByPage(){
        return instacne.get(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${1}`)
    }
}


