import s from './ContactItem.module.css';

const ContactItem = ({ name, number, handleDelete }) => {
  return (
    <li className={s.item}>
      <p>
        <span>{name}</span>: {number}
      </p>
      <button className={s.button} onClick={handleDelete} type="button">
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
