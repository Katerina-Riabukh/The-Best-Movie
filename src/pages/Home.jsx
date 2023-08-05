import { MovieList } from "components/MovieList/MovieList";
import { CatalogMagic } from "components/Loader/Loader"
import { useEffect, useState } from "react";
import { ApiRequestMovie } from "servises/ApiRequestMovie"
import css from '../components/styles/pages.module.css'

export const Home = () => {

    const [trendingMovies, setTrendingMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        ApiRequestMovie().then(({ results }) => {

            setTrendingMovies(results)
        }).catch().finally(() => {
            setIsLoading(false)
        })
    }, [])

    return (
        <section>
            <div className={css.container}>
                <ul className={css.movieList}>
                    {isLoading && <CatalogMagic />}
                    <MovieList trendingMovies={trendingMovies} />
                </ul>
            </div>
        </section>
    )

};