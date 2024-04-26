const { useLayoutEffect } = require("react")

//gsap setup for scrolltrigger hero eements
useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.set(".slider", { x: 100 })
  // Check if window width is greater than or equal to 800px
  if (window.innerWidth >= 800) {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".slider-container",
        start: "top",
        end: "+=800px",
      },
    })

    timeline
      .to(".slider", { x: 0, ease: "easeOutcirc" }, 0)
      .to(introVideo.current, { scale: 1.05, rotate: 11, opacity: 0.3 }, 0)
      .to(paraText.current, { opacity: 0, translateY: 150 }, 0)
  }
}, [])
