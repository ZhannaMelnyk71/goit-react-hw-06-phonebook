import { useSelector, useDispatch } from 'react-redux';
import { getContactsList } from '../../../redux/selector';
import { addContact } from '../../../redux/contactsSlice';
import { nanoid } from "@reduxjs/toolkit";
import css from './ContactForm.module.css'



export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsList);

  const onSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const newContact = {
      id: nanoid(),
      name: form.name.value,
      number: form.number.value,
    };
    // const formName = e.target.elements.name.value;
    // const formNumber = e.target.elements.number.value;
      const normalizedName = newContact.name.toLowerCase();

      if (checkDobleName(normalizedName)) {
      return alert(`${form.name.value} is already in contacts`);
    }

    dispatch(addContact(newContact));
    form.reset();
    // if (contacts.some(({ name }) => name === formName)) {
    //   return alert(`${formName} is already in contacts`);
    // }

    // dispatch(addContact(formName, formNumber));
    // form.reset();
  };
    
     const checkDobleName = name =>
    contacts.find(contact => contact.name.toLowerCase() === name);
      
    return (
        <form className={css.form} onSubmit={onSubmit}>
            <label className={css.form__label} htmlFor='name'>Name
                <input
                    // id="name"
                    className={css.form__input}
                    type="text"
                    name="name"
                    pattern="^[A-Za-z\u0080-\uFFFF ']+$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={contacts.name}
                />
            </label>
            <label className={css.form__label} htmlFor='number'>Number
                <input
                    // id="number"
                    className={css.form__input}
                    type="tel"
                    name="number"
                    pattern="^(\+?[0-9.\(\)\-\s]*)$"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={contacts.number}
                />
            </label>
            <button className={css.formBtn} type="submit">Add contact</button>
        </form>
            
    )
};
