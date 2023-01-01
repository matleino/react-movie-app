import axios from "axios"

const baseUrl = 'http://localhost:5000/api/movies'

const getMovies = () => {
    const request =  axios.get(baseUrl)
    return request.then(response => response.data)
}

const createMovie = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const updateMovie = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const deleteMovie = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default {
    getMovies: getMovies,
    createMovie: createMovie,
    updateMovie: updateMovie,
    deleteMovie: deleteMovie
}