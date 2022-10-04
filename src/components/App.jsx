import { useState, useEffect } from 'react';
import Form from '../components/Form';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/slice';

import s from './App.module.css';

// Імпортуємо хук
import { useDispatch, useSelector } from 'react-redux';

// Отримуємо необхідну частину стану

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) || initialState;
  });
  // const [filter, setFilter] = useState('');

  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // const formSubmitHandler = contact => {
  //   const filterName = contact.name.toLowerCase();
  //   if (contacts.find(({ name }) => name.toLowerCase() === filterName)) {
  //     alert(`${contact.name} is already in contacts`);
  //     return;
  //   }
  //   setContacts([...contacts, contact]);
  // };

  return (
    <div className={s.cotainer}>
      <div>
        <h1>Phonebook</h1>
        <Form />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}
