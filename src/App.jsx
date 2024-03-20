import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";

import { GlobalStyle } from "./components/GlobalStyle.styled";
import { Layout } from "./components/Layout.styled";
import Filter from "./components/SearchBox/SearchBox";

export default function App() {
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
