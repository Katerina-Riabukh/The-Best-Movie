import { Link } from "react-router-dom"
import css from './SearchMovieList.module.css'

export const SearchMovieList = ({ response, searchValue }) => {

    return response.map(({ poster_path, title, id }) => {
        return (
            <Link key={id} to={`/MovieInfo/${id}_${title}`} className={css.searchMovieItem}>
                <li>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                    <p className={css.title}>{title}</p>
                </li>
            </Link>
        )

    })


}

