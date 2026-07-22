import ItemList from "./components/item-list"
import ItemListSkeleton from "./components/item-list-skeleton"
import { Suspense } from "react"

export default async function RootPage({
  searchParams
}:{
  searchParams?: Promise<{search?: string, siteId?: string}>
}){
  const {search = '', siteId} = (await searchParams) ?? {}

  return (
    <main className="min-h-screen bg-[#ebebeb]">
      <Suspense fallback={<ItemListSkeleton />} key={search + siteId}>
        <ItemList query={search} siteId={siteId} />
      </Suspense>
    </main>
  )
}