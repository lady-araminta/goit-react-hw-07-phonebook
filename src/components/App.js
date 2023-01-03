import { Box, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box maxW="1200px" mr="auto" ml="auto">
      <ContactForm />
      {contacts.length >= 1 && <Filter />}
      {isLoading && !error && <Loader />}
      {error && (
        <Heading size="md" textAlign="center">
          {error}
        </Heading>
      )}
      {contacts.length === 0 && !isLoading && (
        <Heading size="md" textAlign="center">
          There are no saved contacts in your phonebook
        </Heading>
      )}
      {contacts.length > 0 && <ContactList />}
      <ToastContainer position="top-center" autoClose={2500} />
    </Box>
  );
};
