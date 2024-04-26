"use client"
import React from "react"
import { motion } from "framer-motion"

const slides = [
  { text: "Limited Stocks - " },
  { text: "Limited Stocks - " },
  { text: "Limited Stocks - " },
]

const InfiniteText = () => {
  const duplicatedSlides = [...slides, ...slides]

  return (
    <>
      <div className="w-full overflow-hidden  relative  ">
        <motion.div
          className="flex"
          animate={{
            x: ["-100%", "0%"],
            transition: {
              ease: "linear",
              duration: 10,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedSlides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / slides.length}%` }}
            >
              <p className="flex text-[3.3vw] text-[#9c9c9c68] font-bold leading-[normal] uppercase ">
                {slide.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default InfiniteText
