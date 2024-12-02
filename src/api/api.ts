import axios, {AxiosResponse} from "axios";
import { FilmType, GenerType } from "../types/types";

const instacne = axios.create({
    baseURL : process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGM4NjNiZjI5MWY1NjUxOTAyYmIzYWY4MjI1NmUwMiIsInN1YiI6IjYxNTYyZWY2ZTE4Yjk3MDA2MjkyODgzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h_pBSpt1JQsgAdYyYZbt6dHDzEmGljF11e4m1MO-CHg",
    },
})

type GetGenresType = {
    genres : Array<GenerType>
}

type GetFilmsByPageType = {
    results : Array<FilmType>
    page?: number
}

export type GetGenreFilmsType = {
    page: number,
    results: Array<FilmType>,
    total_pages: number,
    total_results: number
}

type MovieAPITypes = {
    getGenres : () => Promise<AxiosResponse<GetGenresType>>,
    getFilmsByPage : (page : number) => Promise<AxiosResponse<GetFilmsByPageType>>,
    getFimlById : (id : undefined | string) => Promise<AxiosResponse<FilmType>>,
    getSearchFilms : (text : string) => Promise<AxiosResponse<GetFilmsByPageType>>,
    getGenreFilms: (id: string | undefined, page: number) => Promise<AxiosResponse<GetGenreFilmsType>>,
    getTrailer:(movieeId: string | undefined) => Promise<AxiosResponse<any>>
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
    },
    getGenreFilms(genreId: string | undefined, page: number = 1) {
        return instacne.get<GetGenreFilmsType>(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=${genreId}&page=${page}`)
    },
    getTrailer(movieId : string | undefined){
        return instacne.get(`/movie/${movieId}/videos?language=en-US`)
    }
}
