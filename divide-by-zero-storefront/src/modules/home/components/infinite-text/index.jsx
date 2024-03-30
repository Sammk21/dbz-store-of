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
      <div className="w-full overflow-hidden  relative rotate-3">
        <motion.div
          className="flex"
          animate={{
            // x: ["-100%", "0%"],
            transition: {
              ease: "linear",
              duration: 5,
              //   repeat: Infinity,
            },
          }}
        >
          {duplicatedSlides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / slides.length}%` }}
            >
              <p className="flex text-[4.5vw] text-black bg-white font-extrabold leading-[normal] ">
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
