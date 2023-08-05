import { NavLink } from 'react-router-dom';
import css from './ButtonBack.module.css'
// import { FaAnglesLeft } from "react-icons/fa6";
import { SlActionUndo } from "react-icons/sl";

export const ButtonBack = () => {


    return (
        <NavLink to='' className={css.buttonBack}>{SlActionUndo}</NavLink>
    )
}

