import css from './MovieList.module.css'
import { Link } from "react-router-dom";

export const MovieList = ({ trendingMovies }) => {

    return trendingMovies.map(({ poster_path, id, title, backdrop_path }) => {

        return (
            <Link key={id} to={`/MovieInfo/${id}`} className={css.movieItem}>
                <li>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                    <p>{title}</p>
                </li>
            </Link>
        )
    });
}