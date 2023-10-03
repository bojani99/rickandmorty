// Hook
import useSearch from "../../hooks/useSearch";

function SearchBar() {
  const handleInput = useSearch();

  return (
    <div className="searchbox mr-[40px] rounded-md border-2 h-[40px]  flex align-middle mt-2 ">
      <input
        className="w-[150px]  pl-3 sm:w-[200px]"
        type="text"
        placeholder="Search"
        onChange={handleInput}
      />
    </div>
  );
}

export default SearchBar;
