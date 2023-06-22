export const getContactsList = state => state.contacts;

export const getContactsFilter = state => state.filters;

export const getVisibleContacts = state => {
  const contacts = getContactsList(state); 
  const filter = getContactsFilter(state); 
  const normalizedFilter = filter.toLowerCase(); 

  
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};