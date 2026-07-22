"use client";

import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { SearchContext } from "./search.context";

const SearchContextProvider = ({ children }: PropsWithChildren) => {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  )
};
export default SearchContextProvider;