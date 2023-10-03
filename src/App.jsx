import { QueryClientProvider, QueryClient } from "react-query";

// Components
import Navbar from "./components/Navbar/index.jsx";
import Filter from "./components/FilterCharacters/index.jsx";
import FetchCharacters from "./components/Cards/index.jsx";

//  Context
import { DataProvider } from "./context/dataContext.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <DataProvider>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <div className=" bg-gray-200 h-auto min-h-screen">
          <Filter />
          <FetchCharacters />
        </div>
      </QueryClientProvider>
    </DataProvider>
  );
}

export default App;
