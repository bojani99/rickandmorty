// imported custom hook for filter element
import useFilter from "../../../hooks/useFilter";

export default function FilterElement({ placeholder, value }) {
  const { onChangeHandler, filterValue } = useFilter();
  return (
    <div>
      <input
        type="radio"
        id={placeholder}
        value={value}
        name="select"
        onChange={onChangeHandler}
        checked={filterValue === value}
      />
      <label htmlFor={placeholder}>{placeholder}</label>
    </div>
  );
}
