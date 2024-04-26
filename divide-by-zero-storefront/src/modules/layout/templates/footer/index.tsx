import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t-[0.5px] border-[#9c9c9c68] w-full h-[70vh] flex flex-col justify-between textglobal">
      <div className="w-full  text-[7vw] mx-auto pl-2 font-medium">
        <h2 className="leading-[normal]">Based in New Bombay™</h2>
      </div>
      <div className="flex sm:justify-between flex-col sm:flex-row gap-y-11  w-full p-6">
        <div className="flex gap-x-28 flex-col-reverse sm:flex-row gap-y-11">
          <ul className="uppercase">
            <li className="cursor-pointer">instagram</li>
            <li className="cursor-pointer">support@dbz.com</li>
            <li className="cursor-pointer">Terms & Condition</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
          {collections && collections.length > 0 && (
            <div className="flex flex-col gap-y-2 uppercase font-semibold">
              <span className="">Collections</span>
              <ul
                className={clx(
                  "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                  {
                    "grid-cols-2": (collections?.length || 0) > 3,
                  }
                )}
              >
                {collections?.slice(0, 6).map((c) => (
                  <li key={c.id}>
                    <LocalizedClientLink
                      className="hover:text-red-sam"
                      href={`/collections/${c.handle}`}
                    >
                      {c.title}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-end text-sm">
          <p>© 2024 DIVIDE BY ZERO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
