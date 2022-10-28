
import css from './Form.module.css'


const Form = () => {
    return (
        <div className={css.wraper}>
        <form action="">
        <label for="fname">Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
        <input type="submit" value="Add contact" />
        </form>
    </div>
    )
}



export default Form;