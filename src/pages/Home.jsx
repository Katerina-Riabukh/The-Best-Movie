import { MovieList } from "components/MovieList/MovieList";
import { CatalogMagic } from "components/Loader/Loader"
import { useEffect, useState } from "react";
import { ApiRequestMovie } from "servises/ApiRequestMovie"
import css from '../components/styles/pages.module.css'

export const Home = () => {

    const [response, setResponse] = useState([])
    const [isLoading, setIsLoading] = useState(false)




    useEffect(() => {
        setIsLoading(true)
        ApiRequestMovie().then(({ results }) => {

            setResponse(results)
        }).catch().finally(() => {
            setIsLoading(false)
        })
    }, [])

    return (
        <section>
            <div className={css.container}>
                {isLoading && <CatalogMagic />}
                <MovieList response={response} />
            </div>
        </section>
    )

};