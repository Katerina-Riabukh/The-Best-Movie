
import { useLocation, useNavigate } from 'react-router-dom'
import css from './ButtonBack.module.css'
// import { useState } from 'react'
// import { searchMovieByKeyword } from 'servises/ApiRequestMovie'

// import { SlActionUndo } from "react-icons/sl";

export const ButtonBack = () => {

    const location = useLocation()
    console.log(location);
    // const [response, setResponse] = useState([])
    // const [searchParams, setSearchParams] = useSearchParams()
    // const query = localStorage.getItem('query')
    const navigate = useNavigate();
    // console.log(query);
    // console.log(response);
    // console.log(searchParams);
    // const navigate = useNavigate()


    const handleGoBack = () => {
        navigate('/MoviesSearch');
        navigate('/');

    }

    return (
        // <NavLink to='/MovieSearch' className={css.buttonBack}>{SlActionUndo}</NavLink>
        <button onClick={handleGoBack} className={css.buttonBack}>Go back</button>

    )
}

/**if(location.search = ''){
<Link to="home"></link>
} else{
    <Link to="/MovieSearch"/>
}
*/


