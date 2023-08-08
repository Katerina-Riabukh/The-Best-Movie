import { Movie } from "components/MovieList/Movie";
import css from '../components/styles/pages.module.css'

import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieinfo } from "servises/ApiRequestMovie";
import { EventsLoader } from "components/Loader/Loader";
// import { ButtonBack } from "components/ButtonBack/ButtonBack";



export const MovieInfo = () => {

    const [movieInfo, setMovieinfo] = useState(null);
    const { MovieInfoId } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [isButton, setIsButton] = useState(false)

    const location = useLocation()
    console.log(`MovieInfo: ${location}`);
    console.log(location.state);

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
            {/* {isButton && <ButtonBack />} */}
            {isButton && <NavLink className={css.buttonBack} to={location.state?.from} state={{ from: location.state }} >
                Go back
            </NavLink>}

            <Movie movieInfo={movieInfo} />

            <div className={css.infoWraper}>
                <ul className={css.infoList}>
                    <li className={css.infoItem}>
                        <Link to={`MovieCredits`} state={{ from: location.state }}>Credits</Link>
                    </li>
                    <li className={css.infoItem}>
                        <Link to={`MovieReviews`} >Reviews</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </section>
    )
}