// Hook
import { useContext } from "react";

// Context
import DataContext from "../context/dataContext";

// Component
import useDebounce from "./useDebounce";

export default function useSearch() {
  const { setSearchValue } = useContext(DataContext);
  const debounce = useDebounce();

  const onChangeHandler = (e) => {
    debounce(async () => setSearchValue(e.target.value), 800);
  };
  return onChangeHandler;
}
