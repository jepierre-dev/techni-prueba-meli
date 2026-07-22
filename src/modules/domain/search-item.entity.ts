export interface SearchItemSeller {
  id: number;
  nickname: string;
}

export interface SearchItemShipping {
  free_shipping: boolean;
}

export interface SearchItem {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  available_quantity: number;
  condition: 'new' | 'used';
  thumbnail: string;
  permalink: string;
  seller: SearchItemSeller;
  shipping: SearchItemShipping;
}

export interface SearchResult {
  query: string;
  total: number;
  items: SearchItem[];
}
