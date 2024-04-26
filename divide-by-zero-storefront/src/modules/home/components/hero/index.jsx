"use client"
import Image from "next/image"
import { BsArrowDown } from "react-icons/bs"
import { useInView, motion } from "framer-motion"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

const Hero = () => {
  const container = useRef(null)
  const introImage = useRef(null)
  const introVideo = useRef(null)
  const paraText = useRef(null)
  const logoText = useRef(null)

  //gsap setup for scrolltrigger hero eements
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Check if window width is greater than or equal to 800px
    if (window.innerWidth >= 800) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: true,
          start: "top",
          end: "+=800px",
        },
      })

      timeline
        .from(container.current, { scale: 1 })
        .to(introImage.current, { scale: 1.05, rotate: -11, opacity: 0.3 }, 0)
        .to(introVideo.current, { scale: 1.05, rotate: 11, opacity: 0.3 }, 0)
        .to(paraText.current, { opacity: 0, translateY: 150 }, 0)
    }
    return
  }, [])

  //Framer motion setup for text and icons animations
  const isLogoInView = useInView(logoText, { once: true })
  const textAnimation = {
    initial: { y: "110%", scale: "1.3" },
    enter: (i) => ({
      y: "0",
      scale: "1",
      transition: {
        duration: 1,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.03 * i,
      },
    }),
  }

  //written content
  const text = "Dividebyzero"
  const para = "Confused what to wear? dont worry we got you covered"

  return (
    <>
      <div ref={container} className="px-2 sm:px-10 textglobal relative ">
        <div className=" hero-container h-full w-full relative text-[#c5191b] pb-12 sm:pt-3 ">
          <div className="sm:grid grid-cols-2 w-full h-full sm:gap-6 flex flex-col ">
            <div className="sm:grid sm:grid-rows-2 h-full">
              <div
                ref={introVideo}
                className=" relative aspect-[1/1.5] sm:aspect-video  rounded-large"
              >
                <video
                  src="https://cdn.pixabay.com/video/2020/06/04/41127-427876264_large.mp4"
                  className="object-cover object-center w-full h-full rounded-large absolute top-0 intro-video  "
                  autoPlay
                  muted
                  playsInline
                  loop={true}
                />
              </div>
              <div
                ref={paraText}
                className=" h-full w-full flex items-center  py-8 "
              >
                <div className="text-[7vw] sm:text-[4vw] lg:text-[3vw] w-full">
                  {para.split(" ").map((phrase, index) => {
                    return (
                      <span
                        key={index}
                        className="overflow-hidden inline-block "
                      >
                        <h2 className="para-text-gsap flex">
                          <span className=" sm:mr-2.5 mr-1 lg:mr-3 inline-flex">
                            {phrase}
                          </span>
                        </h2>
                      </span>
                    )
                  })}
                </div>
                <div className="sm:text-[7vw] text-6xl mr-5 h-full flex justify-center items-center textglobal overflow-hidden">
                  <BsArrowDown
                    className=" arrow"
                    data-scroll
                    data-scroll-speed="0.1"
                  />
                </div>
              </div>
            </div>
            <div
              ref={introImage}
              className=" relative aspect-square  rounded-2xl  "
            >
              <Image
                src="https://images.unsplash.com/photo-1586396847415-2c76ae7e79fc?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                fill
                className="object-cover object-center rounded-large intro-img"
              />
            </div>
          </div>
        </div>
        <div className="w-full text-[3vw] sm:text-lg justify-center flex text-[#7a7a7a] uppercase">
          <p>welcome to </p>
        </div>
        <div ref={logoText} className="flex justify-center ">
          {text.split("").map((phrase, index) => {
            return (
              <div
                key={index}
                className="overflow-hidden text-[30vw] text-red-700 uppercase"
              >
                <motion.h1
                  custom={index}
                  variants={textAnimation}
                  initial="initial"
                  animate={isLogoInView ? "enter" : ""}
                >
                  {phrase}
                </motion.h1>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Hero
