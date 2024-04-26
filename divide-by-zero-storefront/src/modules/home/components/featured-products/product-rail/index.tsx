"use client"
import { Region } from "@medusajs/medusa"
import { ProductCollectionWithPreviews } from "types/global"
import Slider from "../slider/index"
import { useLayoutEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
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

  //gsap setup for scrolltrigger hero eements
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.set(".slider", { x: "100%", opacity: 0 })
    // Check if window width is greater than or equal to 800px

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".slider-container",
        start: "center 70%",
        end: "center bottom",
      },
    })

    timeline.to(
      ".slider",
      { x: 0, duration: 1, ease: "power4.out", opacity: 1 },
      0
    )
  }, [])

  return (
    <div className=" px-2 sm:px-10   flex justify-center flex-col py-8 border-y border-[2px] ">
      <div className="flex justify-between mb-8 flex-col sm:flex-row  ">
        <div className="h-full">
          <h1 className=" textglobal sm:text-[15vw] text-[30vw] leading-none flex items-baseline">
            {collection.title}{" "}
            <span className="text-[4vw] ml-4">
              ( {collection.products.length} )
            </span>
          </h1>
        </div>
        <div className="textglobal sm:w-[50%] w-full flex items-center sm:pl-7 text-xs sm:text-base ">
          These baggy pants aren&apos;t just about style; they&apos;re about
          feeling like you&apos;re floating through space while still looking at
          Earth. Each pair is like a cosmic hug for your legs, with that perfect
          balance.
        </div>
      </div>
      <div className="sldier-container overflow-hidden">
        <Slider products={products} region={region} />
      </div>
    </div>
  )
}
