import { createContext, useContext } from "react";
import { SearchContextType } from "./search.context-type";

const SearchContext = createContext<SearchContextType | undefined>(undefined);
const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
}

export { SearchContext, useSearchContext };