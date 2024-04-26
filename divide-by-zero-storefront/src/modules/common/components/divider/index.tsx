import { clx } from "@medusajs/ui"

const Divider = ({ className }: { className?: string }) => (
  <div
    className={clx(
      "h-px w-full border-b-[0.5px] border-[#9c9c9c68] mt-1",
      className
    )}
  />
)

export default Divider
