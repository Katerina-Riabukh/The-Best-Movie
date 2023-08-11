import { Movie } from "components/MovieList/Movie";
import css from '../components/styles/pages.module.css'
import { Loader } from 'components/Loader/Loader';
import { Suspense, useEffect, useRef, useState } from "react"
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieinfo } from "servises/ApiRequestMovie";
import { EventsLoader } from "components/Loader/Loader";

const MovieInfo = () => {

    const [movieInfo, setMovieinfo] = useState(null);
    const { movieId } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [isButton, setIsButton] = useState(false)
    const location = useLocation()
    const backLinkLocationRef = useRef(location.state?.from ?? '/')

    useEffect(() => {
        setIsLoading(true)
        getMovieinfo(movieId).then((data) => {
            setMovieinfo(data)
        }).catch()
            .finally(() => {
                setIsLoading(false)
                setIsButton(true)
            })

    }, [movieId]);

    if (!movieInfo) return;

    return (

        <section className={css.infoSection}>
            {isButton && <NavLink className={css.buttonBack} to={backLinkLocationRef.current} >
                Go back
            </NavLink>}
            {isLoading && <EventsLoader />}
            <Movie movieInfo={movieInfo} />
            <div className={css.infoWraper}>
                <ul className={css.infoList}>
                    <li id="Credits" className={css.infoItem}>
                        <Link to={`credits`}>Credits</Link>
                    </li>
                    <li id="Reviews" className={css.infoItem}>
                        <Link to={`reviews`} >Reviews</Link>
                    </li>
                </ul>
            </div>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </section>
    )
}

export default MovieInfo;