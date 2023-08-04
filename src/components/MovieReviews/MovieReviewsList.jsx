

export const MovieReviewsList = ({ reviews }) => {
    if (!reviews) return

    return reviews.map(({ author, content, id, updated_at, }) => {
        return (
            <>
                <li key={id}>
                    <h3>{author}</h3>
                    <p>{updated_at}</p>
                    <p>{content}</p>
                </li>
            </>
        )
    })
}