import React from "react";
// Custom hook
import useFetch from "../../hooks/useFetch";
// Components
import ErrorAlert from "../ErrorAlert/ErrorAlert";
import Loading from "../Loading/Loading";

function FetchCharacters() {
  const { data, status } = useFetch();

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <ErrorAlert />;
  }

  return (
    <div>
      <div className="grid  grid-cols-2 mt-2 pl-2 pr-2 justify-center md: lg:grid-cols-4 gap-x-6 sm:grid-cols-3 xl:grid-cols-5  ">
        {data?.pages.map((group, i) => {
          return (
            <React.Fragment key={i}>
              {group.results?.map((char) => (
                <div
                  key={char.id}
                  className="flex flex-col justify-center items-center mt-4 "
                >
                  <img
                    className="rounded-xl border-6 "
                    src={char.image}
                    alt={char.name}
                  />
                  <h2 className="text-lg">{char.name}</h2>
                </div>
              ))}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default FetchCharacters;
