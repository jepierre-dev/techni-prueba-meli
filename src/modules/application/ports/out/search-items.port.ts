import { SearchResult } from "@/modules/domain/search-item.entity";

interface ISearchItemsPort {
  search(query: string, siteId: string, token: string): Promise<SearchResult>;
}

export default ISearchItemsPort;
