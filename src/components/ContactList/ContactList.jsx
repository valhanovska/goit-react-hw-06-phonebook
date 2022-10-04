import ContactItem from '../ContactItem';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/slice';

import { useDispatch } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const lowerCaseContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.trim())
  );

  return (
    <>
      {lowerCaseContact.length > 0 && (
        <ul>
          {lowerCaseContact.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              name={name}
              number={number}
              handleDelete={() => {
                dispatch(deleteContact(id));
              }}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
