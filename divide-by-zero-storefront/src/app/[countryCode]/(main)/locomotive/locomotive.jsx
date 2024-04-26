"use client"

import { useEffect } from "react"

export default function LocomotiveScrollContainer({ children }) {
  useEffect(() => {
    let scroll
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
      })
    })

    // `useEffect`'s cleanup phase
    return () => {
      if (scroll) scroll.destroy()
    }
  })
  return <>{children}</>
}
