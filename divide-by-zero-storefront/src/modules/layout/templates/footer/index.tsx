import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-ui-border-base w-full h-[70vh] flex flex-col justify-between text-white">
      <div className="w-full  text-[9vw] mx-auto pl-2">
        <h2 className="leading-[normal]">Based in New Bombay™</h2>
      </div>
      <div className="flex sm:justify-between flex-col sm:flex-row gap-y-11  w-full p-6">
        <div className="flex gap-x-16 flex-col-reverse sm:flex-row gap-y-11">
          <ul className="uppercase">
            <li className="cursor-pointer">instagram</li>
            <li className="cursor-pointer">support@dbz.com</li>
            <li className="cursor-pointer">Terms & Condition</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
          {collections && collections.length > 0 && (
            <div className="flex flex-col gap-y-2 uppercase">
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
    // <footer className="border-t border-ui-border-base w-full">
    //   <div className="content-container flex flex-col w-full">
    //     <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
    //       <div>
    //         <LocalizedClientLink
    //           href="/"
    //           className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
    //         >
    //           Medusa Store
    //         </LocalizedClientLink>
    //       </div>
    //       <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
    //         {product_categories && product_categories?.length > 0 && (
    //           <div className="flex flex-col gap-y-2">
    //             <span className="txt-small-plus txt-ui-fg-base">
    //               Categories
    //             </span>
    //             <ul className="grid grid-cols-1 gap-2">
    //               {product_categories?.slice(0, 6).map((c) => {
    //                 if (c.parent_category) {
    //                   return
    //                 }

    //                 const children =
    //                   c.category_children?.map((child) => ({
    //                     name: child.name,
    //                     handle: child.handle,
    //                     id: child.id,
    //                   })) || null

    //                 return (
    //                   <li
    //                     className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
    //                     key={c.id}
    //                   >
    //                     <LocalizedClientLink
    //                       className={clx(
    //                         "hover:text-ui-fg-base",
    //                         children && "txt-small-plus"
    //                       )}
    //                       href={`/categories/${c.handle}`}
    //                     >
    //                       {c.name}
    //                     </LocalizedClientLink>
    //                     {children && (
    //                       <ul className="grid grid-cols-1 ml-3 gap-2">
    //                         {children &&
    //                           children.map((child) => (
    //                             <li key={child.id}>
    //                               <LocalizedClientLink
    //                                 className="hover:text-ui-fg-base"
    //                                 href={`/categories/${child.handle}`}
    //                               >
    //                                 {child.name}
    //                               </LocalizedClientLink>
    //                             </li>
    //                           ))}
    //                       </ul>
    //                     )}
    //                   </li>
    //                 )
    //               })}
    //             </ul>
    //           </div>
    //         )}
    //         {collections && collections.length > 0 && (
    //           <div className="flex flex-col gap-y-2">
    //             <span className="txt-small-plus txt-ui-fg-base">
    //               Collections
    //             </span>
    //             <ul
    //               className={clx(
    //                 "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
    //                 {
    //                   "grid-cols-2": (collections?.length || 0) > 3,
    //                 }
    //               )}
    //             >
    //               {collections?.slice(0, 6).map((c) => (
    //                 <li key={c.id}>
    //                   <LocalizedClientLink
    //                     className="hover:text-ui-fg-base"
    //                     href={`/collections/${c.handle}`}
    //                   >
    //                     {c.title}
    //                   </LocalizedClientLink>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         )}
    //         <div className="flex flex-col gap-y-2">
    //           <span className="txt-small-plus txt-ui-fg-base">Medusa</span>
    //           <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
    //             <li>
    //               <a
    //                 href="https://github.com/medusajs"
    //                 target="_blank"
    //                 rel="noreferrer"
    //                 className="hover:text-ui-fg-base"
    //               >
    //                 GitHub
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="https://docs.medusajs.com"
    //                 target="_blank"
    //                 rel="noreferrer"
    //                 className="hover:text-ui-fg-base"
    //               >
    //                 Documentation
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="https://github.com/medusajs/nextjs-starter-medusa"
    //                 target="_blank"
    //                 rel="noreferrer"
    //                 className="hover:text-ui-fg-base"
    //               >
    //                 Source code
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
    //       <Text className="txt-compact-small">
    //         © {new Date().getFullYear()} Medusa Store. All rights reserved.
    //       </Text>
    //       <MedusaCTA />
    //     </div>
    //   </div>
    // </footer>
  )
}
