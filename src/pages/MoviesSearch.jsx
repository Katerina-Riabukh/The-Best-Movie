

import { CatalogMagic } from "components/Loader/Loader"
import { SearchMovieList } from "components/SearchMovieList/SearchMovieList"
import { useState } from "react"
import { Outlet, useSearchParams } from "react-router-dom"
import { searchMovieByKeyword } from "servises/ApiRequestMovie"
import css from '../components/styles/pages.module.css'





export const MoviesSearch = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [isLoading, setIsLoading] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [response, setResponse] = useState([])

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

    // useEffect(() => {
    //     setIsLoading(true)
    //     searchMovieByKeyword(searchValue).then(({ results }) => {
    //         setResponse(results)
    //         setSearchParams(`query=${searchValue}`)
    //     }).catch().finally(() => {
    //         setIsLoading(false)
    //     })
    // }, [searchValue, setSearchParams])


    return (
        <>
            <div className={css.container}>
                <form onSubmit={hamdleSubnmitForm} className={css.form}>

                    <button className={css.button}>Search</button>
                    <input type="text" onChange={getQuery} className={css.input} />


                </form>
                <ul className={css.searchList}>
                    <SearchMovieList response={response} searchValue={searchValue} />
                </ul>

                {isLoading && <CatalogMagic />}
                <Outlet />
            </div>
        </>
    )
}
