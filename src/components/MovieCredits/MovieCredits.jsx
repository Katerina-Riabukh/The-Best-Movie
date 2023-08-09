import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieCredits } from "servises/ApiRequestMovie"
import MovieCreditsList from "./MovieCreditsList"
import css from './MovieCredits.module.css'
import { Loader } from "components/Loader/Loader"



const MovieCredits = () => {

    const { MovieInfoId } = useParams()
    const [movieCast, setCast] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getMovieCredits(MovieInfoId).then(({ cast }) => {
            setCast(cast)
        }).catch()
            .finally(setIsLoading(false))
    }, [MovieInfoId])

    return (

        <section className={css.section}>
            <div className={css.creditsContainer}>
                {isLoading && <Loader />}
                <ul className={css.list}>
                    <MovieCreditsList movieCast={movieCast} />
                </ul>
            </div>
        </section>
    )

}

export default MovieCredits
