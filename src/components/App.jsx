
import React,{Component} from 'react';
import Section from './Section/Section';
import Form from './Form/Form.jsx';
import Contact from './Contact/Contact';

export class App extends Component {

formSubmitHandler = data => {
  console.log(data);
};
  
  render() {
    return (
      <Section title="Phonebook"  >
        <Form  onSubmit={this.formSubmitHandler}/>
         <Contact title="Contacts" />
      </Section>
    )
  }
  
};
