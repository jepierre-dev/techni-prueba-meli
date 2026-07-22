import ISearchItemsPort from "@/modules/application/ports/out/search-items.port";
import ISearchItemsUseCase from "@/modules/application/ports/in/search-items.usecase";
import { SearchResult } from "@/modules/domain/search-item.entity";

const DEFAULT_SITE_ID = "MCO";

const createSearchItemsService = (
  searchPort: ISearchItemsPort,
  tokenFn: () => Promise<string>
): ISearchItemsUseCase => ({
  execute: async (query: string, siteId = DEFAULT_SITE_ID): Promise<SearchResult> => {
    const token = await tokenFn();
    return searchPort.search(query, siteId, token);
  },
});

export default createSearchItemsService;
