const fetchFunction = async (page, searchValue, filterValue) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&status=${filterValue}&name=${searchValue}`
  );
  if (!res.ok) {
    throw new Error("error");
  } else {
    return await res.json();
  }
};

export default fetchFunction;
