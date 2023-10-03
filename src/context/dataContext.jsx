// Hooks
import { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  const [filterValue, setFilterValue] = useState("");

  return (
    <div>
      <DataContext.Provider
        value={{ searchValue, setSearchValue, filterValue, setFilterValue }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default DataContext;
