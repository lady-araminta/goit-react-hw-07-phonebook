import { Box, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { getContacts } from 'redux/selectors';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Box maxW="1200px" mr="auto" ml="auto">
      <ContactForm />
      {contacts.length >= 1 && <Filter />}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <Heading size="md" textAlign="center">
          There are no saved contacts in your phonebook
        </Heading>
      )}
      <ToastContainer position="top-center" autoClose={2500} />
    </Box>
  );
};
