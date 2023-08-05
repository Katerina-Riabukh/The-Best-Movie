import { Movie } from "components/MovieList/Movie";
import css from '../components/styles/pages.module.css'

import { useEffect, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom";
import { getMovieinfo } from "servises/ApiRequestMovie";
import { EventsLoader } from "components/Loader/Loader";
import { ButtonBack } from "components/ButtonBack/ButtonBack";


export const MovieInfo = () => {

    const [movieInfo, setMovieinfo] = useState(null);
    const { MovieInfoId } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [isButton, setIsButton] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        getMovieinfo(MovieInfoId).then((data) => {
            setMovieinfo(data)
        }).catch().finally(() => {
            setIsLoading(false)
            setIsButton(true)
        })

    }, [MovieInfoId]);

    if (!movieInfo) return;

    return (

        <section className={css.infoSection}>

            {isLoading && <EventsLoader />}
            {isButton && <ButtonBack />}
            <Movie movieInfo={movieInfo} />

            <div className={css.infoWraper}>
                <ul className={css.infoList}>
                    <li className={css.infoItem}>
                        <Link to={`MovieCredits`}>Credits</Link>
                    </li>
                    <li className={css.infoItem}>
                        <Link to={`MovieReviews`}>Reviews</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </section>
    )
}