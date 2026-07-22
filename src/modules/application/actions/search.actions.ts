'use server'

import container from "@/modules/core/composition"
import { SearchResult } from "@/modules/domain/search-item.entity"

export const searchItems = async (query: string, siteId?: string): Promise<SearchResult> => {
  const {
    useCases: { searchItems },
  } = container()

  return searchItems.execute(query, siteId)
}
