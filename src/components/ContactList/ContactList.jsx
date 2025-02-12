import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import {
  selectContacts,
  selectFilteredContacts,
} from "../../redux/contacts/selectors";
import { selectFilters } from "../../redux/filters/selectors";

function ContactList() {
  const allContacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const searchName = useSelector(selectFilters);

  const contactsToRender = searchName ? filteredContacts : allContacts;

  return (
    <ul className={s.listBox}>
      {contactsToRender.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
