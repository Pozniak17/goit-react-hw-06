import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";

import { GlobalStyle } from "./components/GlobalStyle.styled";
import { Layout } from "./components/Layout.styled";
import Filter from "./components/SearchBox/SearchBox";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default function App() {
  // Зчитуємо або в нас є 'contacts' або якщо пустий рядок, то показати масив
  // також ()=> лінива ініціалізація стану, коли useState викличе фун-ю 1 раз, коли стан залежить від розрахунків, щоб не було кожен раз рендер в localStorage.
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem("contacts")) ?? initialState
  );

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // комент
  // const addContact = (name, number) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   if (
  //     contacts.some(
  //       (contact) =>
  //         contact.name.toLowerCase() === name.toLowerCase() ||
  //         contact.number === number
  //     )
  //   ) {
  //     alert(`${name} or ${number} is already in contacts`);
  //   } else {
  //     setContacts((prevState) => [contact, ...prevState]);
  //   }
  // };

  // this.setState({ filter: event.target.value });
  // const handleChangeFilter = (event) => {
  //   setFilter(event.target.value);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // було
  //  deleteContact = contactId => {
  //    this.setState(prevState => ({
  //      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //    }));
  //  };

  // коммент✅
  // const deleteContact = (contactId) => {
  //   setContacts((prevState) =>
  //     prevState.filter((contact) => contact.id !== contactId)
  //   );
  // };

  // const visibleContacts = getVisibleContacts();
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>

      <Filter />
      <ContactList />
      <GlobalStyle />
    </Layout>
  );
}
