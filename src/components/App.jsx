import React, { useState, useEffect } from 'react';
import Section from './Section/Section';
import Form from './Form/Form.jsx';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const addContact = contactData => {
    const { name, number } = contactData;

    if (filterList(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    setContacts(contacts => [newContact, ...contacts]);
  };

  const filterList = contactName => {
    const lowercaseName = contactName.toLowerCase();
    return contacts.find(({ name }) =>
      name.toLowerCase().includes(lowercaseName)
    );
  };


  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

    return (
      <Section title="Phonebook">
        <Form onSubmit={addContact} />
        <Filter value={filter} changeFilter={changeFilter} />
        <ContactList
          title="Contacts"
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </Section>
    );
  }

