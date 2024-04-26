"use client"
import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import CustomEase from "gsap/dist/CustomEase"

const Preloader = () => {
  const counterRef = useRef(null)

  const [count, setCount] = useState(1)
  const [loading, setLoading] = useState(true)
  const [showPreloader, setShowPreloader] = useState(true)
  gsap.registerPlugin(CustomEase)

  CustomEase.create("easeOutExpo", "0.85, 0, 0.15, 1")
  CustomEase.create("easeOutcirc", "0, 0.55, 0.45, 1")
  CustomEase.create("bounce", "0.68, -0.6, 0.32, 1.6")

  useEffect(() => {
    let animationFrameId
    const tl = gsap.timeline({ defaults: { ease: "easeOutExpo" } })
    const animateCount = () => {
      if (count < 100) {
        // Generate a random delay between 100ms and 500ms
        const delay = Math.random() * (500 - 100) + 100
        setTimeout(() => {
          setCount((prevCount) => {
            const newCount = prevCount + 1
            return newCount <= 100 ? newCount : prevCount // Ensure count doesn't exceed 100
          })
          animationFrameId = requestAnimationFrame(animateCount)
        }, delay)
      } else {
        // Slide the loading screen to the right using GSAP
        gsap.set(".hero-container", { x: "-80%", opacity: 0, skewX: -18 })
        gsap.set(".intro-img", { width: 0 })
        gsap.set(".intro-video", { width: 0 })
        gsap.set(".para-text-gsap", { y: "150%", rotate: 15 })
        gsap.set(".arrow", { y: "-50%", opacity: 0 })
        tl.to(counterRef.current, { y: "-130%", duration: 0.7, skewY: 12 })
          .to(
            ".loader",
            {
              x: "130%",
              skewX: -15,
              duration: 1.3,
              onComplete: () => {
                setShowPreloader(false)
                setLoading(false)
              },
            },
            "+=0.1"
          )
          .to(
            ".hero-container",
            {
              x: 0,
              opacity: 1,
              duration: 1,
              skewX: 0,
            },
            "-=1.1"
          )
          .to(
            ".intro-video",
            {
              width: "100%",
              duration: 1.2,
              ease: "easeOutcirc",
            },
            "-=1"
          )
          .to(
            ".intro-img",
            {
              width: "100%",
              duration: 1.2,
              ease: "easeOutcirc",
            },
            "-=1"
          )
          .to(".para-text-gsap", {
            y: 0,
            scale: 1,
            stagger: 0.03,
            duration: 1,
            rotate: 0,
            ease: "easeOutcirc",
          })
          .to(
            ".arrow",
            {
              y: 0,
              stagger: 0.03,
              duration: 1.2,
              opacity: 1,
              ease: "easeOutCirc",
            },
            "-=2"
          )
      }
    }

    animationFrameId = requestAnimationFrame(animateCount)

    return () => cancelAnimationFrame(animationFrameId)
  }, [count])

  return (
    <>
      {showPreloader && (
        <div className="loader pointer-events-none top-0 fixed z-[999] h-[100vh] w-[100vw] bg-[#181818] ">
          <div className="loader-img absolute left-0 top-1/2 transform -translate-y-1/2 flex gap-3 sm:gap-10 text-white text-9xl overflow-hidden ">
            <span ref={counterRef} className="counter" id="counter">
              {count}%
            </span>
          </div>
        </div>
      )}
    </>
  )
}

export default Preloader

// useEffect(() => {
// gsap.set(".img", { y: 500 })
// gsap.set(".loader-img", { x: 500 })
// gsap.set(".hero-title", { y: 300, opacity: 0, scale: 2 })
// gsap.set(".hero-para", { y: 100, opacity: 0 })
// gsap.set(".nav", { y: -100 })
// gsap.set("#hero", { scale: 0.8 })
//   const tl = gsap.timeline({ delay: 1 })

// tl.to(".img", {
//   y: 0,
//   duration: 1.5,
//   stagger: 0.5,
//   ease: "power3.inOut",
// })
//   .to(
//     ".loader-img",
//     {
//       x: 0,
//       duration: 3,
//       ease: "power3.inOut",
//     },
//     "-=2.5"
//   )
//   .to(
//     ".img:not(#loader-logo)",
//     {
//       clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
//       duration: 0.4,
//       stagger: 0.1,
//       ease: "power3.inOut",
//     },
//     "-=1"
//   )
//   .to(
//     ".loader",
//     {
//       clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
//       duration: 1,
//       ease: "power2.inOut",
//     },
//     "-=0.5"
//   )
//   .to(
//     "#hero",
//     {
//       scale: 1,
//       duration: 1,
//       stagger: 0.1,
//       ease: "smooth",
//     },
//     "-=0.6"
//   )
//   .to(
//     ".hero-title",
//     {
//       y: 0,
//       opacity: 1,
//       duration: 1.2,
//       scale: 1,
//       stagger: 0.02,
//       ease: "power4.out",
//     },
//     "-=0.6"
//   )
//   .to(
//     ".hero-para",
//     {
//       y: 0,
//       opacity: 1,
//       duration: 1,
//       stagger: 0.01,
//       ease: "power4.inOut",
//     },
//     "-=1.3"
//   )
//   .to(
//     ".nav",
//     {
//       y: 0,
//       duration: 1,
//       stagger: 0.1,
//       ease: "power4.inOut",
//     },
//     "-=1"
//   )
// }, [])
