// Hook
import { useContext } from "react";

// Context
import DataContext from "../context/dataContext";

export default function useFilter() {
  const { filterValue, setFilterValue } = useContext(DataContext);

  const onChangeHandler = (e) => {
    setFilterValue(e.target.value);
    console.log(filterValue);
  };

  return { onChangeHandler, filterValue };
}
