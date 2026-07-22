interface IFiltersContextType {
  filters: Record<FilterTypes, any>;
  setFilters: (filters: Record<FilterTypes, any>) => void;
}

type FilterTypes = "search" | "category" | "price" | "brand" | "rating" | "page" | "limit" | "sort";

export {type IFiltersContextType,type FilterTypes };