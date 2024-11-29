import axios, {AxiosResponse} from "axios";
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

type MovieAPITypes = {
    getGenres : () => Promise<AxiosResponse<GetGenresType>>,
    getFilmsByPage : (page : number) => Promise<AxiosResponse<GetFilmsByPageType>>,
    getFimlById : (id : undefined | string) => Promise<AxiosResponse<FilmType>>,
    getSearchFilms : (text : string) => Promise<AxiosResponse<GetFilmsByPageType>>,
}


export const MovieAPI : MovieAPITypes = {
    getGenres(){
        return instacne.get<GetGenresType>(`/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    },
    getFilmsByPage(page : number){
        return instacne.get<GetFilmsByPageType>(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
    },
    getFimlById(id: undefined | string) {
        return instacne.get<FilmType>(`/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    },
    getSearchFilms(text : string){
        return instacne.get<GetFilmsByPageType>(`search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${text}`)
    }
}


