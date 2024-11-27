import axios from "axios";
import { FilmType, GenerType } from "../types/types";

const instacne = axios.create({
    baseURL : process.env.REACT_APP_BASE_URL
})

type GetGenresType = {
    genres : Array<GenerType>
}

type GetFilmsByPageType = {
    results : Array<FilmType>
}



export const MovieAPI = {
    getGenres(){
        return instacne.get<GetGenresType>(`/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    },
    getFilmsByPage(page : number){
        return instacne.get<GetFilmsByPageType>(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
    },
    getFimlById(id: undefined | string) {
        return instacne.get<FilmType>(`/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    }
}


