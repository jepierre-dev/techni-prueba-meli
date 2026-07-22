import { PropsWithChildren, useEffect, useState } from "react";
import { filtersContext } from "./filters.context";
import { FilterTypes } from "./filters.context-type";
import { useRouter } from "next/navigation";

const FiltersContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const {replace} = useRouter();
  const [filters, setFilters] = useState<Record<FilterTypes, any>>({
    search: undefined,
    category:undefined,
    price: undefined,
    brand:undefined,
    rating: undefined,
    page: undefined,
    limit: undefined,
    sort: undefined,
  });

  const handleChangeUrl = (filters: Record<FilterTypes, any>) => {
    const queryParams = new URLSearchParams();
    const filterKeys = Object.keys(filters) as FilterTypes[];
    filterKeys.forEach((key) => {
      const value = filters[key];
      if (value !== undefined && value !== null && value !== "") {
        queryParams.append(key, value.toString());
      }
    });
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
    replace(newUrl);
  }

  useEffect(() => {
    handleChangeUrl(filters);
  }, [filters]);

  return (
    <filtersContext.Provider value={{ filters, setFilters }}>
      {children}
    </filtersContext.Provider>
  )
}

export default FiltersContextProvider;