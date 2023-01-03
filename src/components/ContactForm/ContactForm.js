import {
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Button,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Flex,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectContacts } from 'redux/selectors';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    const existingName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const existingNumber = contacts.some(contact => contact.number === number);

    if (existingName) {
      toast(name + 'is alredy in contacts');
      return;
    } else if (existingNumber) {
      toast(`${number} is alredy in contacts`);
      return;
    } else {
      const newContact = { id: nanoid(), name, number };
      dispatch(addContact(newContact));
      reset();
    }
  };
  return (
    <Card maxW="sm" ml="auto" mr="auto" mt="48px" mb="48px">
      <CardHeader>
        <Heading textAlign="center">Phonebook</Heading>
      </CardHeader>
      <CardBody>
        <Stack>
          <InputGroup as="form" onSubmit={handleSubmit} flexDirection="column">
            <Flex mb="8px">
              <InputLeftAddon children="Name" />
              <Input
                size="md"
                onChange={handleChange}
                value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </Flex>
            <Flex mb="16px">
              <InputLeftAddon children="Tel" />
              <Input
                size="md"
                onChange={handleChange}
                value={number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </Flex>
            <Button
              ml="auto"
              mr="auto"
              type="submit"
              children="Add contact"
              width={120}
            />
          </InputGroup>
        </Stack>
      </CardBody>
    </Card>
  );
};
