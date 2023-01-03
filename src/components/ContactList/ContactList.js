import { Table, TableContainer, Tbody } from '@chakra-ui/react';
import { ContactElem } from 'components/ContactElem/ContactElem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <TableContainer maxW="lg" ml="auto" mr="auto">
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
