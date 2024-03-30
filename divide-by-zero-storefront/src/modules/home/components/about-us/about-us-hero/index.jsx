"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-cards"
import { IoArrowBack, IoArrowForward } from "react-icons/io5"
import { useState } from "react"
import { motion, AnimatePresence, cubicBezier } from "framer-motion"

const slideContent = [
  {
    src: "https://i.pinimg.com/564x/71/5b/47/715b472d7b1544555ea6728a39470c22.jpg",
    name: "Sam",
    paragraph:
      "Hello! I am the founder, developer, and creative head at Divide by Zero Clothing Company, established in 2024. Leading our team with a focus on innovative design and creative direction, Welcome to divide by zero",
  },
  {
    src: "https://i.pinimg.com/564x/d1/14/45/d11445da48837e403787af9953e8f9ec.jpg",
    name: "Rashid",
    paragraph:
      "With a palette as vibrant as his imagination, Rashid stitches dreams into reality. His designs are not merely garments; they are stories waiting to be told. Each thread weaves a narrative of creativity and passion, defining the very essence of Divide by Zero Clothing Company.",
  },
  {
    src: "https://i.pinimg.com/564x/a2/95/f4/a295f425d77f2c34220c523fbf9cf728.jpg",
    name: "anon",
    paragraph:
      "In the boardroom, his name resonates with authority; in the world of fashion, his vision sets trends ablaze. John Doe, the silent force behind Divide by Zero Clothing Company, is more than just a partner. Hes the architect of our success, steering us towards innovation and excellence.",
  },
]

const AboutHero = () => {
  return (
    <div className="h-auto  ">
      <Profiles />
    </div>
  )
}

export default AboutHero

const Profiles = () => {
  // State variables to hold the current slide index and its corresponding content
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const { name, paragraph } = slideContent[currentSlide]
  // Function to handle slide change
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex)
    setCurrentSlide(swiper.activeIndex)
  }

  const convertLastLettersToRed = (name, numLetters) => {
    const lastIndex = name.length - numLetters
    const firstPart = name.slice(0, lastIndex)
    const lastPart = name.slice(lastIndex)
    return (
      <span>
        {firstPart}
        <span style={{ color: "red" }}>{lastPart}</span>
      </span>
    )
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-5 ">
        <div className="  text-white relative z-20 ">
          <span className="text-[10vw] font col-span-2 lg:absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 lg:opacity-20 ">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="about-name"
            >
              {convertLastLettersToRed(name, 2)}.
            </motion.p>
          </span>
          <span className="justify-end transition-all text-xs sm:text-sm h-36">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
            >
              {paragraph}
            </motion.p>
          </span>
          <div className="lg:absolute right-1/2 bottom-6 flex lg:justify-between lg:w-28 w-full justify-center gap-x-5 pt-10">
            <span className="arrow-right cursor-pointer border p-3 rounded-full  text-white hover:scale-105">
              <IoArrowBack />
            </span>
            <span className="arrow-left  cursor-pointer border p-3 rounded-full text-white hover:scale-105">
              <IoArrowForward />
            </span>
          </div>
        </div>

        <div className="h-full w-full px-8 ">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            cardsEffect={{
              perSlideOffset: 8,
              perSlideRotate: 3,
              rotate: true,
              slideShadows: true,
            }}
            spaceBetween={200}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[EffectCards, Pagination, Navigation]}
            navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
            className="mySwiper "
          >
            {slideContent.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-square relative">
                  <Image
                    fill
                    className="object-cover rounded-3xl"
                    src={slide.src}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
