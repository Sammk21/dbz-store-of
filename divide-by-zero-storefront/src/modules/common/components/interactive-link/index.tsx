import { IoArrowForward, IoArrowUp } from "react-icons/io5"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "../localized-client-link"

type InteractiveLinkProps = {
  href: string
  children?: React.ReactNode
  onClick?: () => void
}

const InteractiveLink = ({
  href,
  children,
  onClick,
  ...props
}: InteractiveLinkProps) => {
  return (
    <LocalizedClientLink
      className="flex gap-x-1 items-center group text-lg"
      href={href}
      onClick={onClick}
      {...props}
    >
      <p className="text-[#c5191b]">{children}</p>
      <IoArrowForward
        className="group-hover:-rotate-45 ease-in-out duration-150"
        color="#c5191b"
      />
    </LocalizedClientLink>
  )
}

export default InteractiveLink
