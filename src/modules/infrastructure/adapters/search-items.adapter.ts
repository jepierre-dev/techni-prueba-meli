import ISearchItemsPort from "@/modules/application/ports/out/search-items.port";
import { SearchItem, SearchResult } from "@/modules/domain/search-item.entity";
import { MOCK_ITEMS } from "@/modules/infrastructure/mock/search-items.mock";

interface MeliSearchResponse {
  query: string;
  paging: { total: number };
  results: Array<{
    id: string;
    title: string;
    price: number;
    currency_id: string;
    available_quantity: number;
    condition: string;
    thumbnail: string;
    permalink: string;
    seller: { id: number; nickname: string };
    shipping: { free_shipping: boolean };
  }>;
}

const mapResults = (data: MeliSearchResponse, query: string): SearchResult => ({
  query: data.query ?? query,
  total: data.paging.total,
  items: data.results.map(
    (r): SearchItem => ({
      id: r.id,
      title: r.title,
      price: r.price,
      currency_id: r.currency_id,
      available_quantity: r.available_quantity,
      condition: r.condition === "used" ? "used" : "new",
      thumbnail: r.thumbnail.replace(/\W+I\.jpg$/, "-O.webp"),
      permalink: r.permalink,
      seller: r.seller,
      shipping: r.shipping,
    })
  ),
});

const fetchMeliSearch = async (
  query: string,
  siteId: string,
  token?: string
): Promise<SearchResult> => {
  const url = `https://api.mercadolibre.com/sites/${siteId}/search?q=${encodeURIComponent(query)}&limit=10`;
  const headers: HeadersInit = { Accept: "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(url, { headers, next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`MercadoLibre API ${res.status}`);

  return mapResults(await res.json() as MeliSearchResponse, query);
};

const searchItemsAdapter: ISearchItemsPort = {
  search: async (query: string, siteId: string, token: string): Promise<SearchResult> => {
    // 1. Authenticated request
    try {
      return await fetchMeliSearch(query, siteId, token);
    } catch (e) {
      console.warn("[searchItemsAdapter] Auth request failed, trying public endpoint.", e instanceof Error ? e.message : e);
    }

    // 2. Public endpoint (no token) — still returns real images from MeLi
    try {
      return await fetchMeliSearch(query, siteId);
    } catch (e) {
      console.warn("[searchItemsAdapter] Public request failed, using static mock.", e instanceof Error ? e.message : e);
    }

    // 3. Static mock — last resort, no "return all" when nothing matches
    const lowerQuery = query.toLowerCase();
    const filtered = lowerQuery
      ? MOCK_ITEMS.filter((item) => item.title.toLowerCase().includes(lowerQuery))
      : MOCK_ITEMS;

    return { query, total: filtered.length, items: filtered };
  },
};

export default searchItemsAdapter;
