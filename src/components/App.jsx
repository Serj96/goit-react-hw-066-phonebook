
import {Component} from 'react';
import Section from './Section/Section';
import Form from './Form/Form.jsx';

export class App extends Component {

  state = {
    contacts: [],
    name: ''
  }
  
  render() {
    return (
      <Section title="Phonebook">
        <Form/>
      </Section>
    )
  }
  
};
