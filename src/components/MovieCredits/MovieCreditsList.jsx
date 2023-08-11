
import css from './MovieCredits.module.css'
import image from '../../default/image.jpeg'

const MovieCreditsList = ({ movieCast }) => {

    return movieCast.map(({ credit_id, character, name, profile_path }) => {

        return (
            <li key={credit_id} className={css.listItem}>
                <img src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : `${image}`} alt={name} className={css.creditsImg} />
                <p className={css.character}>{character}</p>
                <p className={css.name}>{name}</p>
            </li>
        )
    })

}

export default MovieCreditsList;