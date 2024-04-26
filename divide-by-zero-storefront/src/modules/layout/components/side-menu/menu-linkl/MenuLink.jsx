"use client"
import React from "react"
import { slide, scale } from "@modules/layout/templates/nav/anim"
import { motion } from "framer-motion"
import Link from "next/link"

const MenuLink = ({ data, setSelectedIndicator, isActive }) => {
  const { title, href, index } = data

  return (
    <motion.div
      className=""
      onMouseEnter={() => {
        setSelectedIndicator(href)
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="h-1 w-1 bg-black rounded-full"
      ></motion.div>

      <Link href={href}>{title}</Link>
    </motion.div>
  )
}

export default MenuLink
