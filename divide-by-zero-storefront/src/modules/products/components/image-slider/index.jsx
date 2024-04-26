"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination } from "swiper/modules"
import "swiper/css"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"

const ImageSlider = ({ product }) => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 70,
          modifier: 3,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper "
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 70,
          },
        }}
        navigation={true}
      >
        {product?.images &&
          product?.images.map((image) => (
            <>
              <SwiperSlide key={image.id}>
                <LocalizedClientLink
                  href={`/products/${product.handle}`}
                  className="group"
                >
                  <Thumbnail
                    className="border-none shadow-none"
                    thumbnail={image?.url}
                  />
                </LocalizedClientLink>
              </SwiperSlide>
            </>
          ))}
      </Swiper>
    </>
  )
}

export default ImageSlider
