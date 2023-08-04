import css from './MovieCredits.module.css'

export const MovieCreditsList = ({ movieCast }) => {
    return movieCast.map(({ credit_id, character, name, profile_path }) => {

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