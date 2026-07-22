"use client"

import { PropsWithChildren } from "react"
import SearchContextProvider from "../context/search/search.context-provider";

const RootProviders = ({ children }: PropsWithChildren<{}>) => {
  return (
    <SearchContextProvider>
      {children}
    </SearchContextProvider>
  )
};
export default RootProviders;