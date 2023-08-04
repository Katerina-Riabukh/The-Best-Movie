import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieCredits } from "servises/ApiRequestMovie"
import { MovieCreditsList } from "./MovieCreditsList"
import css from './MovieCredits.module.css'



export const MovieCredits = () => {

    const { MovieInfoId } = useParams()
    const [movieCast, setCast] = useState([])

    useEffect(() => {
        getMovieCredits(MovieInfoId).then(({ cast }) => {
            setCast(cast)
        })
    }, [MovieInfoId])

    return (

        <section className={css.section}>
            <div className={css.creditsContainer}>
                <ul className={css.list}>
                    <MovieCreditsList movieCast={movieCast} />
                </ul>
            </div>
        </section>
    )

}

// { character, name, profile_path }