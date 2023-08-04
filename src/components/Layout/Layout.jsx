// import { MenuToggle } from 'components/Toggle/Toggle';
import { NavLink, Outlet } from 'react-router-dom';
import { FaSistrix } from "react-icons/fa6";

import css from './Layout.module.css'

export const Layout = () => {

    return (
        <>
            <header className={css.section}>
                <div className={css.container}>
                    <NavLink to='/' className={css.navlink}>Home</NavLink>
                    <NavLink to='/MoviesSearch' className={css.navlink}>{FaSistrix}</NavLink>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}