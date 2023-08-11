import css from './MovieList.module.css'
import { Link, useLocation } from "react-router-dom";
import istockphoto from '../../default/istockphoto-610780794-612x612.jpg'


const MovieList = ({ response, searchValue }) => {

    const location = useLocation()

    return (

        <>
            < ul className={css.movieList} >
                {
                    response.map(({ poster_path, id, title, backdrop_path }) => {

                        return (<Link key={id} to={`/movies/${id}`} state={{ from: location }} className={css.movieItem}>
                            <li>
                                <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : `${istockphoto}`} alt={title} className={css.movieImage} />
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