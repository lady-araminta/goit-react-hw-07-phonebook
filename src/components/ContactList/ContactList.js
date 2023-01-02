import { Table, TableContainer, Tbody } from '@chakra-ui/react';
import { ContactElem } from 'components/ContactElem/ContactElem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const users = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = users.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <TableContainer maxW="sm" ml="auto" mr="auto">
      <Table variant="simple" size="sm">
        <Tbody>
          {visibleContacts.map(({ id, name, number }) => (
            <ContactElem key={id} id={id} name={name} number={number} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
