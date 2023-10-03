// Hooks

import { useContext, useEffect } from "react";

// Infinite query

import { useInfiniteQuery } from "react-query";

//Context

import DataContext from "../context/dataContext";

// Api
import fetchFunction from "../api/FetchCharacter";

function useFetch() {
  const { searchValue, filterValue } = useContext(DataContext);

  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["characters", searchValue, filterValue],
    (queryContext) =>
      fetchFunction(queryContext.pageParam, searchValue, filterValue),
    {
      getNextPageParam: (_lastPage, allPages) => {
        if (allPages.length < allPages[0]?.info.pages) {
          return allPages.length + 1;
        }
        return undefined;
      },
      retry: false,
    }
  );

  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage, data]);

  return { data, status };
}

export default useFetch;
