import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";

function SearchBox() {
  const dispatch = useDispatch();
  const searchName = useSelector(selectFilters);
  const handleInputChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={s.searchBox}>
      <h2 className={s.title}>Find contact by name</h2>
      <input type="text" value={searchName} onChange={handleInputChange} />
    </div>
  );
}

export default SearchBox;
