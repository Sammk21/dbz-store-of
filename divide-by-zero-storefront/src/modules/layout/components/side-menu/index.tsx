"use client"
import { Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Region } from "@medusajs/medusa"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment, useState } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { menuSlide, slide, scale } from "@modules/layout/templates/nav/anim"
import Link from "next/link"
import MenuLink from "./menu-linkl/MenuLink"

const navItems = [
  {
    title: "Home",

    href: "/",
  },

  {
    title: "Store",

    href: "/store",
  },

  {
    title: "Search",

    href: "/search",
  },

  {
    title: "Account",

    href: "/account",
  },
]

const SideMenu = ({ regions }: { regions: Region[] | null }) => {
  const [isActive, setIsActive] = useState(false)

  const toggleState = useToggleState()

  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive)
        }}
        className="relative uppercase h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-[#c5191b] text-sm lg:text-base font-thin cursor-pointer"
      >
        menu
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
    // <div className="h-full">
    //   <div className="flex items-center h-full">
    //     <Popover className="h-full flex">
    //       {({ open, close }) => (
    //         <>
    //           <div
    //             onClick={() => {
    //               setIsActive(!isActive)
    //             }}
    //             className="relative flex h-full"
    //           >
    //             <Popover.Button className="relative uppercase h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-[#c5191b] text-sm lg:text-base font-thin">
    //               Menu
    //             </Popover.Button>
    //           </div>

    //           <Transition
    //             show={open}
    //             as={Fragment}
    //             enter="transition ease-out duration-150"
    //             enterFrom="opacity-0"
    //             enterTo="opacity-100 backdrop-blur-2xl"
    //             leave="transition ease-in duration-150"
    //             leaveFrom="opacity-100 backdrop-blur-2xl"
    //             leaveTo="opacity-0"
    //           >
    //             <Popover.Panel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-30 inset-x-0 text-sm text-ui-fg-on-color m-2 backdrop-blur-2xl">
    //               <div className="flex flex-col h-full bg-[rgba(3,7,18,0.5)] rounded-rounded justify-between p-6">
    //                 <div className="flex justify-end" id="xmark">
    //                   <button onClick={close}>
    //                     <XMark />
    //                   </button>
    //                 </div>
    //                 <ul className="flex flex-col gap-6 items-start justify-start">
    //                   {Object.entries(SideMenuItems).map(([name, href]) => {
    //                     return (
    //                       <li key={name}>
    //                         <LocalizedClientLink
    //                           href={href}
    //                           className="text-3xl leading-10 hover:text-ui-fg-disabled"
    //                           onClick={close}
    //                         >
    //                           {name}
    //                         </LocalizedClientLink>
    //                       </li>
    //                     )
    //                   })}
    //                 </ul>
    //                 <div className="flex flex-col gap-y-6">
    //                   <div
    //                     className="flex justify-between"
    //                     onMouseEnter={toggleState.open}
    //                     onMouseLeave={toggleState.close}
    //                   >
    //                     {regions && (
    //                       <CountrySelect
    //                         toggleState={toggleState}
    //                         regions={regions}
    //                       />
    //                     )}
    //                     <ArrowRightMini
    //                       className={clx(
    //                         "transition-transform duration-150",
    //                         toggleState.state ? "-rotate-90" : ""
    //                       )}
    //                     />
    //                   </div>
    //                   <Text className="flex justify-between txt-compact-small">
    //                     © {new Date().getFullYear()} Medusa Store. All rights
    //                     reserved.
    //                   </Text>
    //                 </div>
    //               </div>
    //             </Popover.Panel>
    //           </Transition>
    //         </>
    //       )}
    //     </Popover>
    //   </div>
    // </div>
  )
}

export default SideMenu

const Nav = () => {
  const pathname = usePathname()
  const [selectedIndicator, setSelectedIndicator] = useState(pathname)

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen fixed top-0 left-0 bg-gray-500"
    >
      <div className="box-border h-full p-28 flex flex-col justify-between">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname)
          }}
          className="flex flex-col text-3xl gap-3 mt-20"
        >
          <div className="">
            <p>Navigation</p>
          </div>

          {navItems.map((data, index) => {
            return (
              <MenuLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></MenuLink>
            )
          })}
        </div>

        <div className="flex w-full justify-between text-xl gap-10">
          <a>Awwwards</a>

          <a>Instagram</a>

          <a>Dribble</a>

          <a>LinkedIn</a>
        </div>
      </div>
    </motion.div>
  )
}
