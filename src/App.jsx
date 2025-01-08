import { useState } from "react";
import { AppRoutes } from "./app-router";
import { SearchContext } from "./context/searchContext";

function App() {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <AppRoutes />
    </SearchContext.Provider>
  );
}

export default App;
