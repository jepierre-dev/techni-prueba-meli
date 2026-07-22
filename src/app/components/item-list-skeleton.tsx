const SkeletonCard = () => (
  <li className="flex bg-white rounded-sm border border-[#e6e6e6] p-4 gap-4 animate-pulse">
    {/* Image placeholder */}
    <div className="shrink-0 w-45 h-45 bg-[#ebebeb] rounded-sm" />

    {/* Info placeholder */}
    <div className="flex flex-col gap-3 flex-1 py-1">
      {/* Title */}
      <div className="space-y-2">
        <div className="h-4 bg-[#ebebeb] rounded w-4/5" />
        <div className="h-4 bg-[#ebebeb] rounded w-3/5" />
      </div>

      {/* Price */}
      <div className="h-7 bg-[#ebebeb] rounded w-2/5 mt-1" />

      {/* Free shipping */}
      <div className="h-3 bg-[#ebebeb] rounded w-1/5" />

      {/* Badges */}
      <div className="flex gap-2 mt-auto pt-3">
        <div className="h-5 bg-[#ebebeb] rounded-full w-14" />
        <div className="h-5 bg-[#ebebeb] rounded w-28" />
      </div>
    </div>
  </li>
)

const ItemListSkeleton = ({ count = 6 }: { count?: number }) => (
  <div className="max-w-4xl mx-auto px-4 py-6">
    {/* Results text placeholder */}
    <div className="h-4 bg-[#ebebeb] rounded w-52 mb-4 animate-pulse" />
    <ul className="flex flex-col gap-3">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </ul>
  </div>
)

export default ItemListSkeleton
