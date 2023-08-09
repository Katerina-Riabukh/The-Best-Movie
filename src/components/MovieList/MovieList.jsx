import css from './MovieList.module.css'
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ response, searchValue }) => {
    const location = useLocation()

    return (

        <>
            < ul className={css.movieList} >
                {
                    response.map(({ poster_path, id, title, backdrop_path }) => {

                        return (<Link key={id} to={`/MovieInfo/${id}_${title}`} state={{ from: location }} className={css.movieItem}>
                            <li>
                                <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : '/src/default/images/cinema.jpg'} alt={title} />
                                <p className={css.title}>{title}</p>
                            </li>
                        </Link>)

                    })
                }
            </ul >
        </>
    )


}

export default MovieList;