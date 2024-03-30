import React from "react"
import { IoArrowForward } from "react-icons/io5"

const Button = ({ name }) => {
  return (
    <button className="w-full px-3 py-2 bg-white text-left border-gray-300 border-[0.5px] rounded-full text-black font-semibold flex justify-between items-center">
      <span>{name}</span>
      <span>
        <IoArrowForward />
      </span>
    </button>
  )
}

export default Button
