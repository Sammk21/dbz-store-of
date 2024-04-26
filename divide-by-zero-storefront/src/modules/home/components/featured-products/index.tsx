import { Region } from "@medusajs/medusa"

import ProductRail from "@modules/home/components/featured-products/product-rail"
import { BsArrowDown } from "react-icons/bs"
import { ProductCollectionWithPreviews } from "types/global"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
}) {
  console.log(collections)
  return (
    <>
      <div className="w-full flex justify-center flex-col items-center pb-12 text-[8vw] sm:text-[3vw]">
        <div className="">
          <span>Collections</span>
        </div>
        <div>
          <span className="">
            <BsArrowDown />
          </span>
        </div>
      </div>
      {collections.map((collection) => (
        <li key={collection.id}>
          <ProductRail collection={collection} region={region} />
        </li>
      ))}
    </>
  )
}
