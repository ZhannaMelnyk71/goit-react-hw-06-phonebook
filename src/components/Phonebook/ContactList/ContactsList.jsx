// import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { getContactsFilter, getContactsList } from '../../../redux/selector';
import { getVisibleContacts } from '../../../redux/selector'
import css from './ContactList.module.css'
import { Contact } from 'components/Phonebook/Contact/Contact'

export const ContactsList = () => {
    const contacts = useSelector(getVisibleContacts);

    return (
        <ul className= {css.contactList}>{contacts.map(contact =>
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

