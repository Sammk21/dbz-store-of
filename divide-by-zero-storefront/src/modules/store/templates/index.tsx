import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <div className="flex sm:pt-32 pt-20 flex-col  small:items-start py-6 content-container text-white">
      <div className="w-full  text-[25vw] sm:text-[15vw] lg:text-[10vw] font-medium flex-col border-b">
        <div className="w-full flex justify-center h-full items-center">
          <h1 className="font-medium ">All products</h1>
        </div>
      </div>
      <div className="w-full  ">
        <RefinementList sortBy={sortBy || "created_at"} />
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sortBy || "created_at"}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
    // <div className="flex flex-col  small:items-start py-6 content-container">
    //   <RefinementList sortBy={sortBy || "created_at"} />
    //   <div className="w-full">
    //     <div className="mb-8 ">
    //       <h1>All products</h1>
    //     </div>
    //     <Suspense fallback={<SkeletonProductGrid />}>
    //       <PaginatedProducts
    //         sortBy={sortBy || "created_at"}
    //         page={pageNumber}
    //         countryCode={countryCode}
    //       />
    //     </Suspense>
    //   </div>
    // </div>
  )
}

export default StoreTemplate
