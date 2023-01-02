import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { AiOutlineFilter } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filterId = nanoid();
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <Stack maxW="sm" ml="auto" mr="auto" mb="16px">
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<AiOutlineFilter />} />
        <Input
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
          id={filterId}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Fined contacts by name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputGroup>
    </Stack>
  );
};
