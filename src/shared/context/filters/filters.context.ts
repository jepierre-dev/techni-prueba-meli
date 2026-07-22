import { createContext, useContext} from "react";
import { IFiltersContextType } from "./filters.context-type";

const filtersContext = createContext<IFiltersContextType | undefined>(undefined);
const useFiltersContext = () => {
  const context = useContext(filtersContext);
  if (!context) {
    throw new Error("useFiltersContext must be used within a FiltersProvider");
  }
  return context;
}; 

export { filtersContext, useFiltersContext };