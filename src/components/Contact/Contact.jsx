import s from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

function Contact({ contact }) {
  const { name, number, id } = contact;

  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.box}>
      <div className={s.info}>
        <div className={s.infoBox}>
          <IoPerson />
          <p>{name}</p>
        </div>
        <div className={s.infoBox}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button type="button" onClick={() => handleDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
