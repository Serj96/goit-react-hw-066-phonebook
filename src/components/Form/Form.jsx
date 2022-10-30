import {Component} from 'react';
import css from './Form.module.css';
// import { nanoid } from 'nanoid';





export default class Form extends Component {
    state = {
        contacts: [],
        name: "",
      }
    
      handleNameChange = e => {
        const { name, value } = e.currentTarget
        this.setState({
          [name]: value })
      }
    
      handleSubmit = e => {
        e.preventDefault();
    
        this.props.onSubmit(this.state);
        this.reset();
      }

      reset = () => {
        this.setState({name: "",});
      }

    render() {
        const { name } = this.state;
        const handleNameChange = this.handleNameChange;
        const handleSubmit = this.handleSubmit;
        return (
            <div className={css.wraper}>
            <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange} />
            <input type="submit" value="Add contact" />
            </form>
        </div>
        )
    }
    
}
