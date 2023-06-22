
import { Filter } from './Phonebook/Filter/Filter'
import { ContactsList } from "./Phonebook/ContactList/ContactsList";
import { ContactForm } from "./Phonebook/ContactForm/ContactForm";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 20,
        color: '#010101',
        padding: 30,
        
      }}
    >
        <ContactForm />
        <Filter />
        <ContactsList/>
    </div>
  );
};
