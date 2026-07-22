import { SearchItem } from "@/modules/domain/search-item.entity";

/**
 * Mock items based on real MercadoLibre Colombia (MCO) listings.
 * Images are served from MercadoLibre's public CDN.
 */
export const MOCK_ITEMS: SearchItem[] = [
  {
    id: "MCO2090064104",
    title: "Apple iPhone 15 Pro (128 Gb) - Titanio Negro",
    price: 4199000,
    currency_id: "COP",
    available_quantity: 10,
    condition: "new",
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_611411-MCO73877982519_012024-O.webp",
    permalink:
      "https://www.mercadolibre.com.co/apple-iphone-15-pro-128-gb-titanio-negro/p/MCO28440015",
    seller: { id: 1068179769, nickname: "APPLE_STORE_CO" },
    shipping: { free_shipping: true },
  },
  {
    id: "MCO2166061897",
    title: "Samsung Galaxy S24 Ultra 256gb 12gb Ram Titanium Black",
    price: 5299000,
    currency_id: "COP",
    available_quantity: 5,
    condition: "new",
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_773862-MCO75354636791_032024-O.webp",
    permalink:
      "https://www.mercadolibre.com.co/samsung-galaxy-s24-ultra-256gb-12gb-ram-titanium-black/p/MCO29085063",
    seller: { id: 287088729, nickname: "SAMSUNG_COLOMBIA" },
    shipping: { free_shipping: true },
  },
  {
    id: "MCO1908312393",
    title: 'MacBook Air Apple M2 13" 8gb Ram 256gb Ssd Medianoche',
    price: 3999000,
    currency_id: "COP",
    available_quantity: 8,
    condition: "new",
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_864253-MCO69736944447_062023-O.webp",
    permalink:
      "https://www.mercadolibre.com.co/apple-macbook-air-apple-m2-13-8gb-ram-256gb-ssd-medianoche/p/MCO21922961",
    seller: { id: 1068179769, nickname: "APPLE_STORE_CO" },
    shipping: { free_shipping: true },
  },
  {
    id: "MCO2209100174",
    title: "Sony PlayStation 5 825gb Standard Color Blanco",
    price: 2199000,
    currency_id: "COP",
    available_quantity: 3,
    condition: "new",
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_803255-MCO47577151411_092021-O.webp",
    permalink:
      "https://www.mercadolibre.com.co/sony-playstation-5-825gb-standard-color-blanco/p/MCO14869329",
    seller: { id: 159078965, nickname: "SONY_GAMING_CO" },
    shipping: { free_shipping: true },
  },
  {
    id: "MCO1960616218",
    title: 'LG Oled Evo C3 65" 4k Smart Tv 2023',
    price: 6499000,
    currency_id: "COP",
    available_quantity: 4,
    condition: "new",
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_783824-MCO71741016424_092023-O.webp",
    permalink:
      "https://www.mercadolibre.com.co/lg-oled-evo-c3-65-4k-smart-tv-2023/p/MCO23611065",
    seller: { id: 74235220, nickname: "LG_COLOMBIA_OFICIAL" },
    shipping: { free_shipping: true },
  },
  {
    id: "MCO2157490474",
    title: "Nike Air Max 270 React Hombre Running Blanco/negro",
    price: 389000,
    currency_id: "COP",
    available_quantity: 20,
    condition: "new",
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_788873-MCO75095823626_032024-O.webp",
    permalink:
      "https://www.mercadolibre.com.co/nike-air-max-270-react-hombre-running-blanconegro/p/MCO28870091",
    seller: { id: 308967000, nickname: "NIKE_COLOMBIA" },
    shipping: { free_shipping: false },
  },
  {
    id: "MCO2102434005",
    title: "Adidas Ultraboost 22 Hombre Running Core Black",
    price: 459000,
    currency_id: "COP",
    available_quantity: 15,
    condition: "new",
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_918789-MCO73070416052_112023-O.webp",
    permalink:
      "https://www.mercadolibre.com.co/adidas-ultraboost-22-hombre-running-core-black/p/MCO26143697",
    seller: { id: 410235788, nickname: "ADIDAS_COLOMBIA_OFICIAL" },
    shipping: { free_shipping: false },
  },
  {
    id: "MCO2078910034",
    title: "Bicicleta Trek Marlin 5 Aro 29 Mtb 21 Velocidades",
    price: 2150000,
    currency_id: "COP",
    available_quantity: 6,
    condition: "new",
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_785452-MCO72502613741_102023-O.webp",
    permalink:
      "https://www.mercadolibre.com.co/bicicleta-trek-marlin-5-aro-29-mtb-21-velocidades/p/MCO25700512",
    seller: { id: 551223340, nickname: "TREK_BIKES_CO" },
    shipping: { free_shipping: true },
  },
  {
    id: "MCO1993847710",
    title: "Tablet Samsung Galaxy Tab S9 Fe 256gb 8gb Ram Gray",
    price: 1299000,
    currency_id: "COP",
    available_quantity: 12,
    condition: "new",
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_648381-MCO75354636791_032024-O.webp",
    permalink:
      "https://www.mercadolibre.com.co/samsung-galaxy-tab-s9-fe-256gb-8gb-ram-gray/p/MCO29010244",
    seller: { id: 287088729, nickname: "SAMSUNG_COLOMBIA" },
    shipping: { free_shipping: true },
  },
  {
    id: "MCO2214510299",
    title: "Auriculares Sony Wh-1000xm5 Inalámbricos Noise Cancelling Negro",
    price: 1199000,
    currency_id: "COP",
    available_quantity: 9,
    condition: "new",
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_648918-MCO75636698073_042024-O.webp",
    permalink:
      "https://www.mercadolibre.com.co/auriculares-sony-wh-1000xm5-inalambricos-noise-cancelling-negro/p/MCO25226613",
    seller: { id: 159078965, nickname: "SONY_GAMING_CO" },
    shipping: { free_shipping: true },
  },
];
