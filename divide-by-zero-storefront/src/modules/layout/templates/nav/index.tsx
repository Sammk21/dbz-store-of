import { Suspense } from "react"
import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Logo from "@modules/logo"

import { BsPerson } from "react-icons/bs"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50 group backdrop-blur-sm bg-blend-difference   border-b-[0.5px] border-[#9c9c9c68] uppercase">
        <header className="relative h-20 sm:h-[6rem]  mx-auto duration-200 content-container ">
          <nav className=" text-lg flex items-center justify-between  h-full text-small-regular textglobal ">
            <div className="flex-1 basis-0 h-full flex items-center">
              <div className="h-full">
                <SideMenu regions={regions} />
              </div>
            </div>

            <div className="flex items-center h-full justify-center mb-2">
              <LocalizedClientLink
                href="/"
                className="txt-compact-xlarge-plus uppercase"
              >
                <Logo />
              </LocalizedClientLink>
            </div>

            <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
              <div className="hidden small:flex items-center gap-x-6 h-full text-xs sm:text-sm">
                {process.env.FEATURE_SEARCH_ENABLED && (
                  <LocalizedClientLink
                    className="hover:text-[#c5191b]"
                    href="/search"
                    scroll={false}
                  >
                    Search
                  </LocalizedClientLink>
                )}
                <div className="flex justify-center items-center border border-[#9c9c9c68] rounded-full px-3  py-2 ">
                  <span className=" mr-2 ">
                    <BsPerson />
                  </span>
                  <LocalizedClientLink
                    className=" text-xs sm:text-sm flex items-center justify-between capitalize"
                    href="/account"
                  >
                    Account
                  </LocalizedClientLink>
                </div>
              </div>

              <Suspense
                fallback={
                  <LocalizedClientLink
                    className="hover:text-[#c5191b] flex gap-2 "
                    href="/cart"
                  >
                    Cart(0)
                  </LocalizedClientLink>
                }
              >
                <CartButton />
              </Suspense>
            </div>
          </nav>
        </header>
      </div>
    </>
  )
}

