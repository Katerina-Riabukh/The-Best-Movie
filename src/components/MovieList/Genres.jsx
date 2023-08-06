
export const Genres = ({ genres }) => {
    return genres.map((genre) => {
        return (<li key={genre.id}>{genre.name}</li>)
    })

}