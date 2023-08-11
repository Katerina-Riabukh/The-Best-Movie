

import { CatalogMagic } from "components/Loader/Loader"
import { useEffect, useState } from "react"
import { Outlet, useSearchParams } from "react-router-dom"
import { searchMovieByKeyword } from "servises/ApiRequestMovie"
import css from '../components/styles/pages.module.css'
import MovieList from "components/MovieList/MovieList"
import { SubmitForm } from "SubmitForm/SubmitForm"

const MoviesSearch = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState([])


    const handleSubmitForm = (query) => {
        setSearchParams(`query=${query}`)
    }

    useEffect(() => {

        if (!searchParams.get('query')) return
        setIsLoading(true)
        searchMovieByKeyword(searchParams.get('query')).then(({ results }) => {

            setResponse(results)

        }).catch().finally(() => {
            setIsLoading(false)
        })

    }, [searchParams])

    return (
        <>
            <div className={css.container}>
                <SubmitForm handleSubmitForm={handleSubmitForm} />
                {isLoading && <CatalogMagic />}
                <MovieList response={response} />
                <Outlet />
            </div>
        </>
    )
}

export default MoviesSearch;
