import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieReviews } from "servises/ApiRequestMovie"
import MovieReviewsList from "./MovieReviewsList"
import css from './Moviereviews.module.css'
import { Loader } from "components/Loader/Loader"



const MovieReviews = () => {

    const { MovieInfoId } = useParams()
    const [reviews, setReviews] = useState()
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        getMovieReviews(MovieInfoId).then(({ results }) => {

            setReviews(results)
            if (results.length === 0) {
                setIsError(true)
            }
        }).catch()
            .finally(setIsLoading(false))
    }, [MovieInfoId])


    return (

        <section className={css.reviewsSection}>
            <div className={css.reviewsContainer}>
                <ul className={css.reviewsList}>
                    {isLoading && <Loader />}
                    {isError
                        ?
                        <p className={css.error}>Here is no reviews yet...</p>
                        :
                        <MovieReviewsList reviews={reviews} />
                    }
                </ul>
            </div>
        </section>

    )
}

export default MovieReviews;