import React from "react"
import AboutHero from "./about-us-hero"
import AboutPara from "./about-us-store"

const AboutUs = () => {
  return (
    <>
      <div className="content-container relative">
        <div className="flex justify-between mb-8 flex-col sm:flex-row ">
          <div className="h-full">
            <h1 className=" text-white sm:text-[15vw] text-[30vw] leading-none   ">
              {/* {collection.title} */}
              Our team
            </h1>
          </div>
          <div className="text-white sm:w-[50%] w-full flex items-center sm:pl-7 text-sm  sm:text-base ">
            The most creative team
          </div>
        </div>
        <AboutHero />
        {/* <AboutPara /> */}
      </div>
    </>
  )
}

export default AboutUs
