import css from '../components/styles/pages.module.css'

export const SubmitForm = ({ handleSubmitForm }) => {

    const submitForm = (e) => {

        e.preventDefault()
        const query = e.target.elements.input.value
        if (!query) {
            alert('Please, make your request.')
            return
        }
        handleSubmitForm(query)

    }

    return (
        <form onSubmit={submitForm} className={css.form}>
            <button className={css.button}>Search</button>
            <input name='input' type="text" className={css.input} />
        </form>
    )
}