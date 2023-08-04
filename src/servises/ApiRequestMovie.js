

const BASE_URL = 'https://api.themoviedb.org/3'
const KEY = 'ca91f553c1d1eddac924c37d8c93fceb'
// const accountId = '20227278'
// 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTkxZjU1M2MxZDFlZGRhYzkyNGMzN2Q4YzkzZmNlYiIsInN1YiI6IjY0YzVmNDdmNjNhNjk1MDBjOTQ4ZGZlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bhXVT3XcQAUtBxJsfAdOML4J1zmap1NhV_vyHMpPw6A'



export const ApiRequestMovie = () => {
    const data = fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY}`)
        .then(response => response.json())

    return data
}


export const getMovieinfo = (id) => {

    const movieInfo = fetch(`${BASE_URL}/movie/${id}?api_key=${KEY}`)
        .then(response => response.json())
    return movieInfo
}

export const searchMovieByKeyword = (keyword) => {
    const search = fetch(`${BASE_URL}/search/movie?query=${keyword}&api_key=${KEY}`)
        .then(response => response.json())
    return search;

}

export const getMovieCredits = (id) => {
    const credit = fetch(`${BASE_URL}/movie/${id}/credits?api_key=${KEY}`)
        .then(response => response.json())
    return credit

}

export const getMovieReviews = (id) => {
    const reviews = fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`)
        .then(response => response.json())
    return reviews
}


// export const getVideo = (id) => {

//     const video = fetch(`${BASE_URL}/movie/${id}/watch/providers?api_key=${KEY}`)
//         .then(response => response.json())
//     return video
// }