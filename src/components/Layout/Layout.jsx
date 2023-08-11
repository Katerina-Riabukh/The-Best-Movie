// import { MenuToggle } from 'components/Toggle/Toggle';
import { NavLink, Outlet } from 'react-router-dom';
import { FaSistrix } from "react-icons/fa6";
import css from './Layout.module.css'
import { Suspense } from 'react';


const Layout = () => {

    return (
        <>
            <header className={css.section}>
                <div className={css.container}>
                    <NavLink to='/' className={css.navlink}>Home</NavLink>
                    <NavLink to='/movies' className={css.navlink}>{FaSistrix}</NavLink>
                </div>
            </header>
            <main>
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
            <footer></footer>
        </>
    )
}

export default Layout;