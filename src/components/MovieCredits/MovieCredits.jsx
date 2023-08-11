import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieCredits } from "servises/ApiRequestMovie"
import MovieCreditsList from "./MovieCreditsList"
import css from './MovieCredits.module.css'
import { Loader } from "components/Loader/Loader"



const MovieCredits = () => {

    const { movieId } = useParams()
    const [movieCast, setCast] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getMovieCredits(movieId).then(({ cast }) => {
            setCast(cast)
            console.log(cast);
            if (cast.length === 0) {
                setIsError(true)
            }
        }).catch()
            .finally(setIsLoading(false))
    }, [movieId])

    return (

        <section className={css.section}>
            <div className={css.creditsContainer}>
                {isLoading && <Loader />}
                <ul className={css.list}>
                    {isError
                        ?
                        <p className={css.error}>Here is no information about casts...</p>
                        :
                        <MovieCreditsList movieCast={movieCast} />
                    }
                </ul>
            </div>
        </section>
    )

}

export default MovieCredits
