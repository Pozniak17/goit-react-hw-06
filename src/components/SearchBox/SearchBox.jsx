import { useDispatch, useSelector } from "react-redux";
import { FilterLabel, FilterInput } from "./SearchBox.styled";
import { selectNameFilter, setFilterName } from "../../redux/filtersSlice";

export default function SearchBox() {
  const filterValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const newFilterValue = event.target.value; // Отримайте нове значення фільтру з події onChange
    dispatch(setFilterName(newFilterValue)); // Відправте дію для оновлення фільтрованих контактів у ваш Redux-стор
  };
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        value={filterValue}
        onChange={handleChange}
        type="text"
        name="filter"
        placeholder="Filter"
      />
    </FilterLabel>
  );
}
