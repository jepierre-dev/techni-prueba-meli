"use client"

import { PropsWithChildren } from "react"
import SearchContextProvider from "../context/search/search.context-provider";
import FiltersContextProvider from "../context/filters/filters.context-provider";

const RootProviders = ({ children }: PropsWithChildren<{}>) => {
  return (
      <FiltersContextProvider>  
    <SearchContextProvider>
      {children}
    </SearchContextProvider>
      </FiltersContextProvider>
  )
};
export default RootProviders;