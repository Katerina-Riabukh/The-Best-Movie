import { Movie } from "components/MovieList/Movie";
import css from '../components/styles/pages.module.css'

import { useEffect, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom";
import { getMovieinfo } from "servises/ApiRequestMovie";


export const MovieInfo = () => {

    const [movieInfo, setMovieinfo] = useState(null);
    const { MovieInfoId } = useParams()


    useEffect(() => {
        getMovieinfo(MovieInfoId).then((data) => {
            setMovieinfo(data)
        })

    }, [MovieInfoId]);

    if (!movieInfo) return;

    return (

        <section className={css.infoSection}>

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