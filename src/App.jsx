import { useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contacts/operations.js";
import { selectLoading, selectError } from "./redux/contacts/selectors.js";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <SearchBox />
      {error ? (
        <h1>Something went wrong. Try again later)</h1>
      ) : (
        <ContactList />
      )}
    </div>
  );
}

export default App;
