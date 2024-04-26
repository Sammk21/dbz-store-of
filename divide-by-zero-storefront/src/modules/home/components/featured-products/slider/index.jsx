"use client"
import React, { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import Thumbnail from "@modules/products/components/thumbnail"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import { MdOutlineArrowRightAlt } from "react-icons/md"
import { AnimatePresence, cubicBezier, motion } from "framer-motion"

const Slider = ({ products, region }) => {
  const [currentTitle, setCurrentTitle] = useState(
    products && products.length > 0 ? products[0].title : ""
  )

  const titleRef = useRef(null)

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex
    const currentProduct = products[currentIndex]
    setCurrentTitle(currentProduct.title)
  }

  return (
    <>
      <div className="relative overflow-hidden slider ">
        <Swiper
          speed={600}
          pagination={{ clickable: true }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          slidesPerView={5}
          centeredSlides
          onSlideChange={handleSlideChange}
          modules={[EffectCoverflow, Pagination, Navigation]}
          navigation={{ nextEl: ".back", prevEl: ".front" }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            420: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
            1080: {
              slidesPerView: 4,
              spaceBetween: 100,
            },
          }}
        >
          <div className="absolute w-[100vw] text-[#9c9c9c68] text-[18vw]  flex justify-center items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase pointer-events-none overflow-hidden ">
            <AnimatePresence mode="wait">
              {currentTitle && (
                <motion.h1
                  key={currentTitle}
                  initial={{ y: "100%", rotate: 5 }}
                  animate={{ y: 0, rotate: 0 }}
                  exit={{ y: "-100%", rotate: 4 }}
                  transition={{
                    duration: 0.5,
                    ease: cubicBezier(0.19, 1.0, 0.22, 1.0),
                  }}
                  ref={titleRef}
                >
                  {currentTitle}
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
          {products &&
            products.map((product, i) => (
              <>
                <SwiperSlide key={i}>
                  <LocalizedClientLink
                    href={`/products/${product.handle}`}
                    className="group"
                  >
                    <Thumbnail
                      className="pointer-events-none"
                      thumbnail={product?.thumbnail}
                      size="3/1"
                    />
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

        <motion.span className="back transition ease-in-out cursor-pointer z-40 p-3  text-[8vw] stroke-black  textglobal drop-shadow-lg hover:translate-x-3 hover:scale-110 absolute top-[40%]  right-0">
          <MdOutlineArrowRightAlt />
        </motion.span>
        <motion.span className="front transition ease-in-out  cursor-pointer rotate-180 z-40 p-3 text-[8vw] stroke-black  textglobal drop-shadow-lg  hover:-translate-x-3 hover:scale-110 absolute top-[40%] left-0">
          <MdOutlineArrowRightAlt />
        </motion.span>
      </div>
    </>
  )
}

export default Slider
