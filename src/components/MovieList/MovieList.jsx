import css from './MovieList.module.css'
import { Link, useLocation } from "react-router-dom";

export const MovieList = ({ response, searchValue }) => {

    const location = useLocation()

    return (

        <>
            < ul className={css.movieList} >
                {
                    response.map(({ poster_path, id, title }) => {

                        return (<Link key={id} to={`/MovieInfo/${id}_${title}`} state={{ from: location }} className={css.movieItem}>
                            <li>
                                <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : '/src/default/images/donnie-rosie-taO2fC7sxDU-unsplash.jpg'} alt={title} />
                                <p className={css.title}>{title}</p>
                            </li>
                        </Link>)

                    })
                }
            </ul >
        </>
    )


}