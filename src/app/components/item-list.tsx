"use server"

import Image from "next/image"
import { SearchItem } from "@/modules/domain/search-item.entity"
import { cn } from "@/shared/lib/utils"

const formatPrice = (price: number) =>
  "$ " + price.toLocaleString("es-CO")

const ItemCard = ({ item }: { item: SearchItem }) => (
  <li className="flex bg-white rounded-sm border border-[#e6e6e6] hover:shadow-md transition-shadow duration-200">
    <a
      href={item.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full gap-4 p-4"
    >
      {/* Image */}
      <div className="relative shrink-0 w-45 h-45">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="object-contain"
          sizes="180px"
          unoptimized
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 min-w-0 py-1">
        <p className="text-sm text-[#333] line-clamp-2 leading-snug">
          {item.title}
        </p>

        <p className="text-2xl font-light text-[#333] mt-1">
          {formatPrice(item.price)}
          <span className="text-sm ml-1 text-[#666]">{item.currency_id}</span>
        </p>

        {item.shipping.free_shipping && (
          <span className="text-xs font-semibold text-[#00a650] mt-0.5">
            Envío gratis
          </span>
        )}

        <div className="flex items-center gap-2 mt-auto pt-3">
          <span
            className={cn(
              "text-xs px-2 py-0.5 rounded-full border",
              item.condition === "new"
                ? "border-[#3483fa] text-[#3483fa]"
                : "border-[#666] text-[#666]"
            )}
          >
            {item.condition === "new" ? "Nuevo" : "Usado"}
          </span>
          <span className="text-xs text-[#999]">por {item.seller.nickname}</span>
        </div>
      </div>
    </a>
  </li>
)

const ItemList = async ({ query, siteId }: { query: string; siteId?: string }) => {
  const { searchItems } = await import("@/modules/application/actions/search.actions")
  const { items, total, query: resolvedQuery } = await searchItems(query, siteId)

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {resolvedQuery && (
        <p className="text-sm text-[#666] mb-4">
          <span className="font-semibold text-[#333]">{total.toLocaleString("es-CO")}</span>
          {" resultados para "}
          <span className="font-semibold text-[#333]">&ldquo;{resolvedQuery}&rdquo;</span>
        </p>
      )}
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default ItemList