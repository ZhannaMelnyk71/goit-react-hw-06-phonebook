import { useSelector } from 'react-redux';
import { getContactsFilter, getContactsList } from '../../../redux/selector';
import css from './ContactList.module.css'
import { Contact } from 'components/Phonebook/Contact/Contact'

export const ContactsList = () => {
    const contacts = useSelector(getContactsList);
    const filter = useSelector(getContactsFilter);
    const visibleContacts = [
    ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
  ];

    return (
        <ul className= {css.contactList}>{visibleContacts.map(contact =>
            <li className={css.contactList__item}
                key={contact.id}>
                <Contact
                    name={contact.name}
                    number={contact.number}
                    id={contact.id}
                />
            </li>)}
        </ul>
    );
}

