import { Suspense } from "react"
import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Logo from "@modules/logo"

import { IoBag, IoPersonSharp } from "react-icons/io5"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="fixed top-0 inset-x-0 z-50 group bg-[#000] shadow-lg ">
      <header className="relative h-28 mx-auto duration-200 content-container ">
        <nav className=" text-lg flex items-center justify-between  h-full text-small-regular text-[#fff] ">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full justify-center">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-[#c5191b] uppercase"
            >
              <Logo />
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-[#c5191b]"
                  href="/search"
                  scroll={false}
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-[#c5191b]"
                href="/account"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-[#c5191b] flex gap-2"
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
  )
}
