

import { CatalogMagic } from "components/Loader/Loader"
// import { SearchMovieList } from "components/SearchMovieList/SearchMovieList"
import { useEffect, useState } from "react"
import { Outlet, useLocation, useSearchParams } from "react-router-dom"
import { searchMovieByKeyword, searchMovieByKeyword1 } from "servises/ApiRequestMovie"
import css from '../components/styles/pages.module.css'
import { MovieList } from "components/MovieList/MovieList"

export const MoviesSearch = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [isLoading, setIsLoading] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [response, setResponse] = useState([])
    console.log(searchParams);

    const location = useLocation()
    const locationState = location.state?.from.from.search;

    const getQuery = (e) => {
        setSearchValue(e.target.value)
    }

    const hamdleSubnmitForm = (e) => {
        e.preventDefault()
        if (!searchValue) {
            alert('Please, make your request.')
            return
        }
        setIsLoading(true)
        searchMovieByKeyword(searchValue).then(({ results }) => {
            setResponse(results)
            setSearchParams(`query=${searchValue}`)
        }).catch().finally(() => {
            setIsLoading(false)
        })
    }

    useEffect(() => {

        if (!locationState) return
        searchMovieByKeyword1(locationState).then(({ results }) => {

            setResponse(results)
        })
    }, [locationState])

    return (
        <>
            <div className={css.container}>
                <form onSubmit={hamdleSubnmitForm} className={css.form}>
                    <button className={css.button}>Search</button>
                    <input type="text" onChange={getQuery} className={css.input} />
                </form>
                {isLoading && <CatalogMagic />}
                <MovieList response={response} searchValue={searchValue} />
                <Outlet />
            </div>
        </>
    )
}
