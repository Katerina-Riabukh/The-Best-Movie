import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieReviews } from "servises/ApiRequestMovie"
import { MovieReviewsList } from "./MovieReviewsList"



export const MovieReviews = () => {

    const { MovieInfoId } = useParams()
    const [reviews, setReviews] = useState()

    useEffect(() => {

        getMovieReviews(MovieInfoId).then(({ results }) => {
            setReviews(results)

        })
    }, [MovieInfoId])


    return (

        <section>
            <div>
                <ul>
                    <MovieReviewsList reviews={reviews} />
                </ul>
            </div>
        </section>

    )
}