import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import css from './ButtonBack.module.css'

// import { FaAnglesLeft } from "react-icons/fa6";
import { SlActionUndo } from "react-icons/sl";

export const ButtonBack = () => {

    // const navigate = useNavigate()
    // const handleGoBack = () => {

    //     navigate(`/`);
    // }
    return (
        <NavLink to='/' className={css.buttonBack}>{SlActionUndo}</NavLink>
        // <button onClick={handleGoBack} className={css.buttonBack}>Go back</button>
    )
}

