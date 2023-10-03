//Hook
import { useState } from "react";

function useDebounce() {
  const [newTimeout, setNewTimeout] = useState();

  function debounce(func, wait) {
    clearTimeout(newTimeout);

    const timeout = setTimeout(() => {
      func();
    }, wait);
    setNewTimeout(timeout);
  }

  return debounce;
}

export default useDebounce;
