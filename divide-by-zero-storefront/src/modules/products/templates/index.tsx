import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import ImageSlider from "@modules/products/components/image-slider/index"
import { FaArrowTurnDown } from "react-icons/fa6"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

import Button from "@modules/common/components/button"
import { Text } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import Image from "next/image"

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
}

type ProductProp = {
  product: PricedProduct
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div className="px-10 flex flex-col small:flex-row small:items-start py-6  relative">
        <div className="w-full h-auto ">
          <div className="relative w-full ">
            <ImageSlider product={product} />
            <div className="ipad:w-[30vw] ipad:bg-gradient-to-r from-[#EEEDEB] h-full  w-full sm:absolute left-0 top-0  z-10 textglobal py-5 ">
              <div className="flex flex-col h-full w-full ipad:justify-between max-w-md justify-center">
                <div className="">
                  {product.collection && (
                    <LocalizedClientLink
                      href={`/collections/${product.collection.handle}`}
                      className="text-medium textglobal hover:text-ui-fg-subtle underline underline-offset-2 decoration-[0.3px] pb-1"
                    >
                      {product.collection.title}
                    </LocalizedClientLink>
                  )}
                  <h1 className="sm:text-[14vw] lg:text-[10vw] text-[30vw] uppercase">
                    {product.title}
                  </h1>
                  <Text className=" ">{product.description}</Text>
                </div>
                <div>
                  <div className="flex flex-col small:sticky small:top-48 small:py-0  w-full py-8 gap-y-12">
                    <ProductOnboardingCta />
                    <Suspense
                      fallback={
                        <ProductActions product={product} region={region} />
                      }
                    >
                      <ProductActionsWrapper id={product.id} region={region} />
                    </Suspense>
                  </div>
                </div>
                <div>
                  <span className="flex gap-x-2 items-center sm:text-[2vw] text-[5vw] mb-6">
                    <FaArrowTurnDown />
                    Product Info
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 sm:py-12">
        <div className="w-full py-5  rounded-3xl ">
          <div className="grid ipad:grid-cols-2 gap-3 grid-cols-1">
            <div>
              <ProductTabs product={product} />
            </div>
            <div className="aspect-square relative">
              <Image
                alt={product?.title || "cloth"}
                fill
                className="object-cover object-center rounded-3xl "
                src="https://a.storyblok.com/f/161230/3000x1688/5569ecb6d4/dead-island-2-home.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <RelatedProducts product={product} countryCode={countryCode} />
    </>
  )
}

export default ProductTemplate

