import css from './MovieList.module.css'

export const Movie = ({ movieInfo }) => {
    console.log(movieInfo);

    const {
        title,
        overview,
        poster_path,
        release_date,
        runtime,
        vote_average,
    } = movieInfo;



    return (
        <div className={css.movieContainer}>
            <div className={css.movieBG}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width='375' className={css.movieIMG} />
                <div className={css.wraper}>
                    <h1>{title}</h1>
                    <p className={css.description}>{overview}</p>
                    <p>Release date: {release_date}</p>
                    <p>Time: {runtime} min</p>
                    <p>Rating: {vote_average}</p>
                </div>
            </div>
        </div >
    )

}