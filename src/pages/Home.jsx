import { MovieList } from "components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { ApiRequestMovie } from "servises/ApiRequestMovie"
import css from '../components/styles/pages.module.css'

export const Home = () => {

    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
        ApiRequestMovie().then(({ results }) => {

            setTrendingMovies(results)
        });
    }, [])

    return (
        <section>
            <div className={css.container}>
                <ul className={css.movieList}>
                    <MovieList trendingMovies={trendingMovies} />
                </ul>
            </div>
        </section>
    )

};