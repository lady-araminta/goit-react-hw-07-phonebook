import PropTypes from 'prop-types';
import { Button, Td, Tr } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactElem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <Tr key={id}>
      <Td>{name}</Td>
      <Td>{number}</Td>
      <Td>
        <Button type="button" children="Delete" onClick={handleDelete} />
      </Td>
    </Tr>
  );
};

ContactElem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
