"use client"
import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import Thumbnail from "@modules/products/components/thumbnail"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { EffectCoverflow, Pagination } from "swiper/modules"
import "swiper/css"

const Slider = ({ products, region }) => {
  const [currentTitle, setCurrentTitle] = useState(
    products && products.length > 0 ? products[0].title : ""
  )

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex
    const currentProduct = products[currentIndex]
    setCurrentTitle(currentProduct.title)
  }
  return (
    <>
      <div className="relative">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 60,
            modifier: 4,
            slideShadows: false,
          }}
          onSlideChange={handleSlideChange}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          breakpoints={{
            360: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 70,
            },
          }}
          navigation={true}
        >
          <div className="absolute w-[100vw] text-[#9c9c9c68] text-[18vw]  flex justify-center items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase pointer-events-none ">
            <h1>{currentTitle}</h1>
          </div>
          {products &&
            products.map((product) => (
              <>
                <SwiperSlide key={product.id}>
                  <LocalizedClientLink
                    href={`/products/${product.handle}`}
                    className="group"
                  >
                    <Thumbnail thumbnail={product?.thumbnail} size="3/1" />
                    <div className="flex text-xs sm:text-sm lg:text-lg mt-4 justify-between">
                      <p
                        className="text-ui-fg-subtle capitalize"
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          maxWidth: "calc(100% - 40px)",
                        }}
                      >
                        {product.title}
                      </p>
                      <div className="flex items-center gap-x-2 text-ui-fg-muted">
                        <p>{product?.price?.calculated_price}</p>
                      </div>
                    </div>
                  </LocalizedClientLink>
                </SwiperSlide>
              </>
            ))}
        </Swiper>
      </div>
    </>
  )
}

export default Slider
