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
      <div className="content-container flex flex-col small:flex-row small:items-start py-6 relative">
        <div className="w-full sm:h-[80vh]">
          <div className="relative w-full ">
            <ImageSlider product={product} />
            <div className="sm:w-[30vw] bg-gradient-to-r from-black  w-full sm:absolute h-auto left-0 top-0 sm:h-[80vh] z-10 text-white py-5 ">
              <div className="flex flex-col h-full justify-between">
                <div className="">
                  {product.collection && (
                    <LocalizedClientLink
                      href={`/collections/${product.collection.handle}`}
                      className="text-medium text-white hover:text-ui-fg-subtle"
                    >
                      {product.collection.title}
                    </LocalizedClientLink>
                  )}
                  <h1 className="sm:text-[19vw] lg:text-[10vw] text-[40vw] uppercase">
                    {product.title}
                  </h1>
                  <Text className="text-medium text-white">
                    {product.description}
                  </Text>
                </div>
                <div>
                  <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-12">
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
                  <span className="flex gap-x-2 items-center text-[3vw]">
                    <FaArrowTurnDown />
                    Product Info
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="content-container flex flex-col small:flex-row small:items-start py-6 relative">
        <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-6">
          <ProductInfo product={product} />
          <ProductTabs product={product} />
        </div>
        <div className="block w-full relative">
          <ImageGallery images={product?.images || []} />
        </div>
        <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-12">
          <ProductOnboardingCta />
          <Suspense
            fallback={<ProductActions product={product} region={region} />}
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
        </div>
      </div>
      <div className="content-container my-16 small:my-32">
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div> */}
    </>
  )
}

export default ProductTemplate

