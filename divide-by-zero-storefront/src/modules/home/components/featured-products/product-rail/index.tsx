"use client"
import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"
import Slider from "../slider/index"
export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-24 ">
      <div className="flex justify-between mb-8 flex-col sm:flex-row  ">
        <div className="h-full">
          <h1 className=" text-white sm:text-[15vw] text-[30vw] leading-none   ">
            {/* {collection.title} */}
            Zero Point
          </h1>
        </div>
        <div className="text-white sm:w-[50%] w-full flex items-center sm:pl-7 text-sm sm:text-base ">
          These baggy pants aren't just about style; they're about feeling like
          you're floating through space while still looking at Earth. Each pair
          is like a cosmic hug for your legs, with that perfect balance.
        </div>
      </div>

      <Slider products={products} region={region} />
    </div>
  )
}
