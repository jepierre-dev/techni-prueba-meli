"use client";

import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { SearchContext } from "./search.context";
import { useDebouncedCallback } from "use-debounce"
import { useFiltersContext } from "../filters/filters.context";

const SearchContextProvider = ({ children }: PropsWithChildren) => {

  const [searchTerm, setSearchTerm] = useState("");
  const { setFilters, filters } = useFiltersContext();

  const executeSearch = useDebouncedCallback((value: string) => {
    setFilters({
      ...filters,
      search: value
    })
  }, 500);
  
  useEffect(() => {
    executeSearch(searchTerm);
  }, [searchTerm, executeSearch]);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  )
};
export default SearchContextProvider;