// import { useState } from 'react';
import css from './MovieCredits.module.css'

export const MovieCreditsList = ({ movieCast }) => {

    // const [isDefault, setDefault] = useState(false)
    // console.log(isDefault);

    //const defaultImg = '/src/default/images/unknown-person-with-paper-bag-on-hand-feel-confused-and-frustrated-man-or-woman-with-package-with-face-expression-feeling-doubts-illustration-free-vector.jpg'

    return movieCast.map(({ credit_id, character, name, profile_path }) => {
        // console.log(profile_path);

        return (

            <>
                <li key={credit_id} className={css.listItem}>
                    <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
                    <p className={css.character}>{character}</p>
                    <p className={css.name}>{name}</p>
                </li>
            </>
        )
    })

}