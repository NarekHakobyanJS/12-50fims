import axios from "axios";
import 'dotenv/config'
require('dotenv').config()

const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

const instacne = axios.create({
    baseURL : 'https://api.themoviedb.org/3'
})

export const MovieAPI = {
    getGenres(){
        return instacne.get(`/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`)
    }
}