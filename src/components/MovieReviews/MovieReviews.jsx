import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieReviews } from "servises/ApiRequestMovie"
import { MovieReviewsList } from "./MovieReviewsList"
import css from './Moviereviews.module.css'



export const MovieReviews = () => {

    const { MovieInfoId } = useParams()
    const [reviews, setReviews] = useState()

    useEffect(() => {

        getMovieReviews(MovieInfoId).then(({ results }) => {
            setReviews(results)

        })
    }, [MovieInfoId])


    return (

        <section className={css.reviewsSection}>
            <div className={css.reviewsContainer}>
                <ul className={css.reviewsList}>
                    <MovieReviewsList reviews={reviews} />
                </ul>
            </div>
        </section>

    )
}