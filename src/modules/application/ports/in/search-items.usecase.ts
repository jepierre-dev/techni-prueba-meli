import { SearchResult } from "@/modules/domain/search-item.entity";

interface ISearchItemsUseCase {
  execute(query: string, siteId?: string): Promise<SearchResult>;
}

export default ISearchItemsUseCase;
